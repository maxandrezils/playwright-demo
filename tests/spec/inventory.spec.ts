import { test } from '@playwright/test';
import { InventoryPage } from '../pom/pages/inventory.page';
import { LoginPage } from '../pom/pages/login.page';
import { inventoryOrderScenarios, inventoryAddToCart } from '../scenarios/inventoryScenarios';

test.describe('Inventory Scenarios:', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.validLogin();
    });
    // Scenarios for changing the order of the inventory items, confirming which item appears first.
    for (const inventoryOrderScenario of inventoryOrderScenarios) { 
        test(`Inventory Order Scenario: ${inventoryOrderScenario.test_case}`, async ({ page }) => {
            const inventoryPage = new InventoryPage(page);
            await inventoryPage.selectProductSortBy(inventoryOrderScenario.inventory_order);
            await inventoryPage.assertFirstElementHasHeading(inventoryOrderScenario.heading);
        });    
    }
    // Scenarios for adding items to the cart.
    test('Add item to cart', async ({ page }) => { 
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.addToCart('add-to-cart-sauce-labs-onesie');

    });
    test.afterEach(async ({ page }) => {
        await page.close();
    });
});