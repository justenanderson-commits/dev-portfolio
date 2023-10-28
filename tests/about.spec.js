import { test, expect } from '@playwright/test'

test('about page', async ({ page }) => {
  await page.goto('https://www.justenanderson.dev/about')

  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()

  await expect(page.getByText('A hard-working, team-player with success in the military, education, and private industry.')).toBeVisible()

  const educationTitle = await page.getByRole('heading', { name: 'Turing School of Software and Design - Denver, Colorado' }).first()
  const experienceTitle = await page.getByRole('heading', { name: 'Multiple Schools in Colorado & Costa Rica' })

  await page.getByRole('button', { name: 'Education' }).click();
  
  await expect(educationTitle).toBeInViewport()

  await page.getByRole('button', { name: 'Experience' }).click();
  await page.waitForTimeout(500)

  await expect(experienceTitle).toBeVisible()

  await page.screenshot({ path: 'screenshot1.png' })
})