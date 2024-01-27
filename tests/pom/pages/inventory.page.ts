import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryItem: Locator;
    readonly productSortContainer: Locator;
    readonly addToCartSauceLabsBackpackButton: Locator;
    readonly addToCartSauceLabsBikeLightButton: Locator;
    readonly addToCartSauceLabsBoltTShirtButton: Locator;
    readonly addToCartSauceLabsFleeceJacketButton: Locator;
    readonly addToCartTestAllTheThingsTShirtRedButton: Locator;
    readonly addToCartSauceLabsOnesieButton: Locator;
    readonly removeSauceLabsBackpackButton: Locator;
    readonly removeSauceLabsBikeLightButton: Locator;
    readonly removeSauceLabsBoltTShirtButton: Locator;
    readonly removeSauceLabsFleeceJacketButton: Locator;
    readonly removeSauceLabsOnesieButton: Locator;
    readonly removeTestAllTheThingsTShirtRedButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItem = page.locator('.inventory_item_name');
        this.productSortContainer = page.locator('[data-test="product_sort_container"]');
        this.addToCartSauceLabsBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addToCartSauceLabsBikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addToCartSauceLabsBoltTShirtButton = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.addToCartSauceLabsFleeceJacketButton = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.addToCartTestAllTheThingsTShirtRedButton = page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');
        this.addToCartSauceLabsOnesieButton = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.removeSauceLabsBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.removeSauceLabsBikeLightButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.removeSauceLabsBoltTShirtButton = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.removeSauceLabsFleeceJacketButton = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.removeSauceLabsOnesieButton = page.locator('[data-test="remove-sauce-labs-onesie"]');
        this.removeTestAllTheThingsTShirtRedButton = page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');
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
        /**
        * The function addToCart takes an item as input and clicks on the corresponding button to add it
        * to the cart.
        * @param {string} item - The "item" parameter is a string that represents the item to be added to
        * the cart. It is used in a switch statement to determine which button to click based on the item
        * value.
        */
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

    async removeFromCart(item: string) { 
        /* The `switch` statement is used to check the value of the `item` parameter and perform
        different actions based on its value. In this case, it is used to determine which button to
        click in order to remove an item from the cart. */
        switch (item) {
        case 'remove-sauce-labs-backpack':
            await this.removeSauceLabsBackpackButton.click();
            break;
        case 'remove-sauce-labs-bolt-t-shirt':
            await this.removeSauceLabsBoltTShirtButton.click();
            break;
        case 'remove-sauce-labs-fleece-jacket':
            await this.removeSauceLabsFleeceJacketButton.click();
            break;
        case 'remove-sauce-labs-onesie':
            await this.removeSauceLabsOnesieButton.click();
            break;
        case 'remove-test-allthethings-t-shirt-red':
            await this.removeTestAllTheThingsTShirtRedButton.click();
            break;
        default:
            console.log('This does not exist');
            break;
        }
    }
}
