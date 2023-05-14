import HtmlReporter from '@playwright/test/lib/reporters/html';
import { FullConfig, Location, Suite, TestStep, Reporter, FullResult } from '@playwright/test/reporter';
import { readFileSync } from 'fs';

function location(file: { path: string; content: string[] }, searchValue: string): Location | undefined {
  searchValue = searchValue
    .replace(/ \(\d+\)$/, '') // for scenario outline examples
    .replace(/<.*>/, '<.*>'); // for steps of scenario outlines

  for (const [line, content] of file.content.entries()) {
    const column = content.search(searchValue);
    if (column !== -1)
      return {
        file: file.path,
        line: line + 1,
        column: column + 1,
      };
  }
}

export function makeHtmlReporter(filePath: string, encoding?: BufferEncoding) {
  return makeReporter(HtmlReporter, filePath, encoding);
}

export function makeReporter(base: new () => Reporter, filePath: string, encoding: BufferEncoding = 'utf-8') {
  const file = {
    path: filePath,
    content: readFileSync(filePath, encoding).replace('\r\n', '\n').split('\n'),
  };

  function formatSuite(suite: Suite) {
    for (const test of suite.tests || []) {
      const loc = location(file, test.title);
      if (loc) test.location = loc;
      for (const result of test.results) for (const step of result.steps) formatStep(step);
    }
    for (const child of suite._entries || []) formatSuite(child);
  }

  function formatStep(step: TestStep) {
    if (step.category === 'test.step' && step.location) {
      const loc = location(file, step.title);
      if (loc) step.location = loc;
    }
    for (const child of step.steps) formatStep(child);
  }

  return class extends base {
    onBegin(config: FullConfig, suite: Suite) {
      formatSuite(suite);
      return super.onBegin?.(config, suite);
    }

    onEnd(result: FullResult) {
      formatSuite(this.suite);
      return super.onEnd?.(result);
    }
  };
}
