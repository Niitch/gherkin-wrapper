import { LibraryMethodByStepType } from '../common/library';
import { Background, Feature, Rule, Scenario, Step, StepKeywordType } from '@cucumber/messages';
import { Wrapper as Base, StepFunction, WrapperArgs } from '../common';
import { DataTable } from '@cucumber/cucumber';
import { PlaywrightBaseTestObject, RunnerArgs, WrapperOptions } from '.';

/** @internal */
type FixtureProvider<T extends PlaywrightBaseTestObject> = (
  stepsRunner: (args: RunnerArgs<T>) => Promise<any>,
) => (args: RunnerArgs<T>) => Promise<any>;

/** @internal */
interface StepRunnerArgs<T extends RunnerArgs<PlaywrightBaseTestObject>> {
  step: Step;
  fn?: StepFunction<T>;
  runnerArgs: T;
  wrapperArgs: WrapperArgs;
}

/**
 * A GherkinWrapper for the Playwright test runner.
 *
 * **Usage**
 * ```ts
 * import { test } from "@playwright/test";
 * import GherkinWrapper from "gherkin-wrapper"
 *
 * const wrapper = new GherkinWrapper.forPlaywright(test)
 * wrapper.given(...)
 * wrapper.when(...)
 * wrapper.then(...)
 * wrapper.test('feature.file')
 * ```
 */
export class PlaywrightWrapper<T extends PlaywrightBaseTestObject> extends Base<RunnerArgs<T>> {

  /** @internal */
  private _describe: (location: any, title: string, callback: () => void) => void;
  /** @internal */
  private _createTest: (location: any, title: string, callback: (args: RunnerArgs<T>) => any) => void;
  /** @internal */
  private _step: (location: any, title: string, callback: () => any) => Promise<any>;
  /** @internal */
  private _beforeEach: (location: any, callback: (args: RunnerArgs<T>) => any) => void;
  /** @internal */
  private _fixtures: {fixtures: {[k: string]: any}}[]

  /**
   * A GherkinWrapper for the Playwright test runner.
   *
   * **Usage**
   * ```ts
   * import { test } from "@playwright/test";
   * import GherkinWrapper from "gherkin-wrapper"
   *
   * const wrapper = new GherkinWrapper.forPlaywright(test)
   * wrapper.given(...)
   * wrapper.when(...)
   * wrapper.then(...)
   * wrapper.test('feature.file')
   * ```
   * @param testRunner a playwright test object
   * @param options wrapper options
   */
  constructor(testRunner: T, options?: WrapperOptions) {
    super(options);

    const sym = Reflect.ownKeys(testRunner).find((key) => key.toString() === 'Symbol(testType)') as symbol;
    // @ts-expect-error
    const testRunnerImpl = testRunner[sym];
    this._fixtures = testRunnerImpl.fixtures
    this._describe = testRunnerImpl._describe.bind(testRunnerImpl, 'default');
    this._createTest = testRunnerImpl._createTest.bind(testRunnerImpl, 'default');
    this._step = testRunnerImpl._step.bind(testRunnerImpl);
    this._beforeEach = testRunnerImpl._hook.bind(testRunnerImpl, 'beforeEach');

    if (!options?.hooks)
      this.hooks.beforeStep(({ target, fn }) => {
        testRunner.skip(
          !fn,
          `No test function found for step '${target.keyword + target.text}'. Consider adding one using the wrapper ${
            LibraryMethodByStepType[target.keywordType as StepKeywordType]
          } method`,
        );
      });
  }

  /** @internal */
  protected runFeature(feature: Feature) {
    this._describe(feature.location, feature.name, () => {
      for (const { name: tag } of feature.tags) this.hooks.triggerTag(tag, { target: feature });
      for (const child of feature.children)
        if (child.rule) this.runRule(child.rule);
        else if (child.background) this.runBackground(child.background);
        else if (child.scenario) this.runScenario(child.scenario);
    });
  }

  /** @internal */
  protected runRule(rule: Rule) {
    this._describe(rule.location, rule.name, () => {
      for (const { name: tag } of rule.tags) this.hooks.triggerTag(tag, { target: rule });
      for (const child of rule.children)
        if (child.scenario) this.runScenario(child.scenario);
        else if (child.background) this.runBackground(child.background);
    });
  }

  /** @internal */
  protected runBackground(background: Background) {
    const steps = this.prepareSteps(background);
    const provideFixture = this.buildFixtureProvider(steps);

    this._beforeEach(
      background.location,
      provideFixture(async (runnerArgs: RunnerArgs<T>) => {
        for (const s of steps) this.runStep({ ...s, runnerArgs });
      }),
    );
  }

  /** @internal */
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
              step.text = step.text.replace('<' + cell.value + '>', '<' + row.cells[j].value + '>');
            });
            return step;
          });
          scenarios.push(scenario);
        });

    for (const s of scenarios) this.runScenario(s);
  }

  /** @internal */
  protected runScenario(scenario: Scenario) {
    if (scenario.examples.length) return this.runScenarioOutline(scenario);

    const steps = this.prepareSteps(scenario);
    const provideFixture = this.buildFixtureProvider(steps);

    this._createTest(
      scenario.location,
      scenario.name,
      provideFixture(async (runnerArgs: RunnerArgs<T>) => {
        for (const { name: tag } of scenario.tags) this.hooks.triggerTag(tag, { target: scenario });
        for (const s of steps) await this.runStep({ ...s, runnerArgs });
      }),
    );
  }

  /** @internal */
  protected async runStep(args: StepRunnerArgs<RunnerArgs<T>>) {
    await this._step(args.step.location, args.step.keyword + args.step.text, async () => {
      await Promise.all(
        this.hooks.triggerLifecycle(
          'beforeStep',
          { target: args.step, fn: args.fn },
          args.runnerArgs,
          args.wrapperArgs as WrapperArgs,
        ),
      );
      await args.fn?.(args.runnerArgs as Parameters<StepFunction<RunnerArgs<T>>>[0], {
        ...(args.wrapperArgs as WrapperArgs),
        rawdataTable: args.step.dataTable,
        dataTable: args.step.dataTable ? new DataTable(args.step.dataTable) : undefined,
        docString: args.step.docString?.content,
      });
      await Promise.all(
        this.hooks.triggerLifecycle(
          'afterStep',
          { target: args.step, fn: args.fn },
          args.runnerArgs,
          args.wrapperArgs as WrapperArgs,
        ),
      );
    });
  }

  /** @internal */
  private prepareSteps(backgroundOrScenario: Background | Scenario) {
    return backgroundOrScenario.steps.reduce((list, step, index) => {
      return list.concat([{ step, ...this.getStepFunction(step, list[index - 1]?.keywordType) }]);
    }, [] as (ReturnType<typeof this.getStepFunction> & { step: Step })[]);
  }

  /** @internal */
  private buildFixtureProvider(steps: { fn?: StepFunction<RunnerArgs<T>> }[]): FixtureProvider<T> {
    const availableFixtures = this._fixtures.flatMap((value) =>
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

// playwright functions to identify fixture parameters

/** @internal */
function fixtureParameterNames(fn: any) {
  if (typeof fn !== 'function') return [];
  return innerFixtureParameterNames(fn);
}
/** @internal */
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
/** @internal */
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
/** @internal */
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
