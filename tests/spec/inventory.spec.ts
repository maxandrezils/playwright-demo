import { test } from '@playwright/test';
import { InventoryPage } from '../pom/pages/inventory.page';
import { LoginPage } from '../pom/pages/login.page';
import { inventoryOrderScenarios } from '../scenarios/inventoryScenarios';

test.describe('Inventory Scenarios:', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    for (const inventoryOrderScenario of inventoryOrderScenarios) {
        test(`Inventory Order Scenario: ${inventoryOrderScenario.testCase}`, async ({ page }) => {
            const inventoryPage = new InventoryPage(page);
            await inventoryPage.selectProductSortBy(inventoryOrderScenario.inventory_order);
            await inventoryPage.assertFirstElementHasHeading(inventoryOrderScenario.heading);
        });
    }

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});
