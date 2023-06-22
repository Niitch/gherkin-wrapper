import { test } from '@playwright/test';
import { BaseWrapperOptions } from '../common';

/** Type of the default playwright test object */
export type PlaywrightBaseTestObject = typeof test;

/**
 * Type of the runner argument for a given playwright test object.
 * For Playwright, it is the fixtures object usually passed as first parameters to the test functions.
 *
 * @typeParam PlaywrightTestObject Type of the playwright test object
 */
export type RunnerArgs<PlaywrightTestObject extends PlaywrightBaseTestObject> = Parameters<
  Parameters<PlaywrightTestObject>[1]
>[0];

export interface WrapperOptions extends BaseWrapperOptions {
  /**
   * A prebuild step function library for the wrapper to start with.
   *
   * **Usage**
   * ```ts
   * import { test } from "@playwright/test";
   * import GherkinWrapper, { PlaywrightLibrary } from "gherkin-wrapper"
   *
   * const library = new PlaywrightLibrary<typeof test>()
   * const foo = new GherkinWrapper.forPlaywright(test, { library })
   *
   * const bar = new GherkinWrapper.forPlaywright(test, { library })
   * const baz = new GherkinWrapper.forPlaywright(test, { library: wrapper.library })
   * ```
   * Here `foo` has its own library while `bar` and `baz` share one.
   */
  library?: BaseWrapperOptions['library'];

  /**
   * A prebuild hook library for the wrapper to start with.
   *
   * **Usage**
   * ```ts
   * import { test } from "@playwright/test";
   * import GherkinWrapper, { Hooks } from "gherkin-wrapper"
   *
   * const hooks = new Hooks()
   * const foo = new GherkinWrapper.forPlaywright(test, { hooks })
   *
   * const bar = new GherkinWrapper.forPlaywright(test, { hooks })
   * const baz = new GherkinWrapper.forPlaywright(test, { hooks: wrapper.hooks })
   * ```
   * Here `foo` has its own library while `bar` and `baz` share one.
   */
  hooks?: BaseWrapperOptions['hooks'];
}

export * from './wrapper';
export * from './library';
