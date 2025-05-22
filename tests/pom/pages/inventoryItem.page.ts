import { type Locator, type Page } from "@playwright/test";

export class InventoryItemPage {
	readonly page: Page;
	readonly placeholder: Locator;

	constructor(page: Page) {
		this.page = page;
		this.placeholder = page.locator("");
	}
}
