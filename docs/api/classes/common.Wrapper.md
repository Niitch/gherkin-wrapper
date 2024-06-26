[Gherkin wrapper - API Reference](../README.md) / [common](../modules/common.md) / Wrapper

# Class: Wrapper\<RunnerArgs, Options\>

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

  ↳ [`JestWrapper`](jest.JestWrapper.md)

## Table of contents

### Constructors

- [constructor](common.Wrapper.md#constructor)

### Properties

- [hooks](common.Wrapper.md#hooks)
- [library](common.Wrapper.md#library)

### Methods

- [afterStep](common.Wrapper.md#afterstep)
- [afterTag](common.Wrapper.md#aftertag)
- [any](common.Wrapper.md#any)
- [beforeStep](common.Wrapper.md#beforestep)
- [beforeTag](common.Wrapper.md#beforetag)
- [given](common.Wrapper.md#given)
- [then](common.Wrapper.md#then)
- [when](common.Wrapper.md#when)
- [test](common.Wrapper.md#test)

## Constructors

### constructor

• **new Wrapper**\<`RunnerArgs`, `Options`\>(`options?`): [`Wrapper`](common.Wrapper.md)\<`RunnerArgs`, `Options`\>

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

#### Returns

[`Wrapper`](common.Wrapper.md)\<`RunnerArgs`, `Options`\>

#### Defined in

[src/common/wrapper.ts:26](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L26)

## Properties

### hooks

• `Readonly` **hooks**: [`Hooks`](index.Hooks.md)\<`RunnerArgs`\>

The wrapper hook library

#### Defined in

[src/common/wrapper.ts:17](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L17)

___

### library

• `Readonly` **library**: [`Library`](common.Library.md)\<`RunnerArgs`\>

The wrapper step function library

#### Defined in

[src/common/wrapper.ts:15](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L15)

## Methods

### afterStep

• **afterStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)\<`RunnerArgs`\>) => `void`

Register a hook that runs after each step.

**`Remarks`**

- You can register multiple afterStep hooks.
- The hook runs within the test.step block.

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)\<`RunnerArgs`\> |

##### Returns

`void`

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

#### Defined in

[src/common/wrapper.ts:61](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L61)

___

### any

• **any**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)\<`RunnerArgs`\>) => `void`

Register a step function to be run against any steps having a text that match a pattern.

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<`RunnerArgs`\> |

##### Returns

`void`

#### Defined in

[src/common/wrapper.ts:50](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L50)

___

### beforeStep

• **beforeStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)\<`RunnerArgs`\>) => `void`

Register a hook that runs before each step.

**`Remarks`**

- You can register multiple beforeStep hooks.
- The hook runs within the test.step block.

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)\<`RunnerArgs`\> |

##### Returns

`void`

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

#### Defined in

[src/common/wrapper.ts:56](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L56)

___

### given

• **given**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)\<`RunnerArgs`\>) => `void`

Register a step function to be run against "context" steps having a text that match a pattern.

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<`RunnerArgs`\> |

##### Returns

`void`

#### Defined in

[src/common/wrapper.ts:35](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L35)

___

### then

• **then**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)\<`RunnerArgs`\>) => `void`

Register a step function to be run against "outcome" steps having a text that match a pattern.

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<`RunnerArgs`\> |

##### Returns

`void`

#### Defined in

[src/common/wrapper.ts:45](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L45)

___

### when

• **when**: (`pattern`: `string` \| `RegExp`, `fn`: [`StepFunction`](../modules/common.md#stepfunction)\<`RunnerArgs`\>) => `void`

Register a step function to be run against "action" steps having a text that match a pattern.

#### Type declaration

▸ (`pattern`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)\<`RunnerArgs`\> |

##### Returns

`void`

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

#### Defined in

[src/common/wrapper.ts:87](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/wrapper.ts#L87)
