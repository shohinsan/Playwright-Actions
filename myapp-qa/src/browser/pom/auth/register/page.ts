import type { Page, Locator } from '@playwright/test';

export class RegisterPage {
	readonly page: Page;
	readonly nameInput: Locator;
	readonly usernameInput: Locator;
	readonly emailInput: Locator;
	readonly passwordInput: Locator;
	readonly confirmPasswordInput: Locator;
	readonly submitButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.nameInput = page.locator('[placeholder="Name"]');
		this.usernameInput = page.locator('[placeholder="Username"]');
		this.emailInput = page.locator('[placeholder="Email"]');
		this.passwordInput = page.locator('[placeholder="Password"]');
		this.confirmPasswordInput = page.locator('[placeholder="Confirm Password"]');
		this.submitButton = page.locator('button:text("Submit")');
	}

	async goto() {
		await this.page.goto('/register');
	}

	async enterName(name: string) {
		await this.nameInput.click();
		await this.nameInput.fill(name);
		await this.nameInput.press('Tab');
	}

	async enterUsername(username: string) {
		await this.usernameInput.click();
		await this.usernameInput.fill(username);
		await this.usernameInput.press('Tab');
	}

	async enterEmail(email: string) {
		await this.emailInput.click();
		await this.emailInput.fill(email);
		await this.emailInput.press('Tab');
	}

	async enterPassword(password: string) {
		await this.passwordInput.click();
		await this.passwordInput.fill(password);
		await this.passwordInput.press('Tab');
	}

	async enterConfirmPassword(confirmPassword: string) {
		await this.confirmPasswordInput.click();
		await this.confirmPasswordInput.fill(confirmPassword);
		await this.passwordInput.press('Tab');
	}

	async submitForm() {
		await this.submitButton.click();
	}

	async register(name: string, username: string, email: string, password: string, confirmPassword: string) {
		await this.enterName(name);
		await this.enterUsername(username);
		await this.enterEmail(email);
		await this.enterPassword(password);
		await this.enterConfirmPassword(confirmPassword);
		await this.submitForm();
	}
}
