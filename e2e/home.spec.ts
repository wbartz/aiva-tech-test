import { test, expect } from '@playwright/test'

// Teste básico para garantir que a home está renderizando

test('home page should render', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/aiva/i)
  await expect(page.locator('body')).toBeVisible()
})
