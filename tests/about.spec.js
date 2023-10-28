import { test, expect } from '@playwright/test'

test('about page', async ({ page }) => {
  await page.goto('https://www.justenanderson.dev/about')

  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()

  await expect(
    page.getByText(
      'A hard-working, team-player with success in the military, education, and private industry.'
    )
  ).toBeVisible()

  await page.getByRole('button', { name: 'Education' }).click();
  const title = await page.getByRole('heading', { name: 'Turing School of Software and Design - Denver, Colorado' }).first()
  
  await expect(title).toBeInViewport()
  await page.screenshot({ path: 'screenshot1.png' })
})