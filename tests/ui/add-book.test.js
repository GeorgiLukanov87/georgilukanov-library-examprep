const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://georgilukanov-library-examprep.onrender.com/add-book');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  