import { Page, test } from "@playwright/test";
import GherkinWrapper from "../../src";
import { DataTable as RawDataTable } from "@cucumber/messages";
import { DataTable } from "@cucumber/cucumber";

const wrapper = new GherkinWrapper.forPlaywright(test)

const defaultHandler = async ({page}: {page: Page}, {dataTable, rawdataTable}: {dataTable?: DataTable, rawdataTable?: RawDataTable}) => {
    if (dataTable) console.log(dataTable.raw(), rawdataTable)
    await page.waitForTimeout(1000)
}

wrapper.given(/.*/, defaultHandler)
wrapper.when(/.*/, defaultHandler)
wrapper.then(/.*/, defaultHandler)

wrapper.test('./tests/complexe.feature')