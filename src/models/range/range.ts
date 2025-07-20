import { Range } from './interfaces/range';

/**
 * Mock implementation of the Range interface for testing or development purposes.
 * Provides stubbed methods that mimic the behavior of a spreadsheet range.
 *
 * @class MockRange
 * @implements {Range}
 */
export class MockRange implements Range {
  /**
   * Sets this range as the active range. No-op in mock.
   *
   * @memberof MockRange
   */
  activate() {}

  /**
   * Clears all content and formatting from the range. No-op in mock.
   *
   * @memberof MockRange
   */
  clear(): void {}

  /**
   * Clears only the content from the range, leaving formatting intact. No-op in mock.
   *
   * @memberof MockRange
   */
  clearContent(): void {}

  /**
   * Clears only the formatting from the range, leaving content intact. No-op in mock.
   *
   * @memberof MockRange
   */
  clearFormat(): void {}

  /**
   * Returns the values in the range as a 2D array of strings.
   * Always returns an empty array in the mock implementation.
   *
   * @returns {string[][]} 2D array of cell values
   * @memberof MockRange
   */
  getValues(): string[][] {
    return [[]];
  }

  /**
   * Sets the values in the range from a 2D array of strings. No-op in mock.
   *
   * @param {string[][]} values - 2D array of values to set
   * @memberof MockRange
   */
  setValues(values: string[][]): void {}

  /**
   * Returns the number of columns in the range. Always -1 in mock.
   *
   * @returns {number} Number of columns
   * @memberof MockRange
   */
  getNumColumns(): number {
    return -1;
  }

  /**
   * Returns the number of rows in the range. Always -1 in mock.
   *
   * @returns {number} Number of rows
   * @memberof MockRange
   */
  getNumRows(): number {
    return -1;
  }

  /**
   * Checks if the range is blank. Always true in mock.
   *
   * @returns {boolean} True if blank
   * @memberof MockRange
   */
  isBlank(): boolean {
    return true;
  }
}
