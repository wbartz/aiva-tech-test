import './globals.css'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import Providers from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aiva Store | Loja de Produtos Modernos e Minimalistas',
  description:
    'Explore a coleção de produtos da Aiva Store. Itens com design moderno, minimalista e preços acessíveis. Filtre por categorias e encontre o que você procura.',
  keywords: [
    'Aiva Store',
    'Loja Online',
    'Produtos Minimalistas',
    'E-commerce Moderno',
    'Listagem de Produtos',
    'Design Clean',
    'Compra Online',
  ],
  metadataBase: new URL('https://www.aivastore.com'),
  openGraph: {
    title: 'Aiva Store | Produtos Minimalistas com Design Moderno',
    description:
      'Encontre os melhores produtos com design clean e preços acessíveis na Aiva Store.',
    url: 'https://www.aivastore.com',
    siteName: 'Aiva Store',
    images: [
      {
        url: 'https://www.aivastore.com/og-image.jpg', // Recomendo criar uma imagem OG com o logo + exemplo de produtos
        width: 1200,
        height: 630,
        alt: 'Aiva Store - Produtos Minimalistas',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aiva Store | Produtos Minimalistas com Design Moderno',
    description:
      'Descubra a nova coleção da Aiva Store com design clean e ótimo custo-benefício.',
    images: ['https://www.aivastore.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} />

        <Toaster richColors={true} position="top-center" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
