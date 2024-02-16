import { Page, Locator } from '@playwright/test';

export class checkoutStepOnePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}
