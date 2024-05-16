[Gherkin wrapper - API Reference](../README.md) / [playwright](../modules/playwright.md) / PlaywrightWrapper

# Class: PlaywrightWrapper\<T\>

[playwright](../modules/playwright.md).PlaywrightWrapper

A GherkinWrapper for the Playwright test runner.

**Usage**
```ts
import { test } from "@playwright/test";
import GherkinWrapper from "gherkin-wrapper"

const wrapper = new GherkinWrapper.forPlaywright(test)
wrapper.given(...)
wrapper.when(...)
wrapper.then(...)
wrapper.test('feature.file')
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PlaywrightBaseTestObject`](../modules/playwright.md#playwrightbasetestobject) |

## Hierarchy

- [`Wrapper`](common.Wrapper.md)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>

  ↳ **`PlaywrightWrapper`**

## Table of contents

### Constructors

- [constructor](playwright.PlaywrightWrapper.md#constructor)

### Properties

- [hooks](playwright.PlaywrightWrapper.md#hooks)
- [library](playwright.PlaywrightWrapper.md#library)

### Methods

- [afterStep](playwright.PlaywrightWrapper.md#afterstep)
- [afterTag](playwright.PlaywrightWrapper.md#aftertag)
- [any](playwright.PlaywrightWrapper.md#any)
- [beforeStep](playwright.PlaywrightWrapper.md#beforestep)
- [beforeTag](playwright.PlaywrightWrapper.md#beforetag)
- [given](playwright.PlaywrightWrapper.md#given)
- [then](playwright.PlaywrightWrapper.md#then)
- [when](playwright.PlaywrightWrapper.md#when)
- [test](playwright.PlaywrightWrapper.md#test)

## Constructors

### constructor

• **new PlaywrightWrapper**\<`T`\>(`testRunner`, `options?`): [`PlaywrightWrapper`](playwright.PlaywrightWrapper.md)\<`T`\>

A GherkinWrapper for the Playwright test runner.

**Usage**
```ts
import { test } from "@playwright/test";
import GherkinWrapper from "gherkin-wrapper"

const wrapper = new GherkinWrapper.forPlaywright(test)
wrapper.given(...)
wrapper.when(...)
wrapper.then(...)
wrapper.test('feature.file')
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TestType`\<`PlaywrightTestArgs` & `PlaywrightTestOptions`, `PlaywrightWorkerArgs` & `PlaywrightWorkerOptions`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `testRunner` | `T` | a playwright test object |
| `options?` | [`WrapperOptions`](../interfaces/playwright.WrapperOptions.md) | wrapper options |

#### Returns

[`PlaywrightWrapper`](playwright.PlaywrightWrapper.md)\<`T`\>

#### Overrides

[Wrapper](common.Wrapper.md).[constructor](common.Wrapper.md#constructor)

#### Defined in

[src/playwright/wrapper.ts:75](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/playwright/wrapper.ts#L75)

## Properties

### hooks

• `Readonly` **hooks**: [`Hooks`](index.Hooks.md)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>

The wrapper hook library

#### Inherited from

[Wrapper](common.Wrapper.md).[hooks](common.Wrapper.md#hooks)

#### Defined in

[src/common/wrapper.ts:17](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L17)

___

### library

• `Readonly` **library**: [`Library`](common.Library.md)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>

The wrapper step function library

#### Inherited from

[Wrapper](common.Wrapper.md).[library](common.Wrapper.md#library)

#### Defined in

[src/common/wrapper.ts:15](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L15)

## Methods

### afterStep

• **afterStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>) => `void`

Register a hook that runs after each step.

**`Remarks`**

- You can register multiple afterStep hooks.
- The hook runs within the test.step block.

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[afterStep](common.Wrapper.md#afterstep)

#### Defined in

[src/common/wrapper.ts:71](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L71)

___

### afterTag

• **afterTag**: (...`args`: [tag: string, callback: TagHook]) => `void`

Register a hook that runs after each Feature|Rule|Scenario having a given tag.

**`Remarks`**

- You can register multiple hooks for the same tag.
- The hook runs within the describe or test block.
- Effects of async hooks are ignored for Features and Rules

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [tag: string, callback: TagHook] |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[afterTag](common.Wrapper.md#aftertag)

#### Defined in

[src/common/wrapper.ts:61](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L61)

___

### any

• **any**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>) => `void`

Register a step function to be run against any steps having a text that match a pattern.

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[any](common.Wrapper.md#any)

#### Defined in

[src/common/wrapper.ts:50](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L50)

___

### beforeStep

• **beforeStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>) => `void`

Register a hook that runs before each step.

**`Remarks`**

- You can register multiple beforeStep hooks.
- The hook runs within the test.step block.

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[beforeStep](common.Wrapper.md#beforestep)

#### Defined in

[src/common/wrapper.ts:66](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L66)

___

### beforeTag

• **beforeTag**: (...`args`: [tag: string, callback: TagHook]) => `void`

Register a hook that runs before each Feature|Rule|Scenario having a given tag.

**`Remarks`**

- You can register multiple hooks for the same tag.
- The hook runs within the describe or test block.
- Effects of async hooks are ignored for Features and Rules

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [tag: string, callback: TagHook] |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[beforeTag](common.Wrapper.md#beforetag)

#### Defined in

[src/common/wrapper.ts:56](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L56)

___

### given

• **given**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>) => `void`

Register a step function to be run against "context" steps having a text that match a pattern.

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[given](common.Wrapper.md#given)

#### Defined in

[src/common/wrapper.ts:35](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L35)

___

### then

• **then**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>) => `void`

Register a step function to be run against "outcome" steps having a text that match a pattern.

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[then](common.Wrapper.md#then)

#### Defined in

[src/common/wrapper.ts:45](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L45)

___

### when

• **when**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\>) => `void`

Register a step function to be run against "action" steps having a text that match a pattern.

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<[`RunnerArgs`](../modules/playwright.md#runnerargs)\<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[when](common.Wrapper.md#when)

#### Defined in

[src/common/wrapper.ts:40](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L40)

___

### test

▸ **test**(`filePath`, `encoding?`): `void`

Run tests for a feature file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | path to the feature file |
| `encoding?` | `BufferEncoding` | encoding of the feature file (default: 'utf-8') |

#### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[test](common.Wrapper.md#test)

#### Defined in

[src/common/wrapper.ts:87](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L87)
