import { Page, Locator } from '@playwright/test';

export class checkoutCompletePage {
    readonly page: Page;
    readonly placeholder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.placeholder = page.locator('');

    }
}
