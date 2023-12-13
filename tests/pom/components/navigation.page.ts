import { type Locator, type Page } from '@playwright/test';

export class NavigationComponent {
    readonly page: Page;
    readonly allProductsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allProductsLink = page
            .getByRole('link', { name: 'All Products' })
            .first();
    }
}
