import GherkinWrapper from "../../src";


const wrapper = new GherkinWrapper.forJest()

wrapper.beforeTag('@skip', ({ target }) => {
    console.log(`${target.keyword} "${target.name}" tagged @skip`)
})

wrapper.any(/.*/, async ({dataTable}) => {
    if (dataTable) console.log(dataTable)
})

wrapper.test("./tests/complexe.feature")