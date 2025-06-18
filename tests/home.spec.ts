import { test, expect } from '@playwright/test'

test.describe('Home', () => {
  test('deve exibir a página inicial', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toBeVisible()
    // Adapte para algum texto ou elemento esperado na home
  })
})
