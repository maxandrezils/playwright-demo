import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test=username]');
        this.passwordInput = page.locator('[data-test=password]');
        this.loginButton = page.locator('[data-test=login-button]');
        this.errorMessage = page.locator('[data-test=error]');
    }

    async genericLogin(username: string, password: string) {
        /**
        * Logs in the user with the provided username and password.
        *
        * @param {string} username - The username of the user.
        * @param {string} password - The password of the user.
        * @return {Promise<void>} A promise that resolves when the user is logged in.
        */
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async expectErrorMessage(message: string) {
        /**
        * Asserts that the error message contains the specified message.
        *
        * @param {string} message - The message to be checked.
        * @return {Promise<void>} - A promise that resolves when the assertion is complete.
        */
        await expect(this.errorMessage).toContainText(message);
    }
}