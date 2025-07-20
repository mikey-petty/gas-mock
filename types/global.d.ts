import { Spreadsheet } from '../src/models/spreadsheet/interfaces/spreadsheet';
declare global {
  interface SpreadsheetApp {
    openByUrl(url: string): Spreadsheet;
  }

  var FakeSpreadsheetApp: SpreadsheetApp;
}

export {};
