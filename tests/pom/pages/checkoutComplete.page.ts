import { Page, Locator } from '@playwright/test';

export class checkoutCompletePage {
    readonly page: Page;
    

    constructor(page: Page) {
        this.page = page;

    }
}