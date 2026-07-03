import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GRADE - Programação de Anime',
  description: 'Veja a programação de animes por data',
  verification: {
    google: 'EfWVEPizHYPXWzd1LuZutlwJvYXak0z65ay34yHcN8',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
    }
