export class Hooks {
  // Lifecycle based hooks

  beforeStep?: (...args: any[]) => any;
  afterStep?: (...args: any[]) => any;

  // Tag based hooks

  private _tagBased: {
    [tag: string]: (...args: any[]) => any;
  } = {};

  beforeTag(tag: string, callback: (...args: any[]) => any) {
    this._tagBased[tag] = callback;
  }

  triggerTag(tag: string, ...args: any[]) {
    return this._tagBased[tag]?.(...args);
  }
}
