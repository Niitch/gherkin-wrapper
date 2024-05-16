import { LibraryMethodByStepType } from '../common/library';
import { Background, Feature, Rule, Scenario, Step, StepKeywordType } from '@cucumber/messages';
import { Wrapper as Base, HookEffect, StepFunction, WrapperArgs } from '../common';
import { DataTable } from '@cucumber/cucumber';
import { WrapperOptions } from '.';
import cloneDeep from 'lodash.clonedeep';

/** @internal */
interface StepRunnerArgs {
  step: Step;
  fn?: StepFunction<null>;
  wrapperArgs: WrapperArgs;
}

/**
 * A GherkinWrapper for the Jest test runner.
 *
 * **Usage**
 * ```ts
 * import GherkinWrapper from "gherkin-wrapper"
 *
 * const wrapper = new GherkinWrapper.forJest()
 * wrapper.given(...)
 * wrapper.when(...)
 * wrapper.then(...)
 * wrapper.test('feature.file')
 * ```
 */
export class JestWrapper extends Base<null> {
  /**
   * A GherkinWrapper for the Jest test runner.
   *
   * **Usage**
   * ```ts
   * import GherkinWrapper from "gherkin-wrapper"
   *
   * const wrapper = new GherkinWrapper.forJest()
   * wrapper.given(...)
   * wrapper.when(...)
   * wrapper.then(...)
   * wrapper.test('feature.file')
   * ```
   * @param options wrapper options
   */
  constructor(options?: WrapperOptions) {
    super(options);

    if (!options?.hooks)
      this.hooks.beforeStep(({ target, fn }) => {
        if (!fn) {
          // tslint:disable-next-line:no-console
          console.warn(
            `No test function found for step '${target.keyword + target.text}'. Consider adding one using the wrapper ${
              LibraryMethodByStepType[target.keywordType as StepKeywordType]
            } method`,
          );
        }
      });
  }

  /** @internal */
  protected runFeature(feature: Feature) {
    describe(feature.name, () => {
      const beforeEffect = this.hooks.triggerTags(
        'before',
        feature.tags.map((tag) => tag.name),
        { target: feature },
      );
      for (const child of feature.children)
        if (child.rule) this.runRule(child.rule);
        else if (child.background) this.runBackground(child.background);
        else if (child.scenario) {
          if (child.scenario.examples.length) this.runScenarioOutline(child.scenario, beforeEffect);
          else this.runScenario(child.scenario, beforeEffect);
        }
      const afterEffect = this.hooks.triggerTags(
        'after',
        feature.tags.map((tag) => tag.name),
        { target: feature },
      );
    });
  }

  /** @internal */
  protected runRule(rule: Rule) {
    describe(rule.name, () => {
      const beforeEffect = this.hooks.triggerTags(
        'before',
        rule.tags.map((tag) => tag.name),
        { target: rule },
      );
      for (const child of rule.children)
        if (child.scenario) {
          if (child.scenario.examples.length) this.runScenarioOutline(child.scenario, beforeEffect);
          else this.runScenario(child.scenario, beforeEffect);
        } else if (child.background) this.runBackground(child.background);
      const afterEffect = this.hooks.triggerTags(
        'after',
        rule.tags.map((tag) => tag.name),
        { target: rule },
      );
    });
  }

  /** @internal */
  protected runBackground(background: Background) {
    const steps = this.prepareSteps(background);

    beforeEach(async () => {
      for (const s of steps) await this.runStep({ ...s });
    });
  }

  /** @internal */
  protected runScenarioOutline(scenarioOutline: Scenario, effect: HookEffect) {
    const scenarios: Scenario[] = [];

    for (const ex of scenarioOutline.examples)
      if (ex.tableHeader)
        ex.tableBody.forEach((row, i) => {
          const scenario = Object.assign({}, scenarioOutline);
          if (ex.name !== '') scenario.name += ' -- ' + ex.name;
          scenario.name += ' (' + (i + 1) + ')';
          scenario.examples = [];
          scenario.steps = scenario.steps.map((model) => {
            const step = cloneDeep(model);
            ex.tableHeader?.cells.forEach((cell, j) => {
              step.text = step.text.replace('<' + cell.value + '>', '<' + row.cells[j].value + '>');
            });
            Object.assign(step.location, row.location);
            return step;
          });
          scenarios.push(scenario);
        });

    const beforeEffect = this.hooks.triggerTags(
      'before',
      scenarioOutline.tags.map((tag) => tag.name),
      { target: scenarioOutline },
    );
    for (const s of scenarios) this.runScenario(s, { ...effect, ...beforeEffect }, scenarioOutline);
    const afterEffect = this.hooks.triggerTags(
      'after',
      scenarioOutline.tags.map((tag) => tag.name),
      { target: scenarioOutline },
    );
  }

  /** @internal */
  protected runScenario(scenario: Scenario, effect: HookEffect, outline?: Scenario) {
    const steps = this.prepareSteps(scenario);

    const runner = async () => {
      const beforeEffect = await this.hooks.triggerTags(
        'before',
        scenario.tags.map((tag) => tag.name),
        { target: scenario },
        true,
      );
      for (const s of steps) await this.runStep({ ...s });
      const afterEffect = await this.hooks.triggerTags(
        'after',
        scenario.tags.map((tag) => tag.name),
        { target: scenario },
        true,
      );
    };

    if (effect.concurrent) {
      test.concurrent(scenario.name, runner);
    } else test(scenario.name, runner);
  }

  /** @internal */
  protected async runStep(args: StepRunnerArgs) {
    const beforeEffect = await this.hooks.triggerLifecycle(
      'beforeStep',
      { target: args.step, fn: args.fn },
      args.wrapperArgs as WrapperArgs,
    );
    await args.fn?.({
      ...(args.wrapperArgs as WrapperArgs),
      rawdataTable: args.step.dataTable,
      dataTable: args.step.dataTable ? new DataTable(args.step.dataTable) : undefined,
      docString: args.step.docString?.content,
    });
    const afterEffect = await this.hooks.triggerLifecycle(
      'afterStep',
      { target: args.step, fn: args.fn },
      args.wrapperArgs as WrapperArgs,
    );
  }

  /** @internal */
  private prepareSteps(backgroundOrScenario: Background | Scenario) {
    return backgroundOrScenario.steps.reduce((list, step, index) => {
      return list.concat([{ step, ...this.getStepFunction(step, list[index - 1]?.keywordType) }]);
    }, [] as (ReturnType<typeof this.getStepFunction> & { step: Step })[]);
  }
}
