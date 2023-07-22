import { BaseWrapperOptions } from '../common';

export interface WrapperOptions extends BaseWrapperOptions {
  /**
   * A prebuild step function library for the wrapper to start with.
   *
   * **Usage**
   * ```ts
   * import GherkinWrapper, { JestLibrary } from "gherkin-wrapper"
   *
   * const library = new JestLibrary<typeof test>()
   * const foo = new GherkinWrapper.forJest(test, { library })
   *
   * const bar = new GherkinWrapper.forJest(test, { library })
   * const baz = new GherkinWrapper.forJest(test, { library: bar.library })
   * ```
   * Here `foo` has its own library while `bar` and `baz` share one.
   */
  library?: BaseWrapperOptions['library'];

  /**
   * A prebuild hook library for the wrapper to start with.
   *
   * **Usage**
   * ```ts
   * import GherkinWrapper, { Hooks } from "gherkin-wrapper"
   *
   * const hooks = new Hooks()
   * const foo = new GherkinWrapper.forJest(test, { hooks })
   *
   * const bar = new GherkinWrapper.forJest(test, { hooks })
   * const baz = new GherkinWrapper.forJest(test, { hooks: bar.hooks })
   * ```
   * Here `foo` has its own library while `bar` and `baz` share one.
   */
  hooks?: BaseWrapperOptions['hooks'];
}

export * from './wrapper';
export * from './library';
