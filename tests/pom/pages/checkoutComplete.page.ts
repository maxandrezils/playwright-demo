import type { Page, Locator } from "@playwright/test";

export class checkoutCompletePage {
  readonly page: Page;
  readonly orderConfirmation: Locator;
  readonly thankYouMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.orderConfirmation = page.locator(".order_confirmation");
    this.thankYouMessage = page.locator(".thank_you_message");
  }
}
