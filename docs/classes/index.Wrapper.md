[gherkin-wrapper](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Wrapper

# Class: Wrapper<TestArgs, WrapperOptions\>

[index](../modules/index.md).Wrapper

## Type parameters

| Name | Type |
| :------ | :------ |
| `TestArgs` | `TestArgs` |
| `WrapperOptions` | extends `BaseWrapperOptions`<`TestArgs`\> = `BaseWrapperOptions`<`TestArgs`\> |

## Hierarchy

- **`Wrapper`**

  ↳ [`PlaywrightWrapper`](wrappers.PlaywrightWrapper.md)

## Table of contents

### Constructors

- [constructor](index.Wrapper.md#constructor)

### Properties

- [hooks](index.Wrapper.md#hooks)
- [library](index.Wrapper.md#library)

### Accessors

- [beforeTag](index.Wrapper.md#beforetag)
- [given](index.Wrapper.md#given)
- [then](index.Wrapper.md#then)
- [triggerTag](index.Wrapper.md#triggertag)
- [when](index.Wrapper.md#when)

### Methods

- [afterStep](index.Wrapper.md#afterstep)
- [beforeStep](index.Wrapper.md#beforestep)
- [getTestFunction](index.Wrapper.md#gettestfunction)
- [runBackground](index.Wrapper.md#runbackground)
- [runFeature](index.Wrapper.md#runfeature)
- [runRule](index.Wrapper.md#runrule)
- [runScenario](index.Wrapper.md#runscenario)
- [runScenarioOutline](index.Wrapper.md#runscenariooutline)
- [runStep](index.Wrapper.md#runstep)
- [test](index.Wrapper.md#test)

## Constructors

### constructor

• **new Wrapper**<`TestArgs`, `WrapperOptions`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TestArgs` | `TestArgs` |
| `WrapperOptions` | extends `BaseWrapperOptions`<`TestArgs`, `WrapperOptions`\> = `BaseWrapperOptions`<`TestArgs`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `WrapperOptions` |

#### Defined in

[common/wrapper.ts:18](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L18)

## Properties

### hooks

• `Readonly` **hooks**: [`Hooks`](index.Hooks.md)

#### Defined in

[common/wrapper.ts:16](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L16)

___

### library

• `Readonly` **library**: [`Library`](index.Library.md)<`TestArgs`\>

#### Defined in

[common/wrapper.ts:15](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L15)

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
| `fn?` | `TestFunction`<`TestArgs`\> |
| `keywordType` | `undefined` \| `CONTEXT` \| `ACTION` \| `OUTCOME` |
| `wrapperArgs` | `WrapperArgs` |

#### Defined in

[common/wrapper.ts:46](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L46)

___

### runBackground

▸ `Protected` `Abstract` **runBackground**(`background`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `background` | `Background` |

#### Returns

`void`

#### Defined in

[common/wrapper.ts:60](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L60)

___

### runFeature

▸ `Protected` `Abstract` **runFeature**(`feature`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `Feature` |

#### Returns

`void`

#### Defined in

[common/wrapper.ts:59](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L59)

___

### runRule

▸ `Protected` `Abstract` **runRule**(`scenario`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scenario` | `Rule` |

#### Returns

`void`

#### Defined in

[common/wrapper.ts:61](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L61)

___

### runScenario

▸ `Protected` `Abstract` **runScenario**(`scenario`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scenario` | `Scenario` |

#### Returns

`void`

#### Defined in

[common/wrapper.ts:63](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L63)

___

### runScenarioOutline

▸ `Protected` `Abstract` **runScenarioOutline**(`scenarioOutline`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scenarioOutline` | `Scenario` |

#### Returns

`void`

#### Defined in

[common/wrapper.ts:62](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L62)

___

### runStep

▸ `Protected` `Abstract` **runStep**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[common/wrapper.ts:64](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L64)

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

#### Defined in

[common/wrapper.ts:54](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/wrapper.ts#L54)
