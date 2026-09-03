import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInput = this.page.locator('input[name="username"]');
  private readonly passwordInput = this.page.locator('input[name="password"]');
  private readonly loginButton = this.page.locator('button[type="submit"]');

  constructor(page: Page) {
    super(page);
  }

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
