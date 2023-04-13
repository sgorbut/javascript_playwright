const { test, expect } = require('@playwright/test');

test('Dropdown menu', async ({ page }) => {
  
    const searchInput = page.locator('[name="q"]');
    const sortButton = page.locator('.select-menu-button');

    await page.goto('https://github.com/');    // go to url
    await searchInput.click;   // Click on search input
    await searchInput.fill("qwerty");  // Enter text to input
    await searchInput.press('Enter');    // Press Enter on input
    await page.waitForLoadState('networkidle')
    const datapickerStateText = await sortButton.allTextContents();
    await page.click('.select-menu-button');  // Click on "Sort"
    await page.click('.select-menu-list > [href="/search?o=desc&q=qwerty&s=forks&type=Repositories"]');   // Select another sort from dropdown
    await page.waitForLoadState('networkidle')
    const datapickerStateChangedText = await sortButton.allTextContents();
    expect (datapickerStateText).not.toEqual(datapickerStateChangedText);
    // await page.pause();
  
  });