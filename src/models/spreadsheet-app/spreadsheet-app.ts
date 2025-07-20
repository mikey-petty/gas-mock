import { Spreadsheet } from '../spreadsheet/interfaces/spreadsheet';

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
    console.log(`Opening spreadsheet: ${url}`);
    return {};
  }
}

globalThis.FakeSpreadsheetApp = new MockSpreadsheetApp();
