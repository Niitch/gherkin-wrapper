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

- [KeyValue](common.md#keyvalue)
- [StepFunction](common.md#stepfunction)
- [StepHook](common.md#stephook)
- [TagHook](common.md#taghook)
- [WithDefault](common.md#withdefault)

## Type Aliases

### KeyValue

Ƭ **KeyValue**: `Object`

Type helper that represents any object.

#### Index signature

▪ [key: `string` \| `number` \| `symbol`]: `any`

#### Defined in

[src/common/index.ts:20](https://github.com/Niitch/gherkin-wrapper/blob/c096300/src/common/index.ts#L20)

___

### StepFunction

Ƭ **StepFunction**<`RunnerArgs`\>: (`runnerArgs`: [`WithDefault`](common.md#withdefault)<`RunnerArgs`, `undefined`\>, `wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any`

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
| `runnerArgs` | [`WithDefault`](common.md#withdefault)<`RunnerArgs`, `undefined`\> | an object holding arguments provided by the runner |
| `wrapperArgs` | [`WrapperArgs`](../interfaces/common.WrapperArgs.md) | an object holding arguments provided by the wrapper |

##### Returns

`any`

#### Defined in

[src/common/index.ts:38](https://github.com/Niitch/gherkin-wrapper/blob/c096300/src/common/index.ts#L38)

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

[src/common/index.ts:77](https://github.com/Niitch/gherkin-wrapper/blob/c096300/src/common/index.ts#L77)

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

[src/common/index.ts:66](https://github.com/Niitch/gherkin-wrapper/blob/c096300/src/common/index.ts#L66)

___

### WithDefault

Ƭ **WithDefault**<`Base`, `Default`\>: { [K in keyof (Base & Omit<KeyValue, keyof Base\>)]: K extends keyof Base ? Base[K] : Default }

Type helper that hints a default type for unknown members of an object

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Base` | Type of the base object |
| `Default` | The default type to hint when accessing unknown members of Base |

#### Defined in

[src/common/index.ts:27](https://github.com/Niitch/gherkin-wrapper/blob/c096300/src/common/index.ts#L27)
