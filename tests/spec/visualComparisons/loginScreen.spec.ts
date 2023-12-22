import { expect, test } from '@playwright/test';

test('Confirm the layout of the Login Page @visual', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot();
    await page.close();
});