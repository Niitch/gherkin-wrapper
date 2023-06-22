[Gherkin wrapper - API Reference](../README.md) / common

# Module: common

## Table of contents

### Classes

- [Hooks](../classes/common.Hooks.md)
- [Library](../classes/common.Library.md)
- [Wrapper](../classes/common.Wrapper.md)

### Interfaces

- [BaseWrapperOptions](../interfaces/common.BaseWrapperOptions.md)
- [TestSpec](../interfaces/common.TestSpec.md)
- [WrapperArgs](../interfaces/common.WrapperArgs.md)

### Type Aliases

- [StepFunction](common.md#stepfunction)
- [StepHook](common.md#stephook)
- [TagHook](common.md#taghook)

## Type Aliases

### StepFunction

Ƭ **StepFunction**<`RunnerArgs`\>: (`runnerArgs`: `WithDefaults`<`RunnerArgs`, `undefined`\>, `wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the runnerArgs parameter |

#### Type declaration

▸ (`runnerArgs`, `wrapperArgs`): `any`

Type of a step function

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `runnerArgs` | `WithDefaults`<`RunnerArgs`, `undefined`\> | an object holding arguments provided by the runner |
| `wrapperArgs` | [`WrapperArgs`](../interfaces/common.WrapperArgs.md) | an object holding arguments provided by the wrapper |

##### Returns

`any`

#### Defined in

[common/index.ts:34](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L34)

___

### StepHook

Ƭ **StepHook**<`RunnerArgs`\>: (`hookArgs`: { `fn?`: [`StepFunction`](common.md#stepfunction)<`RunnerArgs`\> ; `target`: `Step`  }, `runnerArgs`: `RunnerArgs`, `wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the runnerArgs parameter |

#### Type declaration

▸ (`hookArgs`, `runnerArgs`, `wrapperArgs`): `any`

Type of a step hook

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookArgs` | `Object` | - |
| `hookArgs.fn?` | [`StepFunction`](common.md#stepfunction)<`RunnerArgs`\> | the current step function |
| `hookArgs.target` | `Step` | the current step |
| `runnerArgs` | `RunnerArgs` | an object holding the runner arguments passed to the step function |
| `wrapperArgs` | [`WrapperArgs`](../interfaces/common.WrapperArgs.md) | an object holding the wrapper arguments passed to the step function |

##### Returns

`any`

#### Defined in

[common/index.ts:73](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L73)

___

### TagHook

Ƭ **TagHook**: (`hookArgs`: { `target`: `Feature` \| `Rule` \| `Scenario`  }) => `any`

#### Type declaration

▸ (`hookArgs`): `any`

Type of a tag related hook

##### Parameters

| Name | Type |
| :------ | :------ |
| `hookArgs` | `Object` |
| `hookArgs.target` | `Feature` \| `Rule` \| `Scenario` |

##### Returns

`any`

#### Defined in

[common/index.ts:62](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L62)
