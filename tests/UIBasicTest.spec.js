const {test} = require('@playwright/test');

test('First test', async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://github.com")

});

test.only('Second test', async ({page}) =>
{

    await page.goto("https://ya.ru")

});