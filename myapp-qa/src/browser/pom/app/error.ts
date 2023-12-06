import type { Page, Response, Locator } from '@playwright/test';

export class ErrorPage {
	readonly page: Page;
	readonly message: Locator;
	private response: any;

	constructor(page: Page) {
		this.page = page;
		this.message = page.locator('title');
	}

	async goto() {
		return this.response = await this.page.goto('/+error') as Response;
	}

	async getStatus(): Promise<{ message: string | null; status: number }> {
		await this.goto();
		const status = this.response.status();
		const message = await this.message.textContent();
		return { status, message };
	}

	async status() {
		const statusInfo = await this.getStatus();
		return { ...statusInfo };
	}
}
