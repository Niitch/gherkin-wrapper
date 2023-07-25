import { PlaywrightWrapper, PlaywrightLibrary } from './playwright';
import { JestWrapper, JestLibrary } from './jest';
import { Hooks } from './common';

export default {
  forPlaywright: PlaywrightWrapper,
  forJest: JestWrapper,
};

export { PlaywrightLibrary, JestLibrary, Hooks };
