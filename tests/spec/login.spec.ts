import { expect, test } from '@playwright/test';
import { LoginPage } from '../pom/pages/login.page';

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        
        await page.goto('/');
    }); 
    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.genericLogin('standard_user', 'secret_sauce');
    });
});