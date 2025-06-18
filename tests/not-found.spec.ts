import { test, expect } from '@playwright/test'

test.describe('Página Not Found', () => {
  test('deve exibir a página 404 para rota inexistente', async ({ page }) => {
    await page.goto('/rota-inexistente-404')
    await expect(page.locator('body')).toBeVisible()
    // Adapte para algum texto ou elemento esperado na página 404
  })
})
