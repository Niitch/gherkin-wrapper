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

[src/common/index.ts:52](https://github.com/Niitch/gherkin-wrapper/blob/4bfbd8c/src/common/index.ts#L52)

___

### pattern

• **pattern**: `string` \| `RegExp`

The pattern a step text should match

#### Defined in

[src/common/index.ts:50](https://github.com/Niitch/gherkin-wrapper/blob/4bfbd8c/src/common/index.ts#L50)
