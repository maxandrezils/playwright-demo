import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItem = page.locator('.inventory_item');
    }

    async expectInventoryCount(count: number) {
        await expect(this.inventoryItem).toHaveCount(count);
    }

} 
/*
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('#item_4_title_link').click();
  await page.locator('#item_4_img_link').click();
*/