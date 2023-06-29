[Gherkin wrapper - API Reference](../README.md) / [common](../modules/common.md) / Hooks

# Class: Hooks<RunnerArgs\>

[common](../modules/common.md).Hooks

Generic hook library

## Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the object holding the runner arguments and passed to the [step related hooks](../modules/common.md#stephook) |

## Table of contents

### Constructors

- [constructor](common.Hooks.md#constructor)

### Methods

- [afterStep](common.Hooks.md#afterstep)
- [beforeStep](common.Hooks.md#beforestep)
- [beforeTag](common.Hooks.md#beforetag)

## Constructors

### constructor

• **new Hooks**<`RunnerArgs`\>()

Generic hook library

#### Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the object holding the runner arguments and passed to the [step related hooks](../modules/common.md#stephook) |

#### Defined in

[src/common/hooks.ts:23](https://github.com/Niitch/gherkin-wrapper/blob/4bfbd8c/src/common/hooks.ts#L23)

## Methods

### afterStep

▸ **afterStep**(`callback`): `void`

Register a hook that runs after each step.

**`Remarks`**

- You can register multiple afterStep hooks.
- The hook runs within the test.step block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)<`RunnerArgs`\> | the hook function |

#### Returns

`void`

#### Defined in

[src/common/hooks.ts:49](https://github.com/Niitch/gherkin-wrapper/blob/4bfbd8c/src/common/hooks.ts#L49)

___

### beforeStep

▸ **beforeStep**(`callback`): `void`

Register a hook that runs before each step.

**`Remarks`**

- You can register multiple beforeStep hooks.
- The hook runs within the test.step block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)<`RunnerArgs`\> | the hook function |

#### Returns

`void`

#### Defined in

[src/common/hooks.ts:36](https://github.com/Niitch/gherkin-wrapper/blob/4bfbd8c/src/common/hooks.ts#L36)

___

### beforeTag

▸ **beforeTag**(`tag`, `callback`): `void`

Register a hook that runs before each Feature|Rule|Scenario having a given tag.

**`Remarks`**

- You can register multiple hooks for the same tag.
- The hook runs within the test.describe or test block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | the tag |
| `callback` | [`TagHook`](../modules/common.md#taghook) | the hook function |

#### Returns

`void`

#### Defined in

[src/common/hooks.ts:73](https://github.com/Niitch/gherkin-wrapper/blob/4bfbd8c/src/common/hooks.ts#L73)
