import { type Locator, type Page } from '@playwright/test';

export class SearchBarComponent {
    readonly page: Page;
    readonly searchBarInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBarInput = page.getByPlaceholder('Search by product name or');
    }

    async searchForProduct(searchTerm: string) {
        await this.searchBarInput.fill(searchTerm);
        await this.searchBarInput.press('Enter');
    }
}
