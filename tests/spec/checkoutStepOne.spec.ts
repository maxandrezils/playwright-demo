import { test } from '@playwright/test';
import { LoginPage } from '../pom/pages/login.page';


test.describe('Checkout Step one scenarios: ', async () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.login('standard_user', 'secret_sauce');
    });
});
