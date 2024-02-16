import { Page, Locator } from '@playwright/test';

export class yourCartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}
