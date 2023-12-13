import { test } from '@playwright/test';
import { SearchBarComponent } from '../pom/components/searchBar.page';
import { SuggestedProductsListPage } from '../pom/pages/suggestedProductsList.page';

test.describe('SearchBar Component', () => {
    const positiveScenarios = {
        'single word': 'xbox',
        'word with spaces': 'xbox one',
        'word with hyphens': 'xbox-one',
        'word with underscores': 'xbox_one',
        'word with numbers': 'xbox1',
        'word with special characters': 'controller',
        'all caps search term': 'XBOX',
    };
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
    for (const [scenario, searchTerm] of Object.entries(positiveScenarios)) {
        test(`Search for valid products. ${scenario}: '${searchTerm}'`, async ({
            page,
        }) => {
            const searchBarComponent = new SearchBarComponent(page);
            const suggestedProductsListPage = new SuggestedProductsListPage(page);
            await searchBarComponent.searchForProduct(searchTerm);
            await suggestedProductsListPage.confirmURL();
        });
    }
});
/*
Scenarios:
    - Search for a product that exists, us a for loop to go through multiple variations
    - Search for products that don't exist.
    - Search by image
*/
