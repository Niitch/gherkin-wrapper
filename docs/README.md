gherkin-wrapper / [Modules](modules.md)

# Gherkin wrapper

Make any test framework handle the Gherkin format.

`npm install gherkin-wrapper`

<br>

## Contents

- [Usage](#usage)
- [Docs](#docs)

<br>

---

_**What is it for ?**_

Since I've learnt about the Gherkin format for test specs definitions, I couldn't find a way to use complexe test runners like the Playwright one with a gherkin support without loosing most of the features brought by the runner.
Most of the time, it was "Cucumber + another test tool". But tools like Cucumber want to act as the test runner, hence restrincting the "other test tool" features.

I wanted something that allows you to use a given test runner at its full potential and makes it handle the Ghearkin format. So I made one!

_**How does it work ?**_

It's basically a wrapper for your favorite test runner.

Just like with Cucumber, you define your steps using `given`, `when` and `then` methods provided by the wrapper.
Then, you launch your tests the very same way you used to for your test runner.
The wrapper will read the feature files and build the tests for the your runner to run.

_**What's next ?**_

As you could tell, the wrapper only works for Playwright for now. I plan on adding support for more popular test runners.

> _What test runner should I work on next ?_
>
> Feel free to add an issue about the test runner you want to get wrapped. I'll work on the most commented ones.

I'll continue to improve the handling the gherkin format and maybe add a custom html reporter for Playwright.

---

## Usage

Given the following feature file:

```
# features/example.feature

Feature: Guess the word

  Scenario: Breaker joins a game
    Given the Maker has started a game with the word "silky"
    When the Breaker joins the Maker's game
    Then the Breaker must guess a word with 5 characters
```

### For Playwright

```typescript
// step-definitions/example.spec.ts

import { test as base } from "@playwright/test";
import GherkinWrapper from "gherkin-wrapper";

// Add fixtures
const test = base.extend<{value: string}>({
    value: async ({}, use) => {
        await use('go')
    }
})

// Build the wrapper
const wrapper = new GherkinWrapper.forPlaywright(test)

// Register step functions
wrapper.given(/the Maker has started a game with the word "(.*)"/, async ({ page, value }, { match }) => {
    // Do things ...
})
wrapper.when("the Maker starts a game", () => {...})
wrapper.then("the Maker waits for a Breaker to join", () => {...})

// Run tests 
wrapper.test('./features/example.feature')
```

```shell
npx playwright test example.spec.ts
```

---

## Docs

Test function
-
```typescript
type TestFunction = (ra: RunnerArg, wa: WrapperArg) => any
```

- `RunnerArg`: The main arguement usually passed by the chosen test runner to the test function.
- `WrapperArg`: An object built by the wrapper with the following

WrapperArg
-
```typescript
type WrapperArg = {
    match?: RegExpMatchArray;
    dataTable?: DataTable;
    docString?: string;
}
```

- `match`: The result of the match between a test registration spec and the text of a step definition in the feature file 
- `dataTable`, `docString`: The data table or docstring you may have add to a step definition in the feature file

GherkinWrapper
-
```typescript
class GherkinWrapper {
    given(spec: string | RegExp, test: TestFunction): void
    when(spec: string | RegExp, test: TestFunction): void
    then(spec: string | RegExp, test: TestFunction): void

    test(filePath: string): void
}
```

- `given`, `when`, `then`
    
    Register a test function. When calling the `test` method, the function will be run when the wrapper find a step with then right keyword that match the specification.

    Arguements:
    - `spec`: A string or RegExp that should match step descriptions in the feature file
    - `test`: The function to run on `spec` matches.

<br>

- `test`
    
    Execute tests specified in a feature file. Each step should match a test function registerd with the `given`, `when` or `then` methods.

    Arguements:
    - `filePath`: A path to a feature file
