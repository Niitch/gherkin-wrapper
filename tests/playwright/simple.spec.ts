import { test as base } from "@playwright/test";
import GherkinWrapper from "../../src/";


const test = base.extend<{value: string}>({
    value: async ({}, use) => {
        console.log('fixture is being loaded')
        await use('go')
    }
})

const wrapper = new GherkinWrapper.forPlaywright(test)

wrapper.when("the Maker starts a game", () => null)
wrapper.then("the Maker waits for a Breaker to join", () => null)

wrapper.given(/the Maker has started a game with the word "(.*)"/, ({ value }, { match }) => {
    console.log('fixture is being used')
    console.log(match)
})

wrapper.when(/the Breaker.*/, () => null)
wrapper.then(/the Breaker.*/, () => null)

wrapper.test('./tests/simple.feature')