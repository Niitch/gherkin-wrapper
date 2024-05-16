import { Library, usableStepType } from './library';
import { Background, Feature, Rule, Scenario, Step } from '@cucumber/messages';
import { parse } from './parser';
import { Hooks } from './hooks';
import { BaseWrapperOptions, HookEffect } from '.';

/**
 * Generic gherkin wrapper
 *
 * @typeParam RunnerArgs Type of the object holding the runner arguments and passed to {@link StepFunction | step functions} and {@link StepHook | step related hooks}
 * @typeParam Options Type of the object holding the options the wrapper accepts
 */
export abstract class Wrapper<RunnerArgs, Options extends BaseWrapperOptions = BaseWrapperOptions> {
  /** The wrapper step function library */
  readonly library = new Library<RunnerArgs>();
  /** The wrapper hook library */
  readonly hooks = new Hooks<RunnerArgs>();

  /**
   * Generic gherkin wrapper
   *
   * @typeParam RunnerArgs Type of the object holding the runner arguments and passed to {@link StepFunction | step functions} and {@link StepHook | step related hooks}
   * @typeParam Options Type of the object holding the options the wrapper accepts
   * @param options wrapper options
   */
  constructor(options: Options = {} as Options) {
    if (options.library) this.library = options.library;
    if (options.hooks) this.hooks = options.hooks;
  }

  /**
   * {@inheritDoc common!Library#given}
   * @group Methods
   */
  given: typeof this.library.given = this.library.given.bind(this.library);
  /**
   * {@inheritDoc common!Library#when}
   * @group Methods
   */
  when: typeof this.library.when = this.library.when.bind(this.library);
  /**
   * {@inheritDoc common!Library#then}
   * @group Methods
   */
  then: typeof this.library.then = this.library.then.bind(this.library);
  /**
   * {@inheritDoc common!Library#any}
   * @group Methods
   */
  any: typeof this.library.any = this.library.any.bind(this.library);

  /**
   * {@inheritDoc common!Hooks#beforeTag}
   * @group Methods
   */
  beforeTag: typeof this.hooks.beforeTag = this.hooks.beforeTag.bind(this.hooks);
  /**
   * {@inheritDoc common!Hooks#afterTag}
   * @group Methods
   */
  afterTag: typeof this.hooks.afterTag = this.hooks.afterTag.bind(this.hooks);
  /**
   * {@inheritDoc common!Hooks#beforeStep}
   * @group Methods
   */
  beforeStep: typeof this.hooks.beforeStep = this.hooks.beforeStep.bind(this.hooks);
  /**
   * {@inheritDoc common!Hooks#afterStep}
   * @group Methods
   */
  afterStep: typeof this.hooks.afterStep = this.hooks.afterStep.bind(this.hooks);

  /** @internal */
  protected getStepFunction(step: Step, prevStepType: Parameters<typeof this.library.find>[0]) {
    const keywordType = usableStepType(step.keywordType, prevStepType);
    return {
      ...this.library.find(keywordType, step.text),
      keywordType,
    };
  }

  /**
   * Run tests for a feature file.
   * @param filePath path to the feature file
   * @param encoding encoding of the feature file (default: 'utf-8')
   */
  public test(filePath: string, encoding?: BufferEncoding) {
    const gherkinDocument = parse(filePath, encoding);
    if (gherkinDocument.feature) this.runFeature(gherkinDocument.feature);
  }

  /** @internal */
  protected abstract runFeature(feature: Feature): void;
  /** @internal */
  protected abstract runBackground(background: Background): void;
  /** @internal */
  protected abstract runRule(scenario: Rule): void;
  /** @internal */
  protected abstract runScenarioOutline(scenarioOutline: Scenario, effect: HookEffect): void;
  /** @internal */
  protected abstract runScenario(scenario: Scenario, effect: HookEffect, outline?: Scenario): void;
  /** @internal */
  protected abstract runStep(...args: any[]): void; // eslint-disable-line @typescript-eslint/no-explicit-any
}
