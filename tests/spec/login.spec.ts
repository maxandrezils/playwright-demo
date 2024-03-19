import { expect, test } from '@playwright/test';
import { Header } from '../pom/components/header.page';
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
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.expectInventoryCount(6);
    });

    for (const loginScenario of loginScenarios) {
        test(`Invalid Login: ${loginScenario.testCase}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.login(loginScenario.username, loginScenario.password);
            await loginPage.expectErrorMessage(loginScenario.error_message);
        });
    }

    test('Logout of SauceLabs demo site', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const header = new Header(page);
        await loginPage.login('standard_user', 'secret_sauce');
        await header.logout();
        await expect(loginPage.usernameInput).toBeVisible();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});
