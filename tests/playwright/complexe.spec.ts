import { test } from "@playwright/test";
import GherkinWrapper from "../../src";


const wrapper = new GherkinWrapper.forPlaywright(test)

wrapper.beforeTag('@skip', ({target}) => {
    console.log(target.name + " >> skipped")
    test.skip(true, 'Tagged @skip')
})

wrapper.any(/.*/, async ({page, fake}, {dataTable}) => {
    if (dataTable) console.log(dataTable)
    await page.waitForTimeout(1000)
})

wrapper.test("./tests/complexe.feature")