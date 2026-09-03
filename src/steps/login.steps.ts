import { expect } from '@playwright/test';
import { Given, When, Then } from '../support/fixtures';
import { env } from '../config/env';

Given('I am on the OrangeHRM login page', async ({ loginPage }) => {
  await loginPage.open(env.baseUrl);
});

When('I log in with valid credentials', async ({ loginPage }) => {
  await loginPage.login(env.username, env.password);
});

Then('I should be redirected to the Dashboard', async ({ dashboardPage }) => {
  await expect.poll(() => dashboardPage.isLoaded()).toBeTruthy();
  expect(await dashboardPage.getHeaderText()).toBe('Dashboard');
});
