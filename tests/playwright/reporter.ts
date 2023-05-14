import GherkinWrapper from "../../src"
import path from 'path'

export default GherkinWrapper.forPlaywright.htmlReporter(path.resolve(__dirname + "\\..\\complexe.feature"))
