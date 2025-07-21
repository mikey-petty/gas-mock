import { MockSpreadsheet } from './spreadsheet';

test('Spreadsheet Get Name Test', () => {
  const spreadsheet = new MockSpreadsheet();
  expect(spreadsheet.getName()).toBe('Mock Spreadsheet Name...');
});
