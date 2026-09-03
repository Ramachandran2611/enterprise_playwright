import { expect } from '@playwright/test';
import { Then } from '../support/fixtures';

Then('the browser tab title should be {string}', async ({ page }, expected: string) => {
  await expect(page).toHaveTitle(new RegExp(expected));
});

Then('the Dashboard header should read {string}', async ({ dashboardPage }, expected: string) => {
  expect(await dashboardPage.getHeaderText()).toBe(expected);
});

Then('the main menu should contain the following items:', async ({ dashboardPage }, dataTable) => {
  const expectedItems = dataTable.raw().map((row: string[]) => row[0]);
  const actualItems = await dashboardPage.getMainMenuLabels();

  for (const item of expectedItems) {
    expect(actualItems).toContain(item);
  }
});
