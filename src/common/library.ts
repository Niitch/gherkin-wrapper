import { DataTable, DocString, StepKeywordType } from '@cucumber/messages';

export type WrapperArgs = {
  match?: RegExpMatchArray;
  dataTable?: DataTable;
  docString?: DocString['content'];
};

export type TestFunction<T> = (frameworkArgs: T, wrapperArgs: WrapperArgs) => any;

type TestSpecs<T> = {
  spec: string | RegExp;
  fn: TestFunction<T>;
};

export function usableStepType(
  stepType: StepKeywordType | undefined,
  prevUsableStepType?: Parameters<Library<unknown>['find']>[0],
) {
  if (!stepType) return;
  if (stepType !== StepKeywordType.CONJUNCTION && stepType !== StepKeywordType.UNKNOWN) return stepType;
  if (!prevUsableStepType)
    throw new Error(`First step cannot be of type ${StepKeywordType.CONJUNCTION} or ${StepKeywordType.UNKNOWN}.`);
  return prevUsableStepType;
}

// useful in logs and error messages
export const LibraryMethodByStepType = {
  [StepKeywordType.CONTEXT]: 'given',
  [StepKeywordType.ACTION]: 'when',
  [StepKeywordType.OUTCOME]: 'then',
  [StepKeywordType.CONJUNCTION]: 'given|when|then',
  [StepKeywordType.UNKNOWN]: 'given|when|then',
};

export class Library<T> {
  private _storage: {
    [StepKeywordType.CONTEXT]: TestSpecs<T>[];
    [StepKeywordType.ACTION]: TestSpecs<T>[];
    [StepKeywordType.OUTCOME]: TestSpecs<T>[];
  } = {
    [StepKeywordType.CONTEXT]: [],
    [StepKeywordType.ACTION]: [],
    [StepKeywordType.OUTCOME]: [],
  };

  public given(spec: string | RegExp, fn: TestFunction<T>) {
    this._storage[StepKeywordType.CONTEXT].push({ spec, fn });
  }

  public when(spec: string | RegExp, fn: TestFunction<T>) {
    this._storage[StepKeywordType.ACTION].push({ spec, fn });
  }

  public then(spec: string | RegExp, fn: TestFunction<T>) {
    this._storage[StepKeywordType.OUTCOME].push({ spec, fn });
  }

  public find(
    type: StepKeywordType.CONTEXT | StepKeywordType.ACTION | StepKeywordType.OUTCOME | undefined,
    spec: string,
  ): { fn?: TestFunction<T>; wrapperArgs: WrapperArgs } {
    const _default = { wrapperArgs: {} };

    if (!type) return _default;
    const item = this._storage[type].find((o) => {
      if (typeof o.spec === 'string') return o.spec === spec;
      return o.spec.test(spec);
    });
    if (!item) return _default;
    return {
      fn: item.fn,
      wrapperArgs: {
        match: spec.match(item.spec) as RegExpMatchArray,
      },
    };
  }
}
