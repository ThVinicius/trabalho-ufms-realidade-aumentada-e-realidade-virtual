import './globals.css'

import type { Metadata } from 'next'
import { Archivo_Black, Bungee_Shade } from 'next/font/google'

import { NavHeader } from '../components/nav'

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-black'
})
const bungeeShade = Bungee_Shade({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bungee-shade'
})

export const metadata: Metadata = {
  title: 'Realidade Virtual e Realidade Aumentada',
  description:
    'Trabalho realizado na aula de Fundamentos de tecnologia da informação no curso de bacharelado de Sistema de Informação na UFMS',
    openGraph: {
      images: 'https://i.ibb.co/02328VN/background-image.png',
    },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bungeeShade.variable} ${archivoBlack.variable}`}
    >
      <body>
        <NavHeader />
        <main className="h-[calc(100vh-5rem)] w-screen overflow-y-auto p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
