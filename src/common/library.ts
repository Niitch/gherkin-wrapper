import { StepKeywordType } from '@cucumber/messages';
import { StepFunction, TestSpec, WrapperArgs } from '.';

/** @internal */
export function usableStepType(
  stepType: StepKeywordType | undefined,
  prevUsableStepType?: Parameters<Library<unknown>['find']>[0],
) {
  if (!stepType || stepType === StepKeywordType.UNKNOWN) return prevUsableStepType || StepKeywordType.UNKNOWN;

  if (stepType === StepKeywordType.CONJUNCTION) {
    if (!prevUsableStepType) throw new Error(`First step cannot be of type ${StepKeywordType.CONJUNCTION}.`);
    return prevUsableStepType;
  }

  return stepType;
}

/** @internal useful in logs and error messages */
export const LibraryMethodByStepType = {
  [StepKeywordType.CONTEXT]: 'given',
  [StepKeywordType.ACTION]: 'when',
  [StepKeywordType.OUTCOME]: 'then',
  [StepKeywordType.CONJUNCTION]: 'given|when|then',
  [StepKeywordType.UNKNOWN]: 'given|when|then|any',
};

/**
 * Generic step function library
 *
 * @typeParam RunnerArgs Type of the object holding the runner arguments and passed to the {@link StepFunction | step functions}
 */
export class Library<RunnerArgs> {
  /** @internal */
  private _storage: {
    [StepKeywordType.CONTEXT]: TestSpec<RunnerArgs>[];
    [StepKeywordType.ACTION]: TestSpec<RunnerArgs>[];
    [StepKeywordType.OUTCOME]: TestSpec<RunnerArgs>[];
    [StepKeywordType.UNKNOWN]: TestSpec<RunnerArgs>[];
  } = {
    [StepKeywordType.CONTEXT]: [],
    [StepKeywordType.ACTION]: [],
    [StepKeywordType.OUTCOME]: [],
    [StepKeywordType.UNKNOWN]: [],
  };

  /**
   * Generic step function library
   *
   * @typeParam RunnerArgs Type of the object holding the runner arguments and passed to the {@link StepFunction | step functions}
   */
  constructor() {
    // nothing to do
  }

  /**
   * Register a step function to be run against "context" steps having a text that match a pattern.
   *
   * @remark The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.
   *
   * @param pattern the pattern
   * @param fn the step function
   */
  public given(pattern: string | RegExp, fn: StepFunction<RunnerArgs>) {
    this._storage[StepKeywordType.CONTEXT].push({ pattern, fn });
  }

  /**
   * Register a step function to be run against "action" steps having a text that match a pattern.
   *
   * @remark The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.
   *
   * @param pattern the pattern
   * @param fn the step function
   */
  public when(pattern: string | RegExp, fn: StepFunction<RunnerArgs>) {
    this._storage[StepKeywordType.ACTION].push({ pattern, fn });
  }

  /**
   * Register a step function to be run against "outcome" steps having a text that match a pattern.
   *
   * @remark The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.
   *
   * @param pattern the pattern
   * @param fn the step function
   */
  public then(pattern: string | RegExp, fn: StepFunction<RunnerArgs>) {
    this._storage[StepKeywordType.OUTCOME].push({ pattern, fn });
  }

  /**
   * Register a step function to be run against any steps having a text that match a pattern.
   *
   * @remark The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.
   * @remark Functions registered using a given|when|then method are prioritized over functions registered using this method.
   *
   * @param pattern the pattern
   * @param fn the step function
   */
  public any(pattern: string | RegExp, fn: StepFunction<RunnerArgs>) {
    this._storage[StepKeywordType.UNKNOWN].push({ pattern, fn });
  }

  /** @internal */
  public find(
    type: StepKeywordType.CONTEXT | StepKeywordType.ACTION | StepKeywordType.OUTCOME | StepKeywordType.UNKNOWN,
    text: string,
  ): { fn?: StepFunction<RunnerArgs>; wrapperArgs: WrapperArgs } {
    const _default = { wrapperArgs: {} };

    const doesMatch = (o: TestSpec<RunnerArgs>) => {
      if (typeof o.pattern === 'string') return o.pattern === text;
      return o.pattern.test(text);
    };

    if (!type) return _default;
    let item = this._storage[type].find(doesMatch);
    if (!item) item = this._storage[StepKeywordType.UNKNOWN].find(doesMatch);
    if (!item) return _default;
    return {
      fn: item.fn,
      wrapperArgs: {
        match: text.match(item.pattern) as RegExpMatchArray,
      },
    };
  }
}
