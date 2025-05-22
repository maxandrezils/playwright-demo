import { test } from "@playwright/test";
import { CheckoutStepOnePage } from "../pom/pages/checkoutStepOne.page";
import { LoginPage } from "../pom/pages/login.page";
import { checkoutStepOneScenarios } from "../scenarios/checkoutStepOne";

test.describe("Checkout Step one scenarios: ", async () => {
	test.beforeEach(async ({ page }) => {
		const loginPage = new LoginPage(page);
		await page.goto("/");
		await loginPage.login("standard_user", "secret_sauce");
		await page.goto("/checkout-step-one.html");
	});

	for (const checkoutStepOneScenario of checkoutStepOneScenarios) {
		test(`Validations: ${checkoutStepOneScenario.testCase}`, async ({
			page,
		}) => {
			const checkoutStepOne = new CheckoutStepOnePage(page);
			await checkoutStepOne.enterFirstName(checkoutStepOneScenario.firstName);
			await checkoutStepOne.enterLastName(checkoutStepOneScenario.lastName);
			await checkoutStepOne.enterPostalCode(checkoutStepOneScenario.postalCode);
			await checkoutStepOne.clickContinueButton();
		});
	}

	test.afterEach(async ({ page }) => {
		await page.close();
	});
});
