[gherkin-wrapper](../README.md) / [Modules](../modules.md) / [wrappers](../modules/wrappers.md) / PlaywrightWrapper

# Class: PlaywrightWrapper<T\>

[wrappers](../modules/wrappers.md).PlaywrightWrapper

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `BaseTestRunner` |

## Hierarchy

- [`Wrapper`](index.Wrapper.md)<`TestArgs`<`T`\>\>

  ↳ **`PlaywrightWrapper`**

## Table of contents

### Constructors

- [constructor](wrappers.PlaywrightWrapper.md#constructor)

### Properties

- [hooks](wrappers.PlaywrightWrapper.md#hooks)
- [library](wrappers.PlaywrightWrapper.md#library)
- [testRunner](wrappers.PlaywrightWrapper.md#testrunner)

### Accessors

- [beforeTag](wrappers.PlaywrightWrapper.md#beforetag)
- [given](wrappers.PlaywrightWrapper.md#given)
- [then](wrappers.PlaywrightWrapper.md#then)
- [triggerTag](wrappers.PlaywrightWrapper.md#triggertag)
- [when](wrappers.PlaywrightWrapper.md#when)

### Methods

- [afterStep](wrappers.PlaywrightWrapper.md#afterstep)
- [beforeStep](wrappers.PlaywrightWrapper.md#beforestep)
- [getTestFunction](wrappers.PlaywrightWrapper.md#gettestfunction)
- [test](wrappers.PlaywrightWrapper.md#test)

## Constructors

### constructor

• **new PlaywrightWrapper**<`T`\>(`testRunner`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TestType`<`PlaywrightTestArgs` & `PlaywrightTestOptions`, `PlaywrightWorkerArgs` & `PlaywrightWorkerOptions`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `testRunner` | `T` |
| `options?` | `BaseWrapperOptions`<`TestArgs`<`T`\>\> |

#### Overrides

[Wrapper](index.Wrapper.md).[constructor](index.Wrapper.md#constructor)

#### Defined in

[wrappers/playwright.ts:24](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/wrappers/playwright.ts#L24)

## Properties

### hooks

• `Readonly` **hooks**: [`Hooks`](index.Hooks.md)

#### Inherited from

[Wrapper](index.Wrapper.md).[hooks](index.Wrapper.md#hooks)

#### Defined in

[common/wrapper.ts:16](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L16)

___

### library

• `Readonly` **library**: [`Library`](index.Library.md)<`TestArgs`<`T`\>\>

#### Inherited from

[Wrapper](index.Wrapper.md).[library](index.Wrapper.md#library)

#### Defined in

[common/wrapper.ts:15](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L15)

___

### testRunner

• `Private` **testRunner**: `T`

#### Defined in

[wrappers/playwright.ts:22](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/wrappers/playwright.ts#L22)

## Accessors

### beforeTag

• `get` **beforeTag**(): (`tag`: `string`, `callback`: (...`args`: `any`[]) => `any`) => `void`

#### Returns

`fn`

▸ (`tag`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `callback` | (...`args`: `any`[]) => `any` |

##### Returns

`void`

#### Inherited from

Base.beforeTag

#### Defined in

[common/wrapper.ts:33](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L33)

___

### given

• `get` **given**(): (`spec`: `string` \| `RegExp`, `fn`: `TestFunction`<`TestArgs`\>) => `void`

#### Returns

`fn`

▸ (`spec`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `string` \| `RegExp` |
| `fn` | `TestFunction`<`TestArgs`\> |

##### Returns

`void`

#### Inherited from

Base.given

#### Defined in

[common/wrapper.ts:23](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L23)

___

### then

• `get` **then**(): (`spec`: `string` \| `RegExp`, `fn`: `TestFunction`<`TestArgs`\>) => `void`

#### Returns

`fn`

▸ (`spec`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `string` \| `RegExp` |
| `fn` | `TestFunction`<`TestArgs`\> |

##### Returns

`void`

#### Inherited from

Base.then

#### Defined in

[common/wrapper.ts:29](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L29)

___

### triggerTag

• `Protected` `get` **triggerTag**(): (`tag`: `string`, ...`args`: `any`[]) => `any`

#### Returns

`fn`

▸ (`tag`, `...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `...args` | `any`[] |

##### Returns

`any`

#### Inherited from

Base.triggerTag

#### Defined in

[common/wrapper.ts:36](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L36)

___

### when

• `get` **when**(): (`spec`: `string` \| `RegExp`, `fn`: `TestFunction`<`TestArgs`\>) => `void`

#### Returns

`fn`

▸ (`spec`, `fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `string` \| `RegExp` |
| `fn` | `TestFunction`<`TestArgs`\> |

##### Returns

`void`

#### Inherited from

Base.when

#### Defined in

[common/wrapper.ts:26](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L26)

## Methods

### afterStep

▸ **afterStep**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `any`[]) => `any` |

#### Returns

`void`

#### Inherited from

[Wrapper](index.Wrapper.md).[afterStep](index.Wrapper.md#afterstep)

#### Defined in

[common/wrapper.ts:42](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L42)

___

### beforeStep

▸ **beforeStep**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `any`[]) => `any` |

#### Returns

`void`

#### Inherited from

[Wrapper](index.Wrapper.md).[beforeStep](index.Wrapper.md#beforestep)

#### Defined in

[common/wrapper.ts:39](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L39)

___

### getTestFunction

▸ `Protected` **getTestFunction**(`step`, `prevStepType`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `Step` |
| `prevStepType` | `undefined` \| `CONTEXT` \| `ACTION` \| `OUTCOME` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fn?` | `TestFunction`<`TestArgs`<`T`\>\> |
| `keywordType` | `undefined` \| `CONTEXT` \| `ACTION` \| `OUTCOME` |
| `wrapperArgs` | `WrapperArgs` |

#### Inherited from

[Wrapper](index.Wrapper.md).[getTestFunction](index.Wrapper.md#gettestfunction)

#### Defined in

[common/wrapper.ts:46](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L46)

___

### test

▸ **test**(`filePath`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `encoding?` | `BufferEncoding` |

#### Returns

`void`

#### Inherited from

[Wrapper](index.Wrapper.md).[test](index.Wrapper.md#test)

#### Defined in

[common/wrapper.ts:54](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L54)
