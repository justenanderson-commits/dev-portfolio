import { test, expect } from '@playwright/test';

test('home page content', async ({ page }) => {
  await page.goto('https://www.justenanderson.dev/');

  await expect(page).toHaveTitle('Welcome!')
  
  await expect(page.getByRole('heading', { name: 'Justen Anderson'})).toContainText('Justen Anderson')
  
  await expect(page.getByRole('heading', { name: 'Developer | Educator | Veteran' })).toContainText('Developer | Educator | Veteran')

  await expect(page.getByText('A passionate learner and hard worker with excellent results in the military, edu')).toHaveClass('text-slate-300 pt-5 px-8 text-left lg:px-32')

  await expect(page.getByRole('heading', { name: 'About'})).toBeVisible()

  await expect(page.getByRole('heading', { name: 'Projects'})).toBeVisible()

  await expect(page.getByRole('heading', { name: 'Contact'})).toBeVisible()
});