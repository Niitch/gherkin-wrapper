import { DataTable as RawDataTable, DocString, StepKeywordType } from '@cucumber/messages';
import { DataTable } from '@cucumber/cucumber';

export type WrapperArgs = {
  match?: RegExpMatchArray;
  dataTable?: DataTable;
  rawdataTable?: RawDataTable;
  docString?: DocString['content'];
};

type KeyValue = { [k: string | number | symbol]: any };

type WithDefault<Base, Default> = {
  [K in keyof (Base & Omit<KeyValue, keyof Base>)]: K extends keyof Base ? Base[K] : Default;
};

export type TestFunction<Base> = (frameworkArgs: WithDefault<Base, undefined>, wrapperArgs: WrapperArgs) => any;

type TestSpecs<T> = {
  spec: string | RegExp;
  fn: TestFunction<T>;
};

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
    [StepKeywordType.UNKNOWN]: TestSpecs<T>[];
  } = {
    [StepKeywordType.CONTEXT]: [],
    [StepKeywordType.ACTION]: [],
    [StepKeywordType.OUTCOME]: [],
    [StepKeywordType.UNKNOWN]: [],
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

  public any(spec: string | RegExp, fn: TestFunction<T>) {
    this._storage[StepKeywordType.UNKNOWN].push({ spec, fn });
  }

  public find(
    type: StepKeywordType.CONTEXT | StepKeywordType.ACTION | StepKeywordType.OUTCOME | StepKeywordType.UNKNOWN,
    spec: string,
  ): { fn?: TestFunction<T>; wrapperArgs: WrapperArgs } {
    const _default = { wrapperArgs: {} };

    const doesMatch = (o: TestSpecs<T>) => {
      if (typeof o.spec === 'string') return o.spec === spec;
      return o.spec.test(spec);
    };

    if (!type) return _default;
    let item = this._storage[type].find(doesMatch);
    if (!item) item = this._storage[StepKeywordType.UNKNOWN].find(doesMatch);
    if (!item) return _default;
    return {
      fn: item.fn,
      wrapperArgs: {
        match: spec.match(item.spec) as RegExpMatchArray,
      },
    };
  }
}
