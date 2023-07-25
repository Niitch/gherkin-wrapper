[Gherkin wrapper - API Reference](../README.md) / [jest](../modules/jest.md) / JestWrapper

# Class: JestWrapper

[jest](../modules/jest.md).JestWrapper

A GherkinWrapper for the Jest test runner.

**Usage**
```ts
import GherkinWrapper from "gherkin-wrapper"

const wrapper = new GherkinWrapper.forJest()
wrapper.given(...)
wrapper.when(...)
wrapper.then(...)
wrapper.test('feature.file')
```

## Hierarchy

- [`Wrapper`](common.Wrapper.md)<``null``\>

  ↳ **`JestWrapper`**

## Table of contents

### Constructors

- [constructor](jest.JestWrapper.md#constructor)

### Properties

- [hooks](jest.JestWrapper.md#hooks)
- [library](jest.JestWrapper.md#library)

### Methods

- [afterStep](jest.JestWrapper.md#afterstep)
- [any](jest.JestWrapper.md#any)
- [beforeStep](jest.JestWrapper.md#beforestep)
- [beforeTag](jest.JestWrapper.md#beforetag)
- [given](jest.JestWrapper.md#given)
- [then](jest.JestWrapper.md#then)
- [when](jest.JestWrapper.md#when)
- [test](jest.JestWrapper.md#test)

## Constructors

### constructor

• **new JestWrapper**(`options?`)

A GherkinWrapper for the Jest test runner.

**Usage**
```ts
import GherkinWrapper from "gherkin-wrapper"

const wrapper = new GherkinWrapper.forJest()
wrapper.given(...)
wrapper.when(...)
wrapper.then(...)
wrapper.test('feature.file')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`WrapperOptions`](../interfaces/jest.WrapperOptions.md) | wrapper options |

#### Overrides

[Wrapper](common.Wrapper.md).[constructor](common.Wrapper.md#constructor)

#### Defined in

[src/jest/wrapper.ts:45](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/jest/wrapper.ts#L45)

## Properties

### hooks

• `Readonly` **hooks**: [`Hooks`](index.Hooks.md)<``null``\>

The wrapper hook library

#### Inherited from

[Wrapper](common.Wrapper.md).[hooks](common.Wrapper.md#hooks)

#### Defined in

[src/common/wrapper.ts:17](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L17)

___

### library

• `Readonly` **library**: [`Library`](common.Library.md)<``null``\>

The wrapper step function library

#### Inherited from

[Wrapper](common.Wrapper.md).[library](common.Wrapper.md#library)

#### Defined in

[src/common/wrapper.ts:15](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L15)

## Methods

### afterStep

• **afterStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)<``null``\>) => `void`

#### Type declaration

▸ (`callback`): `void`

Register a hook that runs after each step.

**`Remarks`**

- You can register multiple afterStep hooks.
- The hook runs within the test.step block.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)<``null``\> | the hook function |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[afterStep](common.Wrapper.md#afterstep)

#### Defined in

[src/common/wrapper.ts:66](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L66)

___

### any

• **any**: (`pattern`: `string` \| `RegExp`, `fn`: (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any`) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

Register a step function to be run against any steps having a text that match a pattern.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` | the step function |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[any](common.Wrapper.md#any)

#### Defined in

[src/common/wrapper.ts:50](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L50)

___

### beforeStep

• **beforeStep**: (`callback`: [`StepHook`](../modules/common.md#stephook)<``null``\>) => `void`

#### Type declaration

▸ (`callback`): `void`

Register a hook that runs before each step.

**`Remarks`**

- You can register multiple beforeStep hooks.
- The hook runs within the test.step block.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`StepHook`](../modules/common.md#stephook)<``null``\> | the hook function |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[beforeStep](common.Wrapper.md#beforestep)

#### Defined in

[src/common/wrapper.ts:61](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L61)

___

### beforeTag

• **beforeTag**: (`tag`: `string`, `callback`: [`TagHook`](../modules/common.md#taghook)) => `void`

#### Type declaration

▸ (`tag`, `callback`): `void`

Register a hook that runs before each Feature|Rule|Scenario having a given tag.

**`Remarks`**

- You can register multiple hooks for the same tag.
- The hook runs within the test.describe or test block.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | the tag |
| `callback` | [`TagHook`](../modules/common.md#taghook) | the hook function |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[beforeTag](common.Wrapper.md#beforetag)

#### Defined in

[src/common/wrapper.ts:56](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L56)

___

### given

• **given**: (`pattern`: `string` \| `RegExp`, `fn`: (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any`) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

Register a step function to be run against "context" steps having a text that match a pattern.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` | the step function |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[given](common.Wrapper.md#given)

#### Defined in

[src/common/wrapper.ts:35](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L35)

___

### then

• **then**: (`pattern`: `string` \| `RegExp`, `fn`: (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any`) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

Register a step function to be run against "outcome" steps having a text that match a pattern.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` | the step function |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[then](common.Wrapper.md#then)

#### Defined in

[src/common/wrapper.ts:45](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L45)

___

### when

• **when**: (`pattern`: `string` \| `RegExp`, `fn`: (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any`) => `void`

#### Type declaration

▸ (`pattern`, `fn`): `void`

Register a step function to be run against "action" steps having a text that match a pattern.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | the pattern |
| `fn` | (`wrapperArgs`: [`WrapperArgs`](../interfaces/common.WrapperArgs.md)) => `any` | the step function |

##### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[when](common.Wrapper.md#when)

#### Defined in

[src/common/wrapper.ts:40](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L40)

___

### test

▸ **test**(`filePath`, `encoding?`): `void`

Run tests for a feature file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | path to the feature file |
| `encoding?` | `BufferEncoding` | encoding of the feature file (default: 'utf-8') |

#### Returns

`void`

#### Inherited from

[Wrapper](common.Wrapper.md).[test](common.Wrapper.md#test)

#### Defined in

[src/common/wrapper.ts:82](https://github.com/Niitch/gherkin-wrapper/blob/967a43d/src/common/wrapper.ts#L82)
