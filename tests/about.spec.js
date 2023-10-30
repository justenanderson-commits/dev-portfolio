import { test, expect } from '@playwright/test'

test('about page', async ({ page }) => {
  await page.goto('https://www.justenanderson.dev/')
  await page.getByRole('link', { name: 'About' }).first().click();

  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()

  await expect(page.getByText('A hard-working, team-player with success in the military, education, and private industry.')).toBeVisible()

  const educationTitle = await page.getByRole('heading', { name: 'Turing School of Software and Design - Denver, Colorado' }).first()
  const experienceTitle = await page.getByRole('heading', { name: 'Multiple Schools in Colorado & Costa Rica' })
  const certsAndAwardsTitle = await page.getByRole('heading', { name: 'Front-End Engineering Certificate'})

  await expect(educationTitle).toBeVisible(false)
  await page.getByRole('button', { name: 'Education' }).click();
  await page.waitForTimeout(500)
  await expect(educationTitle).toBeInViewport()

  await expect(experienceTitle).toBeVisible(false)
  await page.getByRole('button', { name: 'Experience' }).click();
  await page.waitForTimeout(500)
  await expect(experienceTitle).toBeVisible()

  await expect(certsAndAwardsTitle).toBeVisible(false)
  await page.getByRole('button', { name: 'Certifications & Awards' }).click();
  await page.waitForTimeout(500)
  await expect(certsAndAwardsTitle).toBeVisible()
})

test('test', async ({ page }) => {
  await page.goto('https://www.justenanderson.dev/about');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'See my resume' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Justen Anderson PDF Resume.pdf').nth(1).click();
  const resumeTitle = await page1.getByText('Justen Anderson PDF Resume.pdf').nth(1);
  await expect(resumeTitle).toBeVisible()
});