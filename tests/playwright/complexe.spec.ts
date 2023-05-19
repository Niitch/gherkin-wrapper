import { PlaywrightTestArgs, test } from "@playwright/test";
import GherkinWrapper from "../../src";
import { TestFunction } from "../../src/common/library";
import path from 'path'


const wrapper = new GherkinWrapper.forPlaywright(test)

const defaultHandler: TestFunction<PlaywrightTestArgs> = async ({page}, wrapperArgs) => {
    //console.log(JSON.stringify(wrapperArgs, null, 2))
    await page.waitForTimeout(1000)
}

wrapper.given(/.*/, defaultHandler)
wrapper.when(/.*/, defaultHandler)
wrapper.then(/.*/, defaultHandler)

wrapper.test(path.resolve(__dirname + "\\..\\complexe.feature"))