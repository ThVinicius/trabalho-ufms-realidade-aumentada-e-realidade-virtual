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
    'Trabalho realizado na aula de Fundamentos de tecnologia da informação no curso de bacharelado de Sistema de Informação na UFMS'
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
      <body className="backgroundImage">
        <NavHeader />
        <main className="h-[calc(100vh-5rem)] w-screen">{children}</main>
      </body>
    </html>
  )
}
