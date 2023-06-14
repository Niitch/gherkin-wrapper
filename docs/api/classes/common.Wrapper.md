[Gherkin wrapper - API Reference](../README.md) / [common](../modules/common.md) / Wrapper

# Class: Wrapper<RunnerArgs, Options\>

[common](../modules/common.md).Wrapper

Generic gherkin wrapper

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `RunnerArgs` | `RunnerArgs` | Type of the object holding the runner arguments and passed to [step functions](../modules/common.md#stepfunction) and [step related hooks](../modules/common.md#stephook) |
| `Options` | extends [`BaseWrapperOptions`](../interfaces/common.BaseWrapperOptions.md) = [`BaseWrapperOptions`](../interfaces/common.BaseWrapperOptions.md) | Type of the object holding the options the wrapper accepts |

## Hierarchy

- **`Wrapper`**

  ↳ [`PlaywrightWrapper`](playwright.PlaywrightWrapper.md)

## Table of contents

### Constructors

- [constructor](common.Wrapper.md#constructor)

### Properties

- [hooks](common.Wrapper.md#hooks)
- [library](common.Wrapper.md#library)

### Methods

- [afterStep](common.Wrapper.md#afterstep)
- [any](common.Wrapper.md#any)
- [beforeStep](common.Wrapper.md#beforestep)
- [beforeTag](common.Wrapper.md#beforetag)
- [given](common.Wrapper.md#given)
- [then](common.Wrapper.md#then)
- [when](common.Wrapper.md#when)
- [test](common.Wrapper.md#test)

## Constructors

### constructor

• **new Wrapper**<`RunnerArgs`, `Options`\>(`options?`)

Generic gherkin wrapper

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `RunnerArgs` | `RunnerArgs` | Type of the object holding the runner arguments and passed to [step functions](../modules/common.md#stepfunction) and [step related hooks](../modules/common.md#stephook) |
| `Options` | extends [`BaseWrapperOptions`](../interfaces/common.BaseWrapperOptions.md) = [`BaseWrapperOptions`](../interfaces/common.BaseWrapperOptions.md) | Type of the object holding the options the wrapper accepts |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Options` | wrapper options |

#### Defined in

[common/wrapper.ts:26](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L26)

## Properties

### hooks

• `Readonly` **hooks**: [`Hooks`](common.Hooks.md)<`RunnerArgs`\>

The wrapper hook library

#### Defined in

[common/wrapper.ts:17](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L17)

___

### library

• `Readonly` **library**: [`Library`](common.Library.md)<`RunnerArgs`\>

The wrapper step function library

#### Defined in

[common/wrapper.ts:15](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L15)

## Methods

### afterStep

• **afterStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)<`RunnerArgs`\>) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)<`RunnerArgs`\> |

##### Returns

`void`

#### Defined in

[common/wrapper.ts:45](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L45)

___

### any

• **any**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\>) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\> |

##### Returns

`void`

#### Defined in

[common/wrapper.ts:38](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L38)

___

### beforeStep

• **beforeStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)<`RunnerArgs`\>) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)<`RunnerArgs`\> |

##### Returns

`void`

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

#### Defined in

[common/wrapper.ts:41](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L41)

___

### given

• **given**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\>) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\> |

##### Returns

`void`

#### Defined in

[common/wrapper.ts:32](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L32)

___

### then

• **then**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\>) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\> |

##### Returns

`void`

#### Defined in

[common/wrapper.ts:36](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L36)

___

### when

• **when**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\>) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\> |

##### Returns

`void`

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

#### Defined in

[common/wrapper.ts:61](https://github.com/Niitch/gherkin-wrapper/blob/5821231/src/common/wrapper.ts#L61)
