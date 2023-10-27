import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.justenanderson.dev/');
  // await expect(page).toContainText('Justen Anderson')
  await expect(page.getByRole('heading', { name: 'Developer | Educator | Veteran' })).toContainText('Developer | Educator | Veteran')
  // await page.getByRole('button', { name: 'Learn More' }).click();
  // await page.getByRole('heading', { name: 'About' }).click();
});