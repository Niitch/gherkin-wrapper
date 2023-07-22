import GherkinWrapper from "../../src/";

const wrapper = new GherkinWrapper.forJest()


wrapper.when("the Maker starts a game", () => {})
wrapper.then("the Maker waits for a Breaker to join", () => {})

wrapper.given(/the Maker has started a game with the word "(.*)"/, async ({ match }) => {
    console.log(match)
})

wrapper.when(/the Breaker.*/, () => {})
//wrapper.then(/the Breaker.*/, () => {})

wrapper.test("./tests/simple.feature")
