[Gherkin wrapper - API Reference](../README.md) / [index](../modules/index.md) / Hooks

# Class: Hooks\<RunnerArgs\>

[index](../modules/index.md).Hooks

Generic hook library

## Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the object holding the runner arguments and passed to the [step related hooks](../modules/common.md#stephook) |

## Table of contents

### Constructors

- [constructor](index.Hooks.md#constructor)

### Properties

- [afterTag](index.Hooks.md#aftertag)
- [beforeTag](index.Hooks.md#beforetag)

### Methods

- [afterStep](index.Hooks.md#afterstep)
- [beforeStep](index.Hooks.md#beforestep)

## Constructors

### constructor

• **new Hooks**\<`RunnerArgs`\>(): [`Hooks`](index.Hooks.md)\<`RunnerArgs`\>

Generic hook library

#### Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the object holding the runner arguments and passed to the [step related hooks](../modules/common.md#stephook) |

#### Returns

[`Hooks`](index.Hooks.md)\<`RunnerArgs`\>

#### Defined in

[src/common/hooks.ts:24](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/hooks.ts#L24)

## Properties

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

[src/common/hooks.ts:89](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/hooks.ts#L89)

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

[src/common/hooks.ts:76](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/hooks.ts#L76)

## Methods

### afterStep

▸ **afterStep**(`callback`): `void`

Register a hook that runs after each step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)\<`RunnerArgs`\> | the hook function |

#### Returns

`void`

**`Remarks`**

- You can register multiple afterStep hooks.
- The hook runs within the test.step block.

#### Defined in

[src/common/hooks.ts:50](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/hooks.ts#L50)

___

### beforeStep

▸ **beforeStep**(`callback`): `void`

Register a hook that runs before each step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)\<`RunnerArgs`\> | the hook function |

#### Returns

`void`

**`Remarks`**

- You can register multiple beforeStep hooks.
- The hook runs within the test.step block.

#### Defined in

[src/common/hooks.ts:37](https://github.com/Niitch/gherkin-wrapper/blob/0fb44bdd84c0fef4ddb343cfa7f4026e36d5dacf/src/common/hooks.ts#L37)
