[Gherkin wrapper - Documentation](./README.md) / Step functions

# Building step functions

The [__step functions__](./api/modules/common.md#stepfunction) are where you define the actual actions to perform during your tests.

## Step functions

You can register them using the [`given`](./api/classes/common.Wrapper.md#given), [`when`](./api/classes/common.Wrapper.md#when), [`then`](./api/classes/common.Wrapper.md#then) and [`any`](./api/classes/common.Wrapper.md#any) methods of the wrapper.

```typescript
wrapper.given("a game has started", () => {
    Game.start()
})
```

These methods accepts two arguments:
|#|Argument|Type|Description|
|---|---|---|---|
|1|pattern|string, [RegExp](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)|The pattern a step text should match to execute the step function|
|2|fn|[StepFunction](./api/modules/common.md#stepfunction)|The step function|

## Runner arguments

The first arguement of a step function is an object containing arguments from your test runner.

- For __Playwright__, it is the [fixture object](https://playwright.dev/docs/test-fixtures)

> For __Jest__, the runnerArgs object is not provided and the wrapperArgs object is passed as the first arguement instead. 

## Wrapper arguments

The second arguement of a step function is an object containing arguments from the wrapper. Most of them come from the definition of the step in the feature file.

Here are the one you are likely to use the most :

|Argument|Type|Description|
|---|---|---|
|match|RegexpMatchArray|The match result between |
|dataTable|[DataTable](https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/data_table_interface.md)|The data table that may have been attached to the step in the feature file.|
|docString|string|The docString that may have been attached to the step in the feature file.|

> _Remark: The wrapper arguments are always possibly undefined._

```typescript
wrapper.given(/i am (\w+)/, (runnerArgs, {match, dataTable}) => { 
    if (!dataTable) throw new Error('Missing dataTable')

    const name = match!.[1]
    const data = dataTable.hashes()

    ...
})
```
