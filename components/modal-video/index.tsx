'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Rocket } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../shadcn/dialog'
import { Button } from '../shadcn/button'
import videoGif from '@/app/assets/video-channel.gif'
import textGif from '@/app/assets/read.gif'

export function ModalVideo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-16 flex gap-3 bg-green-500 hover:bg-green-400 text-xl mt-10 pulse">
          Iniciar aprendizagem
          <Rocket />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-2/6 max-w-2/6 max-md:w-11/12 max-h-fit py-16 flex flex-col items-center gap-14">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Selecione um para começar o aprendizado
          </DialogTitle>
        </DialogHeader>
        <div className="w-full flex max-sm:flex-col max-sm:gap-10 justify-around items-center">
          <Link
            href="content/video"
            className="w-52 h-52 flex flex-col justify-center items-center rounded-2xl border border-purple-950 shadow-2xl cursor-pointer"
          >
            <p className="font-ArchivoBlack text-2x text-center">Vídeo</p>
            <Image
              src={videoGif}
              alt="Gif de um video"
              width={150}
              height={150}
            />
          </Link>
          <Link
            href="content/text"
            className="w-52 h-52 flex flex-col justify-center items-center rounded-2xl border border-purple-950 shadow-2xl cursor-pointer"
          >
            <p className="font-ArchivoBlack text-2x text-center">Texto</p>
            <Image
              src={textGif}
              alt="Gif de um texto"
              width={150}
              height={150}
            />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
