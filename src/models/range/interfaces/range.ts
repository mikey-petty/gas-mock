/**
 * Interface for the Range object in Google Apps Script
 *
 * See: https://developers.google.com/apps-script/reference/spreadsheet/range
 *
 * @export
 * @interface Range
 */
export interface Range {
  activate(): void; // Sets the range as the active range.
  clear(): void; // Clears the range of contents and formats.
  clearContent(): void; // Clears the range of contents only, leaving the formatting intact.
  clearFormat(): void; // Clears the range of formatting, leaving the contents intact.
  getValues(): string[][]; // Retrieves the values of the range.
  setValues(values: string[][]): void; // Sets the values for the range.
  getNumColumns(): number; // Returns the number of columns in the range.
  getNumRows(): number; // Returns the number of rows in the range.
  getSheet(): Sheet; // Returns the sheet the range is on.
  isBlank(): boolean; // Returns true if the range is blank.
}
