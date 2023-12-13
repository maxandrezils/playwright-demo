import { expect, type Locator, type Page } from '@playwright/test';

export class SuggestedProductsListPage {
    readonly page: Page;
    readonly suggestedProductsListURL: string;

    constructor(page: Page) {
        this.page = page;
        this.suggestedProductsListURL = '/suggested-products-list';
    }

    async confirmURL() {
        await expect(this.page).toHaveURL(this.suggestedProductsListURL);
    }
}
