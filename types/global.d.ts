
declare global {
  interface FakeSpreadsheetApp {
    openByUrl(url: string): {}
  }

  var FakeSpreadsheetApp: FakeSpreadsheetApp;
}

export { }