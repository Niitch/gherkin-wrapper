import { Feature, Rule, Scenario } from '@cucumber/messages';
import { HookEffect, StepHook, TagHook } from '.';

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
    // nothing to do - doc only
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
  async triggerLifecycle(name: keyof typeof this._lifecycleBased, ...args: Parameters<StepHook<RunnerArgs>>) {
    const effects = await Promise.all(this._lifecycleBased[name].map((hook) => hook(...args)));
    return effects.reduce((prev, effect) => ({ ...prev, ...effect }), {});
  }

  /** @internal Tag based hooks */
  private _tagBased: {
    [type in 'before' | 'after']: { [tag: string]: TagHook[] };
  } = { before: {}, after: {} };

  /**
   * Register a hook that runs before each Feature|Rule|Scenario having a given tag.
   *
   * @remarks
   * - You can register multiple hooks for the same tag.
   * - The hook runs within the describe or test block.
   * - Effects of async hooks are ignored for Features and Rules
   *
   * @param tag the tag
   * @param callback the hook function
   */
  beforeTag = this._registerTagHook.bind(this, 'before');

  /**
   * Register a hook that runs after each Feature|Rule|Scenario having a given tag.
   *
   * @remarks
   * - You can register multiple hooks for the same tag.
   * - The hook runs within the describe or test block.
   * - Effects of async hooks are ignored for Features and Rules
   *
   * @param tag the tag
   * @param callback the hook function
   */
  afterTag = this._registerTagHook.bind(this, 'after');

  /** @internal */
  private _registerTagHook(type: 'before' | 'after', tag: string, callback: TagHook) {
    if (this._tagBased[type][tag]) this._tagBased[type][tag].push(callback);
    else this._tagBased[type][tag] = [callback];
  }

  triggerTags(type: 'before' | 'after', tags: string[], hookArgs: { target: Feature | Rule | Scenario }): HookEffect;
  triggerTags(
    type: 'before' | 'after',
    tags: string[],
    hookArgs: { target: Scenario },
    async: true,
  ): Promise<HookEffect>;
  /** @internal */
  triggerTags(type: 'before' | 'after', tags: string[], hookArgs: Parameters<TagHook>[0], async = false) {
    const selectedHooks = Object.entries(this._tagBased[type]).reduce(
      (selected, [tag, hooks]) => (tags.includes(tag) ? [...selected, ...hooks] : selected),
      [] as TagHook[],
    );
    if (hookArgs.target instanceof Scenario && async)
      return Promise.all(selectedHooks.map((hook) => hook(hookArgs))).then((effects) =>
        effects.reduce((prev, effect) => ({ ...prev, ...effect }), {} as HookEffect),
      );
    return selectedHooks.reduce((effect, hook) => {
      const newEffect = hook(hookArgs);
      if (newEffect instanceof Promise) return effect; // ignore effects of async hooks
      return { ...effect, ...newEffect };
    }, {} as HookEffect);
  }
}
