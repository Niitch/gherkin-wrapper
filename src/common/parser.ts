import * as Gherkin from '@cucumber/gherkin';
import { Location } from '@cucumber/messages';
import { Feature, Rule, Step, Background, Scenario, GherkinDocument, IdGenerator } from '@cucumber/messages';
import { readFileSync } from 'fs';

export function parse(filePath: string, encoding: BufferEncoding = 'utf8') {
  const uuidFn = IdGenerator.uuid();
  const builder = new Gherkin.AstBuilder(uuidFn);
  const matcher = new Gherkin.GherkinClassicTokenMatcher();
  const parser = new Gherkin.Parser(builder, matcher);
  try {
    return addFileToLocations(filePath, parser.parse(readFileSync(filePath, encoding)));
  } catch (error: any) {
    error.message = "Can't parse file '" + filePath + "': " + error.message;
    throw error;
  }
}

function addFileToLocations<T extends GherkinDocument | Feature | Rule | Scenario | Background | Step>(
  file: string,
  o: T,
) {
  if (o.location) o.location.file = file;
  if (o.feature) o.feature = addFileToLocations(file, o.feature);
  if (o.children)
    o.children = o.children.map((child) => {
      if (child.rule) child.rule = addFileToLocations(file, child.rule);
      if (child.background) child.background = addFileToLocations(file, child.background);
      if (child.scenario) child.scenario = addFileToLocations(file, child.scenario);
      return child;
    });
  if (o.steps) o.steps = o.steps.map((step) => addFileToLocations(file, step));
  return o;
}
