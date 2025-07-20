import { Spreadsheet } from '../spreadsheet/interfaces/spreadsheet';
import { MockSpreadsheet } from '../spreadsheet/spreadsheet';

/**
 * Class used to Mock the fuctionality of the SpreadsheetApp
 * in Google Apps Script
 *
 * @export
 * @class MockSpreadsheetApp
 */
export class MockSpreadsheetApp implements SpreadsheetApp {
  /**
   * Retrieves a spreadsheet given a URL
   *
   * @param {string} url
   * @return {Spreadsheet}
   * @memberof MockSpreadsheetApp
   */
  openByUrl(url: string): Spreadsheet {
    console.log(`TODO: Open spreadsheet logic: ${url}`);
    return new MockSpreadsheet();
  }
}

globalThis.FakeSpreadsheetApp = new MockSpreadsheetApp();
