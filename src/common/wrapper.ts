import { Library, TestFunction, usableStepType } from './library';
import { Background, Feature, Rule, Scenario, Step } from '@cucumber/messages';
import { parse } from './parser';

export abstract class Wrapper<T> {
  private _library = new Library<T>();

  get library() {
    return this._library;
  }

  constructor(library?: Library<T>) {
    if (library) this._library = library;
  }

  public given(spec: string | RegExp, test: TestFunction<T>) {
    this._library.given(spec, test);
  }
  public when(spec: string | RegExp, test: TestFunction<T>) {
    this._library.when(spec, test);
  }
  public then(spec: string | RegExp, test: TestFunction<T>) {
    this._library.then(spec, test);
  }

  protected getTestFunction(step: Step, prevStepType: Parameters<typeof this._library.find>[0]) {
    const keywordType = usableStepType(step.keywordType, prevStepType);
    return {
      ...this._library.find(keywordType, step.text),
      keywordType,
    };
  }

  public test(filePath: string, encoding?: BufferEncoding) {
    const gherkinDocument = parse(filePath, encoding);
    if (gherkinDocument.feature) this.runFeature(gherkinDocument.feature);
  }

  protected abstract runFeature(feature: Feature): void;
  protected abstract runBackground(background: Background): void;
  protected abstract runRule(scenario: Rule): void;
  protected abstract runScenarioOutline(scenarioOutline: Scenario): void;
  protected abstract runScenario(scenario: Scenario): void;
  protected abstract runStep(...args: any[]): void;
}
