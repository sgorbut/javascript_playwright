const { test, expect } = require('@playwright/test');

test('First test', async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/docs/intro")
    await expect(page).toHaveTitle("Installation | Playwright");  

});

test('Second test', async ({page}) =>
{

    const listOfSearchResults = page.locator('.v-align-middle em');
    await page.goto("https://github.com")   // go to url
    console.log(await page.title());    // print page title
    await expect(page).toHaveTitle("GitHub: Let’s build from here · GitHub");    // get page title
    await page.click('[name="q"]');    // click on search field
    await page.fill('[name="q"]', "playwright");    // enter text
    await page.press('[name="q"]', 'Enter');    // click Enter
    console.log(await page.textContent('.d-flex > h3'));    // print text
    await page.hover('.HeaderMenu-item:nth-child(1) > .HeaderMenu-link');    // hover meny
    await page.click('[href="/features/actions"]');    // click
    // await page.waitForLoadState('networkidle');    // wait page is loaded by network connections
    // await page.waitForURL('**/features/actions');    // wait until direct page is loaded
    await page.click('[name="q"]');    // click on search field
    await page.fill('[name="q"]', "appium");    // enter text
    await page.press('[name="q"]', 'Enter');    // click Enter
    console.log(await page.textContent('.d-flex > h3'));    // print text
    await expect(page.locator('.d-flex > h3')).toContainText('repository results');   // assert element contains text
    console.log(await listOfSearchResults.first().textContent());    // print first element from list
    console.log(await listOfSearchResults.nth(7).textContent());    // print element from list by index
    const allSearchResults = await listOfSearchResults.allTextContents();    // get array from all texts from list
    console.log(allSearchResults);    // print list

});