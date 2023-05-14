import { test, expect } from '@playwright/test';
import { DOMParserImpl as dom } from 'xmldom-ts';
import * as xpath from 'xpath-ts';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

//test number 3
test('How to install Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Click How to install Playwright
  await page.getByText('How to install Playwright', {exact: false}).click();


  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*-playwright/);
});

//test number 4
test('Iterating through a list', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Click How to install Playwright
  await page.getByText('How to install Playwright', {exact: false}).click();

  const myList = await page.locator("//div[@class='theme-doc-markdown markdown']//ul");
  const count = await myList.count();
  for (let i = 0; i < count; i++) {
    await console.log(myList);
  }

});