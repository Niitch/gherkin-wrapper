[Gherkin wrapper - API Reference](../README.md) / playwright

# Module: playwright

## Table of contents

### References

- [PlaywrightLibrary](playwright.md#playwrightlibrary)

### Classes

- [PlaywrightWrapper](../classes/playwright.PlaywrightWrapper.md)

### Interfaces

- [WrapperOptions](../interfaces/playwright.WrapperOptions.md)

### Type Aliases

- [PlaywrightBaseTestObject](playwright.md#playwrightbasetestobject)
- [RunnerArgs](playwright.md#runnerargs)

## References

### PlaywrightLibrary

Re-exports [PlaywrightLibrary](../classes/index.PlaywrightLibrary.md)

## Type Aliases

### PlaywrightBaseTestObject

Ƭ **PlaywrightBaseTestObject**: typeof `test`

Type of the default playwright test object

#### Defined in

[src/playwright/index.ts:5](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/playwright/index.ts#L5)

___

### RunnerArgs

Ƭ **RunnerArgs**\<`PlaywrightTestObject`\>: `Parameters`\<`Parameters`\<`PlaywrightTestObject`\>[``2``]\>[``0``]

Type of the runner argument for a given playwright test object.
For Playwright, it is the fixtures object usually passed as first parameters to the test functions.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PlaywrightTestObject` | extends [`PlaywrightBaseTestObject`](playwright.md#playwrightbasetestobject) | Type of the playwright test object |

#### Defined in

[src/playwright/index.ts:13](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/playwright/index.ts#L13)
