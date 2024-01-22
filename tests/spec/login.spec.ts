import { test } from '@playwright/test';
import { InventoryPage } from '../pom/pages/inventory.page';
import { LoginPage } from '../pom/pages/login.page';
import { loginScenarios } from '../scenarios/loginScenarios';


test.describe('Login Scenarios:', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    }); 
    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await loginPage.genericLogin('standard_user', 'secret_sauce');
        await inventoryPage.expectInventoryCount(6);
    });

    for (const loginScenario of loginScenarios) { 
        test(`Invalid Login: ${loginScenario.test_case}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.genericLogin(loginScenario.username, loginScenario.password);
            await loginPage.expectErrorMessage(loginScenario.error_message);
        });
    }
    
    test.afterEach(async ({ page }) => {
        await page.close();
    });
});