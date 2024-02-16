import { Page, Locator } from '@playwright/test';

export class checkoutStepTwoPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}
