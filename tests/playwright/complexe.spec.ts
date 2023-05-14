import { Page, test } from "@playwright/test";
import GherkinWrapper from "../../src";


const wrapper = new GherkinWrapper.forPlaywright(test)

wrapper.on('@skip', () => {
    test.skip(true, 'Tagged @skip')
})

const defaultHandler = async ({page}: {page: Page}, wrapperArgs) => {
    //console.log(JSON.stringify(wrapperArgs, null, 2))
    await page.waitForTimeout(1000)
}

wrapper.given(/.*/, defaultHandler)
wrapper.when(/.*/, defaultHandler)
//wrapper.then(/.*/, defaultHandler)

wrapper.test('./tests/complexe.feature')