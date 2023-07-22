[Gherkin wrapper - Documentation](./README.md) / Data persistence

# Manage data across test steps

The wrapper doesn't handle data persistence itself. It entirely relies on the runner features and some other you could implement yourself.

In most case, a good solution is to implement __test states__ that will be shared between steps and reset between tests.

## For Playwright

Playwright's [__fixtures__](https://playwright.dev/docs/test-fixtures) are an excellent candidate too defined __test states__. The fixtures are shared between each steps of a test and a new instance is created for each test.

```typescript
import { test as base } from "@playwright/test";
import GherkinWrapper from "gherkin-wrapper";


interface MyFixtures {
  state: Record<string, unknown> & {
    data?: string; // or any other typed params
  }
};

const test = base.extend<MyFixtures>({
  state: async ({}, use) => {
    const state = {}; // Mutable
    await use(state);
  };
});

const wrapper = GherkinWrapper.forPlaywright(test);

wrapper.given(/.*/, ({ state }) => {
    ...
});
```

## For Jest

You can follow the [__Setup and Teardown__ section of the Jest documentation](https://jestjs.io/docs/next/setup-teardown) to prepare an object that will be used in any tests.

For scopping, call the Jest hooks inside [tag hooks](./api/classes/common.Hooks.md#beforetag) or use step functions to run in some backgrounds or at the start/end of some scenarios.

```typescript
import GherkinWrapper from "gherkin-wrapper";

let state: Record<string, unknown> & {
  data?: string // or any other typed params
} = {};

const wrapper = GherkinWrapper.forPlaywright(test);

// Global setup
beforeEach(() => {
  state = {};
});

// Scoped setup

function loadRandomData() {
  const options = ["Jane", "Scott", "Tim"];
  state = { data: options[Math.floor(Math.random()*options.length)]};
};

// from tag hook
wrapper.beforeTag("@withRandomData", loadRandomData);

// from step function
wrapper.given(/i use random data/, loadRandomData);
```