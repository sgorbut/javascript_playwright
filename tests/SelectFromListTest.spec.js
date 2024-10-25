const { test, expect } = require('@playwright/test');

test('Select item from list of items', async ({ page }) => {
  
    const searchInput = page.locator('[name="q"]');
    const elementOfList = page.locator('.repo-list-item');
    const programmingLanguage = "Java";
    
    await page.goto('https://github.com/');    // go to url
    await searchInput.click;   // Click on search input
    await searchInput.fill("Appium");  // Enter text to input
    await searchInput.press('Enter');    // Press Enter on input
    await page.waitForLoadState('networkidle')
    // Click on repository with Java language
    for(let i = 0; i < await elementOfList.count(); ++i)
    {
      if (await elementOfList.nth(i).locator("[itemprop='programmingLanguage']").textContent() === programmingLanguage)
      {
        await elementOfList.nth(i).locator('.v-align-middle').click();
        break;
      }
    }
    // await page.pause();

  });