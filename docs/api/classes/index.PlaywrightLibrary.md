[Gherkin wrapper - API Reference](../README.md) / [index](../modules/index.md) / PlaywrightLibrary

# Class: PlaywrightLibrary\<T\>

[index](../modules/index.md).PlaywrightLibrary

Helper class to build step function libraries for the Playwright GherkinWrapper.

**Usage**
```ts
import { test } from "@playwright/test";
import GherkinWrapper from "gherkin-wrapper"
import { PlaywrightLibrary } from "gherkin-wrapper/playwright"

const library = new PlaywrightLibrary<typeof test>()
library.given(...)
library.when(...)
library.then(...)
const library = new GherkinWrapper.forPlaywright(test, { library })
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PlaywrightBaseTestObject`](../modules/playwright.md#playwrightbasetestobject) |

## Hierarchy

- [`Library`](common.Library.md)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>

  ↳ **`PlaywrightLibrary`**

## Table of contents

### Constructors

- [constructor](index.PlaywrightLibrary.md#constructor)

### Methods

- [any](index.PlaywrightLibrary.md#any)
- [given](index.PlaywrightLibrary.md#given)
- [then](index.PlaywrightLibrary.md#then)
- [when](index.PlaywrightLibrary.md#when)

## Constructors

### constructor

• **new PlaywrightLibrary**\<`T`\>(): [`PlaywrightLibrary`](index.PlaywrightLibrary.md)\<`T`\>

Helper class to build step function libraries for the Playwright GherkinWrapper.

**Usage**
```ts
import { test } from "@playwright/test";
import GherkinWrapper from "gherkin-wrapper"
import { PlaywrightLibrary } from "gherkin-wrapper/playwright"

const library = new PlaywrightLibrary<typeof test>()
library.given(...)
library.when(...)
library.then(...)
const library = new GherkinWrapper.forPlaywright(test, { library })
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TestType`\<`PlaywrightTestArgs` & `PlaywrightTestOptions`, `PlaywrightWorkerArgs` & `PlaywrightWorkerOptions`\> |

#### Returns

[`PlaywrightLibrary`](index.PlaywrightLibrary.md)\<`T`\>

#### Overrides

[Library](common.Library.md).[constructor](common.Library.md#constructor)

#### Defined in

[src/playwright/library.ts:37](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/playwright/library.ts#L37)

## Methods

### any

▸ **any**(`pattern`, `fn`): `void`

Register a step function to be run against any steps having a text that match a pattern.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> | the step function |

#### Returns

`void`

**`Remark`**

The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.

**`Remark`**

Functions registered using a given|when|then method are prioritized over functions registered using this method.

#### Inherited from

[Library](common.Library.md).[any](common.Library.md#any)

#### Defined in

[src/common/library.ts:101](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/library.ts#L101)

___

### given

▸ **given**(`pattern`, `fn`): `void`

Register a step function to be run against "context" steps having a text that match a pattern.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> | the step function |

#### Returns

`void`

**`Remark`**

The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.

#### Inherited from

[Library](common.Library.md).[given](common.Library.md#given)

#### Defined in

[src/common/library.ts:64](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/library.ts#L64)

___

### then

▸ **then**(`pattern`, `fn`): `void`

Register a step function to be run against "outcome" steps having a text that match a pattern.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> | the step function |

#### Returns

`void`

**`Remark`**

The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.

#### Inherited from

[Library](common.Library.md).[then](common.Library.md#then)

#### Defined in

[src/common/library.ts:88](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/library.ts#L88)

___

### when

▸ **when**(`pattern`, `fn`): `void`

Register a step function to be run against "action" steps having a text that match a pattern.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> | the step function |

#### Returns

`void`

**`Remark`**

The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.

#### Inherited from

[Library](common.Library.md).[when](common.Library.md#when)

#### Defined in

[src/common/library.ts:76](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/library.ts#L76)
