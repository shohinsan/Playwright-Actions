import type { Page, Locator } from '@playwright/test';

export class LoginPage {
	readonly page: Page;
	readonly usernameInput: Locator;
	readonly passwordInput: Locator;
	readonly submitButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.usernameInput = page.locator('[placeholder="Username"]');
		this.passwordInput = page.locator('[placeholder="Password"]');
		this.submitButton = page.locator('button:text("Submit")');
	}

	async goto() {
		await this.page.goto('/login');
	}

	async enterUsername(username: string) {
		await this.usernameInput.click();
		await this.usernameInput.fill(username);
		await this.usernameInput.press('Tab');
	}

	async enterPassword(password: string) {
		await this.passwordInput.fill(password);
		await this.passwordInput.press('Tab');
	}

	async submitForm() {
		await this.submitButton.click();
	}

	async login(username: string, password: string) {
		await this.enterUsername(username);
		await this.enterPassword(password);
		await this.submitForm();
	}
}
