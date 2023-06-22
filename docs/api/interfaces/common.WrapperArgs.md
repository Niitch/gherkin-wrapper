[Gherkin wrapper - API Reference](../README.md) / [common](../modules/common.md) / WrapperArgs

# Interface: WrapperArgs

[common](../modules/common.md).WrapperArgs

Represents the object holding the wrapper arguments passed to [step functions](../modules/common.md#stepfunction) and [step related hooks](../modules/common.md#stephook)

## Table of contents

### Properties

- [dataTable](common.WrapperArgs.md#datatable)
- [docString](common.WrapperArgs.md#docstring)
- [match](common.WrapperArgs.md#match)
- [rawdataTable](common.WrapperArgs.md#rawdatatable)

## Properties

### dataTable

• `Optional` **dataTable**: `default`

The data table that may have been attached to the step in the feature file.

#### Defined in

[common/index.ts:13](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L13)

___

### docString

• `Optional` **docString**: `string`

The content of the docstring that may have been attached to the step in the feature file.

#### Defined in

[common/index.ts:16](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L16)

___

### match

• `Optional` **match**: `RegExpMatchArray`

The result of the match between the step function specification and the step text.

#### Defined in

[common/index.ts:11](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L11)

___

### rawdataTable

• `Optional` **rawdataTable**: `DataTable`

#### Defined in

[common/index.ts:14](https://github.com/Niitch/gherkin-wrapper/blob/12707b4/src/common/index.ts#L14)
