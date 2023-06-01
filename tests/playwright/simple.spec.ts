import { test as base, expect } from "@playwright/test";
import GherkinWrapper from "../../src/";
import path from 'path'


const test = base.extend<{value: string}>({
    value: async ({}, use) => {
        await use('go')
    }
})

const wrapper = new GherkinWrapper.forPlaywright(test)

wrapper.when("the Maker starts a game", () => {})
wrapper.then("the Maker waits for a Breaker to join", () => {})

wrapper.given(/the Maker has started a game with the word "(.*)"/, async ({ page, value }, { match }) => {
    await page.goto('https://www.google.com/')
    expect(value).toBe('go')
})

wrapper.when(/the Breaker.*/, () => {})
wrapper.then(/the Breaker.*/, () => {})

wrapper.test(path.resolve(__dirname + "\\..\\simple.feature"))
