import { Locator, Page } from '@playwright/test';

export class Header {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly menu: Locator;
    readonly closeMenu: Locator;
    readonly allItems: Locator;
    readonly about: Locator;
    readonly logoutButton: Locator;
    readonly shoppingCart: Locator;
    readonly shoppingCartCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('#shopping_cart_container a');
        this.menu = page.getByRole('button', { name: 'Open Menu' });
        this.closeMenu = page.locator('button[aria-label="Close Menu"]');
        this.allItems = page.locator('a[aria-label="All Items"]');
        this.about = page.locator('a[aria-label="About"]');
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.shoppingCart = page.locator('#shopping_cart_container a');
        this.shoppingCartCount = page.locator('a:has-text("1")');
    }

    async openMenu() {
        await this.menu.click();
    }

    async closeTheMenu() {
        await this.closeMenu.click();
    }

    async goToAllItems() {
        await this.openMenu();
        await this.allItems.click();
    }

    async countItemsInCart() {
        await this.shoppingCartCount.isVisible();
    }

    async countItemsInEmptyCart() {
        await this.shoppingCartCount.isHidden();
    }

    async logout() {
        await this.openMenu();
        await this.logoutButton.click();
    }
}
