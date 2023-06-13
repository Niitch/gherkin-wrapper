import { StepHook, TagHook } from '.';

/**
 * Generic hook library
 *
 * @typeParam RunnerArgs Type of the object holding the runner arguments and passed to the {@link StepHook | step related hooks}
 */
export class Hooks<RunnerArgs> {
  /** @internal Lifecycle based hooks */
  private _lifecycleBased: {
    beforeStep: StepHook<RunnerArgs>[];
    afterStep: StepHook<RunnerArgs>[];
  } = {
    beforeStep: [],
    afterStep: [],
  };

  /**
   * Generic hook library
   *
   * @typeParam RunnerArgs Type of the object holding the runner arguments and passed to the {@link StepHook | step related hooks}
   */
  constructor() {
    // nothing to do
  }

  /**
   * Register a hook that runs before each step.
   *
   * @remarks
   * - You can register multiple beforeStep hooks.
   * - The hook runs within the test.step block.
   *
   * @param {StepHook} callback the hook function
   */
  beforeStep(callback: StepHook<RunnerArgs>) {
    this._lifecycleBased.beforeStep.push(callback);
  }

  /**
   * Register a hook that runs after each step.
   *
   * @remarks
   * - You can register multiple afterStep hooks.
   * - The hook runs within the test.step block.
   *
   * @param callback the hook function
   */
  afterStep(callback: StepHook<RunnerArgs>) {
    this._lifecycleBased.afterStep.push(callback);
  }

  /** @internal */
  triggerLifecycle(name: keyof typeof this._lifecycleBased, ...args: Parameters<StepHook<RunnerArgs>>) {
    return this._lifecycleBased[name].map((hook) => hook(...args));
  }

  /** @internal Tag based hooks */
  private _tagBased: {
    [tag: string]: TagHook[];
  } = {};

  /**
   * Register a hook that runs before each Feature|Rule|Scenario having a given tag.
   *
   * @remarks
   * - You can register multiple hooks for the same tag.
   * - The hook runs within the test.describe or test block.
   *
   * @param tag the tag
   * @param callback the hook function
   */
  beforeTag(tag: string, callback: TagHook) {
    if (this._tagBased[tag]) this._tagBased[tag].push(callback);
    else this._tagBased[tag] = [callback];
  }

  /** @internal */
  triggerTag(name: string, ...args: Parameters<TagHook>) {
    return this._tagBased[name]?.map((hook) => hook(...args));
  }
}
