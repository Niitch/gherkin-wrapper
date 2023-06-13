import { Library, usableStepType } from './library';
import { Background, Feature, Rule, Scenario, Step } from '@cucumber/messages';
import { parse } from './parser';
import { Hooks } from './hooks';
import { BaseWrapperOptions } from '.';

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

  /** @group Methods */
  given = this.library.given.bind(this.library);
  /** @group Methods */
  when = this.library.when.bind(this.library);
  /** @group Methods */
  then = this.library.then.bind(this.library);
  /** @group Methods */
  any = this.library.any.bind(this.library);

  /** @group Methods */
  beforeTag = this.hooks.beforeTag.bind(this.hooks);
  /** @group Methods */
  beforeStep = this.hooks.beforeStep.bind(this.hooks);
  /** @group Methods */
  afterStep = this.hooks.afterStep.bind(this.hooks);
  /** @group Methods */

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
  protected abstract runScenarioOutline(scenarioOutline: Scenario): void;
  /** @internal */
  protected abstract runScenario(scenario: Scenario): void;
  /** @internal */
  protected abstract runStep(...args: any[]): void;
}
