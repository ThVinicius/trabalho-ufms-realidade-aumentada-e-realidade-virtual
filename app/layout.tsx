import './globals.css'

import type { Metadata } from 'next'
import { Archivo_Black, Bungee_Shade } from 'next/font/google'
import { BookOpenText, GraduationCap, Home, Users } from 'lucide-react'

import { Button } from '../components/ui/button'

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
      <body>
        <main className="h-screen w-screen">
          <header className="w-screen h-20 p-4 flex justify-around items-center border-b-2 border-b-white">
            <Button variant="ghost" className="flex gap-2 text-green-700">
              <Home />
              Início
            </Button>
            <Button variant="ghost" className="flex gap-2 text-white">
              <Users />
              Membros
            </Button>
            <Button variant="ghost" className="flex gap-2 text-white">
              <GraduationCap />
              Prove seu conhecimento!
            </Button>
            <Button variant="ghost" className="flex gap-2 text-white">
              <BookOpenText />
              Bibliografia
            </Button>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
