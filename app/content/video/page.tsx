'use client'

import { ClipboardType } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function VideoPage() {
  return (
    <main className="w-full h-4/5">
      <div className="w-56 flex justify-end">
        <Link
          href="/content/text"
          className="bg-white text-center p-2 rounded-lg flex items-center gap-2 text-lg my-10"
        >
          <ClipboardType size={30} /> Ir ao texto
        </Link>
      </div>

      <div className="w-2/5 max-lg:w-full h-full p-3 flex flex-col gap-10 items-center justify-center">
        <h1 className="font-ArchivoBlack text-5xl text-white text-center">
          Vídeo da Pesquisa
        </h1>
        <div className="w-full h-full">
          <ReactPlayer
            url="https://youtu.be/nQR2c33208Q"
            controls
            width="100%"
            height="100%"
          />
        </div>

        <p className="text-xl text-white text-center bg-blue-950 p-3 rounded-lg">
          Quer testar seu conhecimento no assunto? jogue nosso{' '}
          <Link
            href="https://create.kahoot.it/details/b725b87f-2497-4b1b-a509-f914be636e2e"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300"
          >
            quiz
          </Link>{' '}
          🤓!
        </p>
      </div>
    </main>
  )
}
