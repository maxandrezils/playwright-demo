import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryItem: Locator;
    readonly productSortContainer: Locator;
    readonly addToCartButtons: { [key: string]: Locator };
    readonly removeButtons: { [key: string]: Locator };
    readonly navigateToItem: { [key: string]: Locator };

    constructor(page: Page) {
        this.page = page;
        this.inventoryItem = page.locator('.inventory_item_name');
        this.productSortContainer = page.locator('[data-test="product_sort_container"]');
        this.addToCartButtons = {
            'sauce-labs-backpack': page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
            'sauce-labs-bike-light': page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]'),
            'sauce-labs-bolt-t-shirt': page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
            'sauce-labs-fleece-jacket': page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
            'test-allthethings-t-shirt-red': page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]'),
            'sauce-labs-onesie': page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
        };
        this.removeButtons = {
            'sauce-labs-backpack': page.locator('[data-test="remove-sauce-labs-backpack"]'),
            'sauce-labs-bolt-t-shirt': page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]'),
            'sauce-labs-fleece-jacket': page.locator('[data-test="remove-sauce-labs-fleece-jacket"]'),
            'sauce-labs-onesie': page.locator('[data-test="remove-sauce-labs-onesie"]'),
            'test-allthethings-t-shirt-red': page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')
        };
        this.navigateToItem = {
            'sauce-labs-backpack': page.locator('#item_4_title_link'),
            'sauce-labs-bike-light': page.locator('#item_0_title_link'),
            'sauce-labs-bolt-t-shirt': page.locator('#item_1_title_link'),
            'sauce-labs-fleece-jacket': page.locator('#item_5_title_link'),
            'test-allthethings-t-shirt-red': page.locator('#item_2_title_link'),
            'sauce-labs-onesie': page.locator('#item_3_title_link')
        };
    }

    async expectInventoryCount(count: number) {
        await expect(this.inventoryItem).toHaveCount(count);
    }

    async selectProductSortBy(value: string) {
        await this.productSortContainer.selectOption(value);
    }

    async assertFirstElementHasHeading(value: string) {
        await expect(this.inventoryItem.first()).toHaveText(value);
    }

    async addToCart(item: string) {
        const button = this.addToCartButtons[item];
        if (button) {
            await button.click();
        } else {
            console.log('No such button exists');
        }
    }

    async removeFromCart(item: string) {
        const button = this.removeButtons[item];
        if (button) {
            await button.click();
        } else {
            console.log('This does not exist');
        }
    }

    async navigateToIndividualItem(item: string) {
        const button = this.navigateToItem[item];
        if (button) {
            await button.click();
        } else {
            console.log('This does not exist');
        }
    }
}
