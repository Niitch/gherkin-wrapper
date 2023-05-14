export class Hooks {

    // Lifecycle based hooks

    beforeAutomation?: (...args: any[]) => any
    afterAutomation?: (...args: any[]) => any
    

    // Tag based hooks

    private _tagBased: {
        [tag: string]: (...args: any[]) => any,
    } = {}


    on(tag: string, callback: (...args: any[]) => any) {
        this._tagBased[tag] = callback
    }

    trigger(tag: string, ...args: any[]) {
        return this._tagBased[tag]?.(...args)
    }

}