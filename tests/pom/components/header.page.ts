import { type Locator, type Page } from '@playwright/test';

export class Header {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly menu: Locator;
    readonly closeMenu: Locator;
    readonly allItems: Locator;
    readonly about: Locator;
    readonly logout: Locator;
    readonly shoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('#shopping_cart_container a');
        this.menu = page.getByRole('button', { name: 'Open Menu' });
        this.closeMenu = page.getByRole('button', { name: 'Close Menu' });
        this.allItems = page.getByRole('link', { name: 'All Items' });
        this.about = page.getByRole('link', { name: 'About' });
        this.logout = page.getByRole('link', { name: 'Logout' });
        this.shoppingCart = page.locator('#shopping_cart_container a');
    }

    async openMenu() {
        await this.menu.click();
    }

    async closeTheMenu() {
        await this.closeMenu.click();
    }

    async goToAllItems() {
        await openMenu();
        await this.allItems.click();
    }
}
