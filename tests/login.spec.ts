import { test, expect } from '@playwright/test'

test.describe('Login', () => {
  test('deve exibir a página de login', async ({ page }) => {
    await page.goto('/login')
    await expect(page.locator('body')).toBeVisible()
    // Adapte para algum texto ou campo esperado na tela de login
  })

  test('deve exibir o título da loja', async ({ page }) => {
    await page.goto('/login')
    await expect(page.getByText(/aiva store/i).first()).toBeVisible()
  })

  test('deve exibir o campo de email', async ({ page }) => {
    await page.goto('/login')
    await expect(page.getByLabel('Email')).toBeVisible()
  })

  test('deve exibir o campo de senha', async ({ page }) => {
    await page.goto('/login')
    await expect(page.getByLabel('Password')).toBeVisible()
  })

  test('deve exibir o botão de login', async ({ page }) => {
    await page.goto('/login')
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible()
  })
})
