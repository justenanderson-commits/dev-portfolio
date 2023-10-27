import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.justenanderson.dev/');

  await expect(page).toHaveTitle('Welcome!')
  
  await expect(page.getByRole('heading', { name: 'Justen Anderson'})).toContainText('Justen Anderson')
  
  await expect(page.getByRole('heading', { name: 'Developer | Educator | Veteran' })).toContainText('Developer | Educator | Veteran')
});