[Gherkin wrapper - API Reference](../README.md) / common

# Module: common

## Table of contents

### References

- [Hooks](common.md#hooks)

### Classes

- [Library](../classes/common.Library.md)
- [Wrapper](../classes/common.Wrapper.md)

### Interfaces

- [BaseWrapperOptions](../interfaces/common.BaseWrapperOptions.md)
- [HookEffect](../interfaces/common.HookEffect.md)
- [TestSpec](../interfaces/common.TestSpec.md)
- [WrapperArgs](../interfaces/common.WrapperArgs.md)

### Type Aliases

- [KeyValue](common.md#keyvalue)
- [StepFunction](common.md#stepfunction)
- [StepHook](common.md#stephook)
- [TagHook](common.md#taghook)
- [WithDefault](common.md#withdefault)

## References

### Hooks

Re-exports [Hooks](../classes/index.Hooks.md)

## Type Aliases

### KeyValue

Ƭ **KeyValue**: `Object`

Type helper that represents any object.

#### Index signature

▪ [key: `string` \| `number` \| `symbol`]: `any`

#### Defined in

[src/common/index.ts:20](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/index.ts#L20)

___

### StepFunction

Ƭ **StepFunction**<`RunnerArgs`\>: `RunnerArgs` extends ``null`` \| `undefined` ? (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` : (`runnerArgs`: [`WithDefault`](common.md#withdefault)<`RunnerArgs`, `undefined`\>, `wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any`

Type of a step function

**`Param`**

an object holding arguments provided by the runner

**`Param`**

an object holding arguments provided by the wrapper

#### Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the runnerArgs parameter |

#### Defined in

[src/common/index.ts:40](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/index.ts#L40)

___

### StepHook

Ƭ **StepHook**<`RunnerArgs`\>: (`hookArgs`: { `fn?`: [`StepFunction`](common.md#stepfunction)<`RunnerArgs`\> ; `target`: `Step`  }, `runnerOrWrapperArgs`: `RunnerArgs` extends ``null`` \| `undefined` ? [`WrapperArgs`](../interfaces/common.WrapperArgs.md) : [`WithDefault`](common.md#withdefault)<`RunnerArgs`, `undefined`\>, `wrapperArgs?`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => [`HookEffect`](../interfaces/common.HookEffect.md) \| `Promise`<[`HookEffect`](../interfaces/common.HookEffect.md) \| `void`\> \| `void`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the runnerArgs parameter |

#### Type declaration

▸ (`hookArgs`, `runnerOrWrapperArgs`, `wrapperArgs?`): [`HookEffect`](../interfaces/common.HookEffect.md) \| `Promise`<[`HookEffect`](../interfaces/common.HookEffect.md) \| `void`\> \| `void`

Type of a step hook

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookArgs` | `Object` | - |
| `hookArgs.fn?` | [`StepFunction`](common.md#stepfunction)<`RunnerArgs`\> | the current step function |
| `hookArgs.target` | `Step` | the current step |
| `runnerOrWrapperArgs` | `RunnerArgs` extends ``null`` \| `undefined` ? [`WrapperArgs`](../interfaces/common.WrapperArgs.md) : [`WithDefault`](common.md#withdefault)<`RunnerArgs`, `undefined`\> | - |
| `wrapperArgs?` | [`WrapperArgs`](../interfaces/common.WrapperArgs.md) | an object holding the wrapper arguments passed to the step function |

##### Returns

[`HookEffect`](../interfaces/common.HookEffect.md) \| `Promise`<[`HookEffect`](../interfaces/common.HookEffect.md) \| `void`\> \| `void`

#### Defined in

[src/common/index.ts:84](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/index.ts#L84)

___

### TagHook

Ƭ **TagHook**: (`hookArgs`: { `target`: `Feature` \| `Rule` \| `Scenario`  }) => [`HookEffect`](../interfaces/common.HookEffect.md) \| `Promise`<[`HookEffect`](../interfaces/common.HookEffect.md) \| `void`\> \| `void`

#### Type declaration

▸ (`hookArgs`): [`HookEffect`](../interfaces/common.HookEffect.md) \| `Promise`<[`HookEffect`](../interfaces/common.HookEffect.md) \| `void`\> \| `void`

Type of a tag related hook

##### Parameters

| Name | Type |
| :------ | :------ |
| `hookArgs` | `Object` |
| `hookArgs.target` | `Feature` \| `Rule` \| `Scenario` |

##### Returns

[`HookEffect`](../interfaces/common.HookEffect.md) \| `Promise`<[`HookEffect`](../interfaces/common.HookEffect.md) \| `void`\> \| `void`

#### Defined in

[src/common/index.ts:71](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/index.ts#L71)

___

### WithDefault

Ƭ **WithDefault**<`Base`, `Default`\>: `Base` extends [`KeyValue`](common.md#keyvalue) ? { [K in keyof (Base & Omit<KeyValue, keyof Base\>)]: K extends keyof Base ? Base[K] : Default } : `Base`

Type helper that hints a default type for unknown members of an object

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Base` | Type of the base object |
| `Default` | The default type to hint when accessing unknown members of Base |

#### Defined in

[src/common/index.ts:27](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/index.ts#L27)
