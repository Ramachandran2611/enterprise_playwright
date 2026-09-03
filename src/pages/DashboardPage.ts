import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  private readonly headerBreadcrumb = this.page.locator('h6.oxd-topbar-header-breadcrumb-module');
  private readonly mainMenuItems = this.page.locator('ul.oxd-main-menu li a span.oxd-main-menu-item--name');

  constructor(page: Page) {
    super(page);
  }

  async isLoaded(): Promise<boolean> {
    return this.headerBreadcrumb.isVisible();
  }

  async getHeaderText(): Promise<string> {
    return (await this.headerBreadcrumb.textContent())?.trim() ?? '';
  }

  async getMainMenuLabels(): Promise<string[]> {
    await this.mainMenuItems.first().waitFor();
    return this.mainMenuItems.allTextContents();
  }
}
