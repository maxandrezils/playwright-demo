import { log } from 'console';
import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryItem: Locator;
    readonly productSortContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItem = page.locator('.inventory_item_name');
        this.productSortContainer = page.locator('[data-test="product_sort_container"]');
    }

    async expectInventoryCount(count: number) {
        /**
        * Asserts that the inventory count matches the expected count.
        *
        * @param {number} count - The expected count of the inventory.
        * @return {Promise<void>} - A promise that resolves when the assertion is complete.
        */
        await expect(this.inventoryItem).toHaveCount(count);
    }

    async selectProductSortBy(value: string) {
        /**
        * Selects a product sort option based on the given value.
        *
        * @param {string} value - The value of the product sort option to select.
        * @return {Promise<void>} - A promise that resolves once the product sort option is selected.
        */
        await this.productSortContainer.selectOption(value);
    }

    async assertFirstElementHasHeading(value: string) {
        await expect(this.inventoryItem.first()).toHaveText(value);
    }

}
