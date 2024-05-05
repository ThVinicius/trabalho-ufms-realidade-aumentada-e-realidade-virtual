'use client'

import { ClipboardType } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function VideoPage() {
  return (
    <main className="w-full h-fit">
      <div className="w-56 flex justify-end">
        <Link
          href="/content/text"
          className="bg-white text-center p-2 rounded-lg flex items-center gap-2 text-lg my-10"
        >
          <ClipboardType size={30} /> Ir ao texto
        </Link>
      </div>

      <div className="w-1/2 max-lg:w-full h-full p-3 flex flex-col gap-10 items-center justify-center">
        <h1 className="font-ArchivoBlack text-5xl text-white text-center">
          Vídeo da Pesquisa
        </h1>
        <ReactPlayer url="https://youtu.be/nQR2c33208Q" controls />
        <p className="text-xl text-white text-center bg-blue-950 p-3 rounded-lg">
          Quer testar seu conhecimento no assunto? jogue nosso{' '}
          <Link
            href="https://create.kahoot.it/share/selecoes-e-arranjos/f922772e-15cc-4fff-a8ff-f3bd15258bad"
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
