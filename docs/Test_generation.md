[Gherkin wrapper - Documentation](./README.md) / Test generation

# How tests are built

Gherkin wrapper is a runtime wrapper that doesn't rely on code generation.

When calling the gherkin wrapper [`test`](./api/classes/common.Wrapper.md#test) method, the feature file is read and perform actual calls  to the test framework methods based on its content.

For each test frameworks, the gherkin objects are handled like so:
- a `Feature` or `Rule` converts to a `describe` block
- a `Background` converts to a `beforeEach` block
- a `Scenario` or `Example` converts to a `test` block
- a `Scenario Outline` or `Scenario Template` converts to `test` blocks for each of its `Examples`
- a `Step` converts to a `step` block

