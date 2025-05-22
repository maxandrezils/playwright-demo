import { Page, Locator } from "@playwright/test";

export class yourCartPage {
	readonly page: Page;
	readonly removeButton: Locator;
	readonly continueShoppingButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.removeButton = page.locator(
			'[data-test="remove-sauce-labs-backpack"]',
		);
		this.continueShoppingButton = page.locator(
			'[data-test="continue-shopping"]',
		);
	}
}
