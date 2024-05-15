[Gherkin wrapper - API Reference](../README.md) / [index](../modules/index.md) / JestLibrary

# Class: JestLibrary

[index](../modules/index.md).JestLibrary

Helper class to build step function libraries for the Jest GherkinWrapper.

**Usage**
```ts
import GherkinWrapper from "gherkin-wrapper"
import { JestLibrary } from "gherkin-wrapper/jest"

const library = new JestLibrary()
library.given(...)
library.when(...)
library.then(...)
const library = new GherkinWrapper.forJest({ library })
```

## Hierarchy

- [`Library`](common.Library.md)<``null``\>

  ↳ **`JestLibrary`**

## Table of contents

### Constructors

- [constructor](index.JestLibrary.md#constructor)

### Methods

- [any](index.JestLibrary.md#any)
- [given](index.JestLibrary.md#given)
- [then](index.JestLibrary.md#then)
- [when](index.JestLibrary.md#when)

## Constructors

### constructor

• **new JestLibrary**()

Helper class to build step function libraries for the Jest GherkinWrapper.

**Usage**
```ts
import GherkinWrapper from "gherkin-wrapper"
import { JestLibrary } from "gherkin-wrapper/jest"

const library = new JestLibrary()
library.given(...)
library.when(...)
library.then(...)
const library = new GherkinWrapper.forJest({ library })
```

#### Overrides

[Library](common.Library.md).[constructor](common.Library.md#constructor)

#### Defined in

[src/jest/library.ts:34](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/jest/library.ts#L34)

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
| `fn` | (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` | the step function |

#### Returns

`void`

#### Inherited from

[Library](common.Library.md).[any](common.Library.md#any)

#### Defined in

[src/common/library.ts:101](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/library.ts#L101)

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
| `fn` | (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` | the step function |

#### Returns

`void`

#### Inherited from

[Library](common.Library.md).[given](common.Library.md#given)

#### Defined in

[src/common/library.ts:64](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/library.ts#L64)

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
| `fn` | (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` | the step function |

#### Returns

`void`

#### Inherited from

[Library](common.Library.md).[then](common.Library.md#then)

#### Defined in

[src/common/library.ts:88](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/library.ts#L88)

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
| `fn` | (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` | the step function |

#### Returns

`void`

#### Inherited from

[Library](common.Library.md).[when](common.Library.md#when)

#### Defined in

[src/common/library.ts:76](https://github.com/Niitch/gherkin-wrapper/blob/79f02ed/src/common/library.ts#L76)
