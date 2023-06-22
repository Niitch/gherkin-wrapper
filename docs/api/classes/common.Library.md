[Gherkin wrapper - API Reference](../README.md) / [common](../modules/common.md) / Library

# Class: Library<RunnerArgs\>

[common](../modules/common.md).Library

Generic step function library

## Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the object holding the runner arguments and passed to the [step functions](../modules/common.md#stepfunction) |

## Hierarchy

- **`Library`**

  ↳ [`PlaywrightLibrary`](playwright.PlaywrightLibrary.md)

## Table of contents

### Constructors

- [constructor](common.Library.md#constructor)

### Methods

- [any](common.Library.md#any)
- [given](common.Library.md#given)
- [then](common.Library.md#then)
- [when](common.Library.md#when)

## Constructors

### constructor

• **new Library**<`RunnerArgs`\>()

Generic step function library

#### Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the object holding the runner arguments and passed to the [step functions](../modules/common.md#stepfunction) |

#### Defined in

[src/common/library.ts:52](https://github.com/Niitch/gherkin-wrapper/blob/63e64be/src/common/library.ts#L52)

## Methods

### any

▸ **any**(`pattern`, `fn`): `void`

Register a step function to be run against any steps having a text that match a pattern.

**`Remark`**

The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.

**`Remark`**

Functions registered using a given|when|then method are prioritized over functions registered using this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\> | the step function |

#### Returns

`void`

#### Defined in

[src/common/library.ts:101](https://github.com/Niitch/gherkin-wrapper/blob/63e64be/src/common/library.ts#L101)

___

### given

▸ **given**(`pattern`, `fn`): `void`

Register a step function to be run against "context" steps having a text that match a pattern.

**`Remark`**

The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\> | the step function |

#### Returns

`void`

#### Defined in

[src/common/library.ts:64](https://github.com/Niitch/gherkin-wrapper/blob/63e64be/src/common/library.ts#L64)

___

### then

▸ **then**(`pattern`, `fn`): `void`

Register a step function to be run against "outcome" steps having a text that match a pattern.

**`Remark`**

The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\> | the step function |

#### Returns

`void`

#### Defined in

[src/common/library.ts:88](https://github.com/Niitch/gherkin-wrapper/blob/63e64be/src/common/library.ts#L88)

___

### when

▸ **when**(`pattern`, `fn`): `void`

Register a step function to be run against "action" steps having a text that match a pattern.

**`Remark`**

The step functions are stored and then searched in a FIFO fashion and only 1 function is called for each step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\> | the step function |

#### Returns

`void`

#### Defined in

[src/common/library.ts:76](https://github.com/Niitch/gherkin-wrapper/blob/63e64be/src/common/library.ts#L76)
