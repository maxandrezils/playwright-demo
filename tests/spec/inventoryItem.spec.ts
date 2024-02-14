import { test } from '@playwright/test';
import { Header } from '../pom/components/header.page';
import { InventoryPage } from '../pom/pages/inventory.page';
import { LoginPage } from '../pom/pages/login.page';
import { inventoryItemScenarios } from '../scenarios/inventoryItemScenarios';


test.describe('Inventory Item Scenarios:', async () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.validLogin();
    });

    for (const inventoryItemScenario of inventoryItemScenarios) {
        test(`Add: ${inventoryItemScenario.test_case}`, async ({ page }) => {
            const inventoryPage = new InventoryPage(page);
            const headerPage = new Header(page);
            await inventoryPage.navigateToIndividualItem(inventoryItemScenario.item);
            await inventoryPage.addToCart(inventoryItemScenario.item);
            await headerPage.countItemsInCart();
        });
    }
    for (const inventoryItemScenario of inventoryItemScenarios) {
        test(`Remove: ${inventoryItemScenario.test_case}`, async ({ page }) => {
            const inventoryPage = new InventoryPage(page);
            const headerPage = new Header(page);
            await inventoryPage.navigateToIndividualItem(inventoryItemScenario.item);
            await inventoryPage.addToCart(inventoryItemScenario.item);
            await inventoryPage.removeFromCart(inventoryItemScenario.item);
            await headerPage.countItemsInEmptyCart();
        });
    }
});
