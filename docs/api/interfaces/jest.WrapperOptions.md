[Gherkin wrapper - API Reference](../README.md) / [jest](../modules/jest.md) / WrapperOptions

# Interface: WrapperOptions

[jest](../modules/jest.md).WrapperOptions

The minimal wrapper options

## Hierarchy

- [`BaseWrapperOptions`](common.BaseWrapperOptions.md)

  ↳ **`WrapperOptions`**

## Table of contents

### Properties

- [hooks](jest.WrapperOptions.md#hooks)
- [library](jest.WrapperOptions.md#library)

## Properties

### hooks

• `Optional` **hooks**: [`Hooks`](../classes/common.Hooks.md)<`any`\>

A prebuild hook library for the wrapper to start with.

**Usage**
```ts
import GherkinWrapper, { Hooks } from "gherkin-wrapper"

const hooks = new Hooks()
const foo = new GherkinWrapper.forJest(test, { hooks })

const bar = new GherkinWrapper.forJest(test, { hooks })
const baz = new GherkinWrapper.forJest(test, { hooks: bar.hooks })
```
Here `foo` has its own library while `bar` and `baz` share one.

#### Overrides

[BaseWrapperOptions](common.BaseWrapperOptions.md).[hooks](common.BaseWrapperOptions.md#hooks)

#### Defined in

[src/jest/index.ts:36](https://github.com/Niitch/gherkin-wrapper/blob/1cd6560/src/jest/index.ts#L36)

___

### library

• `Optional` **library**: [`Library`](../classes/common.Library.md)<`any`\>

A prebuild step function library for the wrapper to start with.

**Usage**
```ts
import GherkinWrapper, { JestLibrary } from "gherkin-wrapper"

const library = new JestLibrary<typeof test>()
const foo = new GherkinWrapper.forJest(test, { library })

const bar = new GherkinWrapper.forJest(test, { library })
const baz = new GherkinWrapper.forJest(test, { library: bar.library })
```
Here `foo` has its own library while `bar` and `baz` share one.

#### Overrides

[BaseWrapperOptions](common.BaseWrapperOptions.md).[library](common.BaseWrapperOptions.md#library)

#### Defined in

[src/jest/index.ts:19](https://github.com/Niitch/gherkin-wrapper/blob/1cd6560/src/jest/index.ts#L19)
