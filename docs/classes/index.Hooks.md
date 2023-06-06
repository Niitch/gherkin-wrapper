[gherkin-wrapper](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Hooks

# Class: Hooks

[index](../modules/index.md).Hooks

## Table of contents

### Constructors

- [constructor](index.Hooks.md#constructor)

### Properties

- [\_tagBased](index.Hooks.md#_tagbased)
- [afterStep](index.Hooks.md#afterstep)
- [beforeStep](index.Hooks.md#beforestep)

### Methods

- [beforeTag](index.Hooks.md#beforetag)
- [triggerTag](index.Hooks.md#triggertag)

## Constructors

### constructor

• **new Hooks**()

## Properties

### \_tagBased

• `Private` **\_tagBased**: `Object` = `{}`

#### Index signature

▪ [tag: `string`]: (...`args`: `any`[]) => `any`

#### Defined in

[common/hooks.ts:9](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/hooks.ts#L9)

___

### afterStep

• `Optional` **afterStep**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[common/hooks.ts:5](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/hooks.ts#L5)

___

### beforeStep

• `Optional` **beforeStep**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[common/hooks.ts:4](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/hooks.ts#L4)

## Methods

### beforeTag

▸ **beforeTag**(`tag`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `callback` | (...`args`: `any`[]) => `any` |

#### Returns

`void`

#### Defined in

[common/hooks.ts:13](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/hooks.ts#L13)

___

### triggerTag

▸ **triggerTag**(`tag`, `...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

[common/hooks.ts:17](https://github.com/Niitch/gherkin-wrapper/blob/b5a17f1/src/common/hooks.ts#L17)
