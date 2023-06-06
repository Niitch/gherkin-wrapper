[gherkin-wrapper](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Library

# Class: Library<T\>

[index](../modules/index.md).Library

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](index.Library.md#constructor)

### Properties

- [\_storage](index.Library.md#_storage)

### Methods

- [find](index.Library.md#find)
- [given](index.Library.md#given)
- [then](index.Library.md#then)
- [when](index.Library.md#when)

## Constructors

### constructor

• **new Library**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Properties

### \_storage

• `Private` **\_storage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Action` | `TestSpecs`<`T`\>[] |
| `Context` | `TestSpecs`<`T`\>[] |
| `Outcome` | `TestSpecs`<`T`\>[] |

#### Defined in

[common/library.ts:39](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/library.ts#L39)

## Methods

### find

▸ **find**(`type`, `spec`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| `CONTEXT` \| `ACTION` \| `OUTCOME` |
| `spec` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fn?` | `TestFunction`<`T`\> |
| `wrapperArgs` | `WrapperArgs` |

#### Defined in

[common/library.ts:61](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/library.ts#L61)

___

### given

▸ **given**(`spec`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `string` \| `RegExp` |
| `fn` | `TestFunction`<`T`\> |

#### Returns

`void`

#### Defined in

[common/library.ts:49](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/library.ts#L49)

___

### then

▸ **then**(`spec`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `string` \| `RegExp` |
| `fn` | `TestFunction`<`T`\> |

#### Returns

`void`

#### Defined in

[common/library.ts:57](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/library.ts#L57)

___

### when

▸ **when**(`spec`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `string` \| `RegExp` |
| `fn` | `TestFunction`<`T`\> |

#### Returns

`void`

#### Defined in

[common/library.ts:53](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/library.ts#L53)
