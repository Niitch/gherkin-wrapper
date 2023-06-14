[Gherkin wrapper - API Reference](../README.md) / [playwright](../modules/playwright.md) / PlaywrightWrapper

# Class: PlaywrightWrapper<T\>

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

- [`Wrapper`](common.Wrapper.md)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>

  ↳ **`PlaywrightWrapper`**

## Table of contents

### Constructors

- [constructor](playwright.PlaywrightWrapper.md#constructor)

### Properties

- [hooks](playwright.PlaywrightWrapper.md#hooks)
- [library](playwright.PlaywrightWrapper.md#library)

### Methods

- [afterStep](playwright.PlaywrightWrapper.md#afterstep)
- [any](playwright.PlaywrightWrapper.md#any)
- [beforeStep](playwright.PlaywrightWrapper.md#beforestep)
- [beforeTag](playwright.PlaywrightWrapper.md#beforetag)
- [given](playwright.PlaywrightWrapper.md#given)
- [then](playwright.PlaywrightWrapper.md#then)
- [when](playwright.PlaywrightWrapper.md#when)
- [test](playwright.PlaywrightWrapper.md#test)

## Constructors

### constructor

• **new PlaywrightWrapper**<`T`\>(`testRunner`, `options?`)

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
| `T` | extends `TestType`<`PlaywrightTestArgs` & `PlaywrightTestOptions`, `PlaywrightWorkerArgs` & `PlaywrightWorkerOptions`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `testRunner` | `T` | a playwright test object |
| `options?` | [`WrapperOptions`](../interfaces/playwright.WrapperOptions.md) | wrapper options |

#### Overrides

[Wrapper](common.Wrapper.md).[constructor](common.Wrapper.md#constructor)

#### Defined in

[playwright/wrapper.ts:58](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/playwright/wrapper.ts#L58)

## Properties

### hooks

• `Readonly` **hooks**: [`Hooks`](common.Hooks.md)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>

The wrapper hook library

#### Inherited from

[Wrapper](common.Wrapper.md).[hooks](common.Wrapper.md#hooks)

#### Defined in

[common/wrapper.ts:17](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L17)

___

### library

• `Readonly` **library**: [`Library`](common.Library.md)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>

The wrapper step function library

#### Inherited from

[Wrapper](common.Wrapper.md).[library](common.Wrapper.md#library)

#### Defined in

[common/wrapper.ts:15](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L15)

## Methods

### afterStep

• **afterStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[afterStep](common.Wrapper.md#afterstep)

#### Defined in

[common/wrapper.ts:45](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L45)

___

### any

• **any**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[any](common.Wrapper.md#any)

#### Defined in

[common/wrapper.ts:38](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L38)

___

### beforeStep

• **beforeStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[beforeStep](common.Wrapper.md#beforestep)

#### Defined in

[common/wrapper.ts:43](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L43)

___

### beforeTag

• **beforeTag**: (`tag`: `string`, `callback`: [`TagHook`](../modules/common.md#taghook)) => `void`

#### Type declaration

▸ (`tag`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `callback` | [`TagHook`](../modules/common.md#taghook) |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[beforeTag](common.Wrapper.md#beforetag)

#### Defined in

[common/wrapper.ts:41](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L41)

___

### given

• **given**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[given](common.Wrapper.md#given)

#### Defined in

[common/wrapper.ts:32](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L32)

___

### then

• **then**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[then](common.Wrapper.md#then)

#### Defined in

[common/wrapper.ts:36](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L36)

___

### when

• **when**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\>) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<[`RunnerArgs`](../modules/playwright.md#runnerargs)<`T`\>\> |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[when](common.Wrapper.md#when)

#### Defined in

[common/wrapper.ts:34](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L34)

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

[common/wrapper.ts:61](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L61)
