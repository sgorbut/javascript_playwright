const { test, expect } = require('@playwright/test');

test('Dropdown menu', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    // await page.pause();
    await page.goto('https://github.com/');    // go to url
    // console.log(await page.title());
    await page.hover('.HeaderMenu-item:nth-child(1) > .HeaderMenu-link');   // Hover on "Product"
    const [newPage] = await Promise.all([  // new page
      context.waitForEvent('page'),
      page.click('[href="https://github.blog"]')    // Click "Blog "
    ])
    const newPageHeader = await newPage.title();
    console.log(newPageHeader);    // print page title
    await newPage.close();  // close new page

  });