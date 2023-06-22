import { Library } from '../common/library';
import { PlaywrightBaseTestObject, RunnerArgs } from '.';

/**
 * Helper class to build step function libraries for the Playwright GherkinWrapper.
 *
 * **Usage**
 * ```ts
 * import { test } from "@playwright/test";
 * import GherkinWrapper from "gherkin-wrapper"
 * import { PlaywrightLibrary } from "gherkin-wrapper/playwright"
 *
 * const library = new PlaywrightLibrary<typeof test>()
 * library.given(...)
 * library.when(...)
 * library.then(...)
 * const library = new GherkinWrapper.forPlaywright(test, { library })
 * ```
 */
export class PlaywrightLibrary<T extends PlaywrightBaseTestObject> extends Library<RunnerArgs<T>> {
  /**
   * Helper class to build step function libraries for the Playwright GherkinWrapper.
   *
   * **Usage**
   * ```ts
   * import { test } from "@playwright/test";
   * import GherkinWrapper from "gherkin-wrapper"
   * import { PlaywrightLibrary } from "gherkin-wrapper/playwright"
   *
   * const library = new PlaywrightLibrary<typeof test>()
   * library.given(...)
   * library.when(...)
   * library.then(...)
   * const library = new GherkinWrapper.forPlaywright(test, { library })
   * ```
   */
  constructor() {
    super();
  }
}
