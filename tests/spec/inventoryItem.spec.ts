import { test } from '@playwright/test';
import { InventoryPage } from '../pom/pages/inventory.page';
import { InventoryItemPage } from '../pom/pages/inventoryItem.page';
import { LoginPage } from '../pom/pages/login.page';
import { inventoryItemScenarios } from '../scenarios/inventoryItemScenarios';


test.describe('Inventory Item Scenarios:', async () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.validLogin();
    });

    for (const inventoryItemScenario of inventoryItemScenarios) {
        test(`${inventoryItemScenario.test_case}`, async ({ page }) => {
            const inventoryPage = new InventoryPage(page);
            const inventoryItemPage = new InventoryItemPage(page);


        });
    }
});
