import GherkinWrapper from "../../src";
import { HookEffect } from "../../src/common";


const wrapper = new GherkinWrapper.forJest()

wrapper.beforeTag('@skip', ({ target }) => {
    console.log(`${target.keyword} "${target.name}" tagged @skip`)
})

wrapper.beforeTag('@concurent', ({target}) => ({ concurrent: true }))

wrapper.any(/.*/, async ({dataTable}) => {
    if (dataTable) console.log(dataTable)
})

wrapper.test("./tests/complexe.feature")