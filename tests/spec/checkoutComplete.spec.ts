import { test } from '@playwright/test';
import { LoginPage } from '../pom/pages/login.page';
import { checkoutCompleteScenarios } from '../scenarios/checkoutComplete';

test.describe('Complete Checkout Journey Scenarios: ', async () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    for (const checkoutCompleteScenario of checkoutCompleteScenarios) {
        test(`${checkoutCompleteScenario.testCase}`, async () => {

        });
    }
});
