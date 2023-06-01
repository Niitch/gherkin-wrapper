import { test } from "@playwright/test";
import GherkinWrapper from "../../src";
import path from 'path'


const wrapper = new GherkinWrapper.forPlaywright(test)

wrapper.beforeTag('@skip', () => {
    test.skip(true, 'Tagged @skip')
})

wrapper.any(/.*/, async ({page}, {dataTable}) => {
    if (dataTable) console.log(dataTable)
    await page.waitForTimeout(1000)
})

wrapper.test(path.resolve(__dirname + "\\..\\complexe.feature"))