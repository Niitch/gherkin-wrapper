import * as Gherkin from '@cucumber/gherkin';
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
  if (!isGherkinDocument(o) && o.location) {
    o.location = Object.assign(o.location, { file });
  }
  if (isGherkinDocument(o) && o.feature) o.feature = addFileToLocations(file, o.feature);
  if (isFeatureOrRule(o) && o.children)
    o.children = o.children.map((child) => {
      if (child.rule) child.rule = addFileToLocations(file, child.rule);
      if (child.background) child.background = addFileToLocations(file, child.background);
      if (child.scenario) child.scenario = addFileToLocations(file, child.scenario);
      return child;
    });
  if (isScenarioOrBackground(o) && o.steps) o.steps = o.steps.map((step) => addFileToLocations(file, step));
  return o;
}

function isGherkinDocument(o: any): o is GherkinDocument {
  return Object.keys(o).includes('feature');
}

function isFeatureOrRule(o: any): o is Feature & Rule {
  return Object.keys(o).includes('children');
}

function isScenarioOrBackground(o: any): o is Scenario & Background {
  return Object.keys(o).includes('steps');
}
