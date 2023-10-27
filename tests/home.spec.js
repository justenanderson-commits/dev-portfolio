const { test, expect } = require('@playwright/test')

test('has title', async({ page }) => {
  await page.goto('https://justenanderson.dev')
  await expect(page).toHaveTitle(/Welcome!/)
})

