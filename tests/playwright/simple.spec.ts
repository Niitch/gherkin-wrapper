import { test as base } from "@playwright/test";
import GherkinWrapper from "../../src/";
import path from 'path'


const test = base.extend<{value: string}>({
    value: async ({}, use) => {
        console.log('fixture is being loaded')
        await use('go')
    }
})

const wrapper = new GherkinWrapper.forPlaywright(base)

wrapper.when("the Maker starts a game", () => {})
wrapper.then("the Maker waits for a Breaker to join", () => {})

wrapper.given(/the Maker has started a game with the word "(.*)"/, async ({ page }, { match }) => {
    console.log('fixture is being used')
    console.log(match)
    await page.goto('https://www.google.com/')
})

wrapper.when(/the Breaker.*/, () => {})
wrapper.then(/the Breaker.*/, () => {})

wrapper.test(path.resolve(__dirname + "\\..\\simple.feature"))
