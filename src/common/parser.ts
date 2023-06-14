import * as Gherkin from '@cucumber/gherkin';
import { IdGenerator } from '@cucumber/messages';
import { readFileSync } from 'fs';

/** @internal */
export function parse(filePath: string, encoding: BufferEncoding = 'utf8') {
  const uuidFn = IdGenerator.uuid();
  const builder = new Gherkin.AstBuilder(uuidFn);
  const matcher = new Gherkin.GherkinClassicTokenMatcher();
  const parser = new Gherkin.Parser(builder, matcher);
  try {
    return parser.parse(readFileSync(filePath, encoding));
  } catch (error: any) {
    error.message = "Can't parse file '" + filePath + "': " + error.message;
    throw error;
  }
}
