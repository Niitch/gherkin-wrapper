import { DataTable as RawDataTable, DocString, Feature, Rule, Scenario, Step } from '@cucumber/messages';
import { DataTable } from '@cucumber/cucumber';
import { Library } from './library';
import { Hooks } from './hooks';

/**
 * Represents the object holding the wrapper arguments passed to {@link StepFunction | step functions} and {@link StepHook | step related hooks}
 */
export interface WrapperArgs {
  /** The result of the match between the step function specification and the step text. */
  match?: RegExpMatchArray;
  /** The data table that may have been attached to the step in the feature file. */
  dataTable?: DataTable;
  rawdataTable?: RawDataTable;
  /** The content of the docstring that may have been attached to the step in the feature file. */
  docString?: DocString['content'];
}

/** Type helper that represents any object. */
export type KeyValue = { [key: string | number | symbol]: any };

/**
 * Type helper that hints a default type for unknown members of an object
 * @typeParam Base Type of the base object
 * @typeParam Default The default type to hint when accessing unknown members of Base
 */
export type WithDefault<Base, Default> = Base extends KeyValue
  ? {
      [K in keyof (Base & Omit<KeyValue, keyof Base>)]: K extends keyof Base ? Base[K] : Default;
    }
  : Base;

/**
 * Type of a step function
 *
 * @typeParam RunnerArgs Type of the runnerArgs parameter
 * @param runnerArgs an object holding arguments provided by the runner
 * @param wrapperArgs an object holding arguments provided by the wrapper
 */
export type StepFunction<RunnerArgs> = RunnerArgs extends null | undefined
  ? (wrapperArgs: WrapperArgs) => any
  : (runnerArgs: WithDefault<RunnerArgs, undefined>, wrapperArgs: WrapperArgs) => any;

/**
 * Represents a test specification
 *
 * @typeParam RunnerArgs Type of the object holding the runner arguments and passed to the {@link StepFunction | step functions}
 */
export interface TestSpec<RunnerArgs> {
  /** The pattern a step text should match */
  pattern: string | RegExp;
  /** The function to run against the matching steps */
  fn: StepFunction<RunnerArgs>;
}

/**
 * The minimal wrapper options
 */
export interface BaseWrapperOptions {
  library?: Library<any>;
  hooks?: Hooks<any>;
}

/**
 * Type of a tag related hook
 */
export type TagHook = (hookArgs: { target: Feature | Rule | Scenario }) => any;

/**
 * Type of a step hook
 *
 * @typeParam RunnerArgs Type of the runnerArgs parameter
 * @param hookArgs.target the current step
 * @param hookArgs.fn the current step function
 * @param runnerArgs an object holding the runner arguments passed to the step function
 * @param wrapperArgs an object holding the wrapper arguments passed to the step function
 */
export type StepHook<RunnerArgs> = (
  hookArgs: { target: Step; fn?: StepFunction<RunnerArgs> },
  runnerOrWrapperArgs: RunnerArgs extends null | undefined ? WrapperArgs : WithDefault<RunnerArgs, undefined>,
  wrapperArgs?: WrapperArgs,
) => any;

export { Library } from './library';
export { Wrapper } from './wrapper';
export { Hooks } from './hooks';
