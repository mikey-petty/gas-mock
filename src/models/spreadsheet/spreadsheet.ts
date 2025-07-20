import { Spreadsheet } from './interfaces/spreadsheet';

/**
 * Mocks a Spreadsheet in GoogleAppsScript
 *
 * @export
 * @class MockSpreadsheet
 * @implements {Spreadsheet}
 */
export class MockSpreadsheet implements Spreadsheet {
  /**
   * Returns the name of the spreadsheet
   *
   * @return {*}
   * @memberof MockSpreadsheet
   */
  getName() {
    console.log('TODO: Get Spreadsheet Name');
    return 'Mock Spreadsheet Name...';
  }
}
