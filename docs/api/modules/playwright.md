[Gherkin wrapper - API Reference](../README.md) / playwright

# Module: playwright

## Table of contents

### Classes

- [PlaywrightLibrary](../classes/playwright.PlaywrightLibrary.md)
- [PlaywrightWrapper](../classes/playwright.PlaywrightWrapper.md)

### Interfaces

- [WrapperOptions](../interfaces/playwright.WrapperOptions.md)

### Type Aliases

- [PlaywrightBaseTestObject](playwright.md#playwrightbasetestobject)
- [RunnerArgs](playwright.md#runnerargs)

## Type Aliases

### PlaywrightBaseTestObject

Ƭ **PlaywrightBaseTestObject**: typeof `test`

Type of the default playwright test object

#### Defined in

[playwright/index.ts:5](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/playwright/index.ts#L5)

___

### RunnerArgs

Ƭ **RunnerArgs**<`PlaywrightTestObject`\>: `Parameters`<`Parameters`<`PlaywrightTestObject`\>[``1``]\>[``0``]

Type of the runner argument for a given playwright test object.
For Playwright, it is the fixtures object usually passed as first parameters to the test functions.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PlaywrightTestObject` | extends [`PlaywrightBaseTestObject`](playwright.md#playwrightbasetestobject) | Type of the playwright test object |

#### Defined in

[playwright/index.ts:13](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/playwright/index.ts#L13)
