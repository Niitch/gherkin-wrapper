import { Library, usableStepType } from './library';
import { Background, Feature, Rule, Scenario, Step } from '@cucumber/messages';
import { parse } from './parser';
import { Hooks } from './hooks';

export interface BaseWrapperOptions<TestArgs> {
  library?: Library<TestArgs>;
  hooks?: Hooks;
}

export abstract class Wrapper<
  TestArgs,
  WrapperOptions extends BaseWrapperOptions<TestArgs> = BaseWrapperOptions<TestArgs>,
> {
  readonly library = new Library<TestArgs>();
  readonly hooks = new Hooks();

  constructor(options: WrapperOptions = {} as WrapperOptions) {
    if (options.library) this.library = options.library;
    if (options.hooks) this.hooks = options.hooks;
  }

  get given(): typeof this.library.given {
    return this.library.given.bind(this.library);
  }
  get when(): typeof this.library.when {
    return this.library.when.bind(this.library);
  }
  get then(): typeof this.library.then {
    return this.library.then.bind(this.library);
  }
  
  get beforeTag() {
    return this.hooks.beforeTag.bind(this.hooks);
  }
  protected get triggerTag() {
    return this.hooks.triggerTag.bind(this.hooks);
  }
  beforeStep(callback: (...args: any[]) => any) {
    this.hooks.beforeStep = callback;
  }
  afterStep(callback: (...args: any[]) => any) {
    this.hooks.afterStep = callback;
  }
  
  protected getTestFunction(step: Step, prevStepType: Parameters<typeof this.library.find>[0]) {
    const keywordType = usableStepType(step.keywordType, prevStepType);
    return {
      ...this.library.find(keywordType, step.text),
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
