[Gherkin wrapper - API Reference](../README.md) / [common](../modules/common.md) / TestSpec

# Interface: TestSpec<RunnerArgs\>

[common](../modules/common.md).TestSpec

Represents a test specification

## Type parameters

| Name | Description |
| :------ | :------ |
| `RunnerArgs` | Type of the object holding the runner arguments and passed to the [step functions](../modules/common.md#stepfunction) |

## Table of contents

### Properties

- [fn](common.TestSpec.md#fn)
- [pattern](common.TestSpec.md#pattern)

## Properties

### fn

• **fn**: [`StepFunction`](../modules/common.md#stepfunction)<`RunnerArgs`\>

The function to run against the matching steps

#### Defined in

[common/index.ts:48](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L48)

___

### pattern

• **pattern**: `string` \| `RegExp`

The pattern a step text should match

#### Defined in

[common/index.ts:46](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L46)
