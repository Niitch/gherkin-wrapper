import { Library } from '../common/library';

/**
 * Helper class to build step function libraries for the Jest GherkinWrapper.
 *
 * **Usage**
 * ```ts
 * import GherkinWrapper from "gherkin-wrapper"
 * import { JestLibrary } from "gherkin-wrapper/jest"
 *
 * const library = new JestLibrary()
 * library.given(...)
 * library.when(...)
 * library.then(...)
 * const library = new GherkinWrapper.forJest({ library })
 * ```
 */
export class JestLibrary extends Library<null> {
  /**
   * Helper class to build step function libraries for the Jest GherkinWrapper.
   *
   * **Usage**
   * ```ts
   * import GherkinWrapper from "gherkin-wrapper"
   * import { JestLibrary } from "gherkin-wrapper/jest"
   *
   * const library = new JestLibrary()
   * library.given(...)
   * library.when(...)
   * library.then(...)
   * const library = new GherkinWrapper.forJest({ library })
   * ```
   */
  constructor() {
    super();
  }
}
