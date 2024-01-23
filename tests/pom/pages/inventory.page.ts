import { log } from 'console';
import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryItem: Locator;
    readonly productSortContainer: Locator;
    readonly addToCartSauceLabsBackpackButton: Locator;
    readonly removeSauceLabsBackpackButton: Locator;
    readonly addToCartSauceLabsBikeLightButton: Locator;
    readonly addToCartSauceLabsBoltTShirtButton: Locator;
    readonly addToCartSauceLabsFleeceJacketButton: Locator;
    readonly addToCartTestAllTheThingsTShirtRedButton: Locator;
    readonly addToCartSauceLabsOnesieButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItem = page.locator('.inventory_item_name');
        this.productSortContainer = page.locator('[data-test="product_sort_container"]');
        this.addToCartSauceLabsBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeSauceLabsBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.addToCartSauceLabsBikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addToCartSauceLabsBoltTShirtButton = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.addToCartSauceLabsFleeceJacketButton = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.addToCartTestAllTheThingsTShirtRedButton = page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');
        this.addToCartSauceLabsOnesieButton = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
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

    async addToCart(item: string) {
        switch (item) {
        case 'add-to-cart-sauce-labs-backpack':
            await this.addToCartSauceLabsBackpackButton.click();
            break;
        case 'add-to-cart-sauce-labs-bike-light':
            await this.addToCartSauceLabsBikeLightButton.click();
            break;
        case 'add-to-cart-sauce-labs-bolt-t-shirt':
            await this.addToCartSauceLabsBoltTShirtButton.click();
            break;
        case 'add-to-cart-sauce-labs-fleece-jacket':
            await this.addToCartSauceLabsFleeceJacketButton.click();
            break;
        case 'add-to-cart-test.allthethings-t-shirt-red':
            await this.addToCartTestAllTheThingsTShirtRedButton.click();
            break;
        case 'add-to-cart-sauce-labs-onesie':
            await this.addToCartSauceLabsOnesieButton.click();
            break;
        default:
            console.log('No such button exists');
            break;    
        }
    }
}
