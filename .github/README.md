# Gherkin wrapper

Make any test framework handle the Gherkin format.

```shell
npm install gherkin-wrapper
```

__Supported test runners :__
- Playwright 1.44.0 and above
- Jest 29.7.0 and above

<br>

### Table of contents

- [Usage](#usage)
- [Documentation](../docs/README.md)

<br>

---

_**Motivation**_

Since I've learnt about the Gherkin format for test specs definitions, I couldn't find a way to use complexe test runners like the Playwright one with a gherkin support without loosing most of the features brought by the runner.
Most of the time, it was "Cucumber + another test tool". But tools like Cucumber want to act as the test runner, hence restrincting the "other test tool" features.

I wanted something that allows you to use a given test runner at its full potential and makes it handle the Ghearkin format. So I made one!

_**Concept**_

It's basically a wrapper for your favorite test runner.

Just like with Cucumber, you define your steps using `given`, `when` and `then` methods provided by the wrapper.
Then, you launch your tests the very same way you used to for your test runner.
The wrapper will read the feature files and build the tests for the your runner to run.

_**Roadmap**_

- [x] Wrapper for Playwright
- [x] Wrapper for Jest
- [x] Setup for hook effects
- [x] Concurrency for Jest (hook effect)
- [ ] Wrapper for Vitest
- [ ] Hook presets
- [ ] More hook effects

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

### For Jest

```typescript
// step-definitions/example.spec.ts

import GherkinWrapper from "gherkin-wrapper";

// Build the wrapper
const wrapper = new GherkinWrapper.forJest(test)

// Register step functions
wrapper.given(/the Maker has started a game with the word "(.*)"/, async ({ match }) => {
    // Do things ...
})
wrapper.when("the Maker starts a game", () => {...})
wrapper.then("the Maker waits for a Breaker to join", () => {...})

// Run tests 
wrapper.test('./features/example.feature')
```

```shell
npx jest
```