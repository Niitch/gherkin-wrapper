import { test as base, expect } from "@playwright/test";
import GherkinWrapper from "../../src/";

interface fixture {
    /** A simple text value */
    value: string
}

const test = base.extend<fixture>({
    value: async ({}, use) => {
        await use('go')
    }
})

const wrapper = new GherkinWrapper.forPlaywright(test)


wrapper.when("the Maker starts a game", () => {})
wrapper.then("the Maker waits for a Breaker to join", () => {})

wrapper.given(/the Maker has started a game with the word "(.*)"/, async ({ page, value, fake }, { match }) => {
    await page.goto('https://www.google.com/')
    expect(value).toBe('go')
})

wrapper.when(/the Breaker.*/, () => {})
wrapper.then(/the Breaker.*/, () => {})


const anotherWrapper = new GherkinWrapper.forPlaywright(base, {library: wrapper.library})

anotherWrapper.test('./tests/simple.feature')