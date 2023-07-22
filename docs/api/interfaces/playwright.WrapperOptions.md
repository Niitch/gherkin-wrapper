[Gherkin wrapper - API Reference](../README.md) / [playwright](../modules/playwright.md) / WrapperOptions

# Interface: WrapperOptions

[playwright](../modules/playwright.md).WrapperOptions

The minimal wrapper options

## Hierarchy

- [`BaseWrapperOptions`](common.BaseWrapperOptions.md)

  ↳ **`WrapperOptions`**

## Table of contents

### Properties

- [hooks](playwright.WrapperOptions.md#hooks)
- [library](playwright.WrapperOptions.md#library)

## Properties

### hooks

• `Optional` **hooks**: [`Hooks`](../classes/common.Hooks.md)<`any`\>

A prebuild hook library for the wrapper to start with.

**Usage**
```ts
import { test } from "@playwright/test";
import GherkinWrapper, { Hooks } from "gherkin-wrapper"

const hooks = new Hooks()
const foo = new GherkinWrapper.forPlaywright(test, { hooks })

const bar = new GherkinWrapper.forPlaywright(test, { hooks })
const baz = new GherkinWrapper.forPlaywright(test, { hooks: bar.hooks })
```
Here `foo` has its own library while `bar` and `baz` share one.

#### Overrides

[BaseWrapperOptions](common.BaseWrapperOptions.md).[hooks](common.BaseWrapperOptions.md#hooks)

#### Defined in

[src/playwright/index.ts:52](https://github.com/Niitch/gherkin-wrapper/blob/03216b1/src/playwright/index.ts#L52)

___

### library

• `Optional` **library**: [`Library`](../classes/common.Library.md)<`any`\>

A prebuild step function library for the wrapper to start with.

**Usage**
```ts
import { test } from "@playwright/test";
import GherkinWrapper, { PlaywrightLibrary } from "gherkin-wrapper"

const library = new PlaywrightLibrary<typeof test>()
const foo = new GherkinWrapper.forPlaywright(test, { library })

const bar = new GherkinWrapper.forPlaywright(test, { library })
const baz = new GherkinWrapper.forPlaywright(test, { library: bar.library })
```
Here `foo` has its own library while `bar` and `baz` share one.

#### Overrides

[BaseWrapperOptions](common.BaseWrapperOptions.md).[library](common.BaseWrapperOptions.md#library)

#### Defined in

[src/playwright/index.ts:34](https://github.com/Niitch/gherkin-wrapper/blob/03216b1/src/playwright/index.ts#L34)
