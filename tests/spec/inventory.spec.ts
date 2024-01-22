import { test } from '@playwright/test';
import { InventoryPage } from '../pom/pages/inventory.page';
import { LoginPage } from '../pom/pages/login.page';

test.describe('Inventory Scenarios:', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.validLogin();
    });
    /**
     * Scenarios:
     * - items can be reordered and the order is validated
     * -
     * 
     */
});