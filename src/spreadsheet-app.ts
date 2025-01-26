
export class MockSpreadsheetApp {
  openByUrl(url: string): {} {
    console.log(`Opening spreadsheet: ${url}`)
    return {}
  }
}

globalThis.FakeSpreadsheetApp = new MockSpreadsheetApp();
