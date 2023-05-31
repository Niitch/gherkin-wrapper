import { LibraryMethodByStepType, WrapperArgs } from '../common/library';
import { TestFunction } from '../common/library';
import { Background, Feature, Rule, Scenario, Step, StepKeywordType } from '@cucumber/messages';
import { Wrapper as Base, BaseWrapperOptions } from '../common/wrapper';
import { DataTable } from '@cucumber/cucumber';
import { test as baseTestRunner } from '@playwright/test';

type BaseTestRunner = typeof baseTestRunner;
type TestArgs<T extends BaseTestRunner> = Parameters<Parameters<T>[1]>[0];
type FixtureProvider<T extends BaseTestRunner> = (
  stepsRunner: (args: TestArgs<T>) => Promise<any>,
) => (args: TestArgs<T>) => Promise<any>;

interface StepRunnerArgs<T extends TestArgs<BaseTestRunner>> {
  step: Step;
  fn?: TestFunction<T>;
  runnerArgs: T;
  wrapperArgs: WrapperArgs;
}

class Wrapper<T extends BaseTestRunner> extends Base<TestArgs<T>> {
  private testRunner: T;
  private readonly sym: symbol;

  constructor(testRunner: T, options?: BaseWrapperOptions) {
    super(options);
    this.sym = Reflect.ownKeys(testRunner).find((key) => key.toString() === 'Symbol(testType)') as symbol;
    this.testRunner = testRunner;
    if (!this.hooks.beforeStep)
      this.hooks.beforeStep = (args: StepRunnerArgs<TestArgs<T>>) => {
        this.testRunner.skip(
          !args.fn,
          `No test function found for step '${
            args.step.keyword + args.step.text
          }'. You shoul add one using the GherkinWrapper.${
            LibraryMethodByStepType[args.step.keywordType as StepKeywordType]
          } method`,
        );
      };
  }

  protected runFeature(feature: Feature) {
    this.testRunner.describe(feature.name, () => {
      for (const { name: tag } of feature.tags) this.triggerTag(tag, [feature]);
      for (const child of feature.children)
        if (child.rule) this.runRule(child.rule);
        else if (child.background) this.runBackground(child.background);
        else if (child.scenario) this.runScenario(child.scenario);
    });
  }

  protected runRule(rule: Rule) {
    this.testRunner.describe(rule.name, () => {
      for (const { name: tag } of rule.tags) this.triggerTag(tag, [rule]);
      for (const child of rule.children)
        if (child.scenario) this.runScenario(child.scenario);
        else if (child.background) this.runBackground(child.background);
    });
  }

  protected runBackground(background: Background) {
    const steps = this.prepareSteps(background);
    const provideFixture = this.buildFixtureProvider(steps);

    this.testRunner.beforeEach(
      provideFixture(async (runnerArgs: TestArgs<T>) => {
        for (const s of steps) this.runStep({ ...s, runnerArgs });
      }),
    );
  }

  protected runScenarioOutline(scenarioOutline: Scenario) {
    const scenarios: Scenario[] = [];

    for (const ex of scenarioOutline.examples)
      if (ex.tableHeader)
        ex.tableBody.map((row, i) => {
          const scenario = Object.assign({}, scenarioOutline);
          if (ex.name !== '') scenario.name += ' -- ' + ex.name;
          scenario.name += ' (' + (i + 1) + ')';
          scenario.examples = [];
          scenario.steps = scenario.steps.map((step) => {
            ex.tableHeader?.cells.map((cell, j) => {
              step.text = step.text.replace('<' + cell.value + '>', row.cells[j].value);
            });
            return step;
          });
          scenarios.push(scenario);
        });

    for (const s of scenarios) this.runScenario(s);
  }

  protected runScenario(scenario: Scenario) {
    if (scenario.examples.length) return this.runScenarioOutline(scenario);

    const steps = this.prepareSteps(scenario);
    const provideFixture = this.buildFixtureProvider(steps);

    this.testRunner(
      scenario.name,
      provideFixture(async (runnerArgs: TestArgs<T>) => {
        for (const { name: tag } of scenario.tags) this.triggerTag(tag, [scenario]);
        for (const s of steps) await this.runStep({ ...s, runnerArgs });
      }),
    );
  }

  protected async runStep(args: StepRunnerArgs<TestArgs<T>>) {
    await this.testRunner.step(args.step.keyword + args.step.text, async () => {
      await this.hooks.beforeStep?.(args);
      await args.fn?.(args.runnerArgs, {
        ...args.wrapperArgs,
        rawdataTable: args.step.dataTable,
        dataTable: args.step.dataTable ? new DataTable(args.step.dataTable) : undefined,
        docString: args.step.docString?.content,
      });
      await this.hooks.afterStep?.(args);
    });
  }

  private prepareSteps(backgroundOrScenario: Background | Scenario) {
    return backgroundOrScenario.steps.reduce((list, step, index) => {
      return list.concat([{ step, ...this.getTestFunction(step, list[index - 1]?.keywordType) }]);
    }, [] as (ReturnType<typeof this.getTestFunction> & { step: Step })[]);
  }

  private buildFixtureProvider(steps: { fn?: TestFunction<TestArgs<T>> }[]): FixtureProvider<T> {
    // @ts-expect-error access to playwright internal testTypeImplementation
    const availableFixtures: string[] = this.testRunner[this.sym].fixtures.flatMap((value) =>
      Object.keys(value.fixtures),
    );
    const requiredFixtureNames =
      '{' +
      [
        ...new Set(steps.flatMap(({ fn }) => fixtureParameterNames(fn)).filter((f) => availableFixtures.includes(f))),
      ].join(',') +
      '}';
    return new Function(
      'runSteps',
      `return ((${requiredFixtureNames}) => runSteps(${requiredFixtureNames}))`,
    ) as FixtureProvider<T>;
  }
}

export default Wrapper;

// playwright functions to identify fixture parameters

function fixtureParameterNames(fn: any) {
  if (typeof fn !== 'function') return [];
  return innerFixtureParameterNames(fn);
}
function innerFixtureParameterNames(fn: (...args: any[]) => any) {
  const text = filterOutComments(fn.toString());
  const match = text.match(/(?:async)?(?:\s+function)?[^(]*\(([^)]*)/);
  if (!match) return [];
  const trimmedParams = match[1].trim();
  if (!trimmedParams) return [];
  const [firstParam] = splitByComma(trimmedParams);
  if (firstParam[0] !== '{' || firstParam[firstParam.length - 1] !== '}') {
    return [];
  }
  const props = splitByComma(firstParam.substring(1, firstParam.length - 1)).map((prop) => {
    const colon = prop.indexOf(':');
    return colon === -1 ? prop.trim() : prop.substring(0, colon).trim();
  });
  const restProperty = props.find((prop) => prop.startsWith('...'));
  if (restProperty) {
    return [];
  }
  return props;
}
function filterOutComments(s: string) {
  const result: string[] = [];
  let commentState = 'none';
  for (let i = 0; i < s.length; ++i) {
    if (commentState === 'singleline') {
      if (s[i] === '\n') commentState = 'none';
    } else if (commentState === 'multiline') {
      if (s[i - 1] === '*' && s[i] === '/') commentState = 'none';
    } else if (commentState === 'none') {
      if (s[i] === '/' && s[i + 1] === '/') {
        commentState = 'singleline';
      } else if (s[i] === '/' && s[i + 1] === '*') {
        commentState = 'multiline';
        i += 2;
      } else {
        result.push(s[i]);
      }
    }
  }
  return result.join('');
}
function splitByComma(s: string) {
  const result: string[] = [];
  const stack: string[] = [];
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[') {
      stack.push(s[i] === '{' ? '}' : ']');
    } else if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else if (!stack.length && s[i] === ',') {
      const token = s.substring(start, i).trim();
      if (token) result.push(token);
      start = i + 1;
    }
  }
  const lastToken = s.substring(start).trim();
  if (lastToken) result.push(lastToken);
  return result;
}
