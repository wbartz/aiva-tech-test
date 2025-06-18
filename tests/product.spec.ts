import { test, expect } from '@playwright/test'

test.describe('Página de Produto', () => {
  test('deve exibir uma página de produto válida', async ({ page }) => {
    // Exemplo: slug fictício, ajuste conforme necessário
    await page.goto('/')
    await page.getByRole('img').first().click()
    await expect(page.locator('body')).toBeVisible()
    // Adapte para algum texto ou elemento esperado na página de produto
  })

  test('deve exibir o título do produto', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('img').first().click()
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('deve exibir o preço do produto', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('img').first().click()
    await expect(
      page.locator('.text-lg.font-semibold.text-primary'),
    ).toBeVisible()
  })

  test('deve exibir a descrição do produto', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('img').first().click()
    await expect(page.locator('.text-base.text-muted-foreground')).toBeVisible()
  })

  test('deve exibir o campo de quantidade', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('img').first().click()
    await expect(page.getByLabel('Quantity')).toBeVisible()
  })

  test('deve exibir o botão de adicionar ao carrinho', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('img').first().click()
    await expect(
      page.getByRole('button', { name: /add to cart/i }),
    ).toBeVisible()
  })

  test('deve exibir produtos relacionados', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('img').first().click()
    await expect(page.getByTestId('related-title')).toBeVisible()
  })

  test('deve permitir alterar a quantidade', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('img').first().click()
    const input = page.getByLabel('Quantity')
    await input.fill('3')
    await expect(input).toHaveValue('3')
  })

  test('deve exibir o carrossel de imagens', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('img').first().click()
    await expect(page.locator('[class*=Carrousel]')).toBeVisible()
  })
})
