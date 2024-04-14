'use client'

import Link from 'next/link'
import ReactPlayer from 'react-player'
import { Rocket } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../shadcn/dialog'
import { Button } from '../shadcn/button'
import { Skeleton } from '../shadcn/skeleton'

export function ModalVideo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-16 flex gap-3 bg-green-500 hover:bg-green-400 text-xl mt-10 pulse">
          Iniciar aprendizagem
          <Rocket />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-2/4 max-w-2/4 max-md:w-11/12 max-h-fit flex flex-col gap-14">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Tema do Vídeo: Realidade Virtual e Realidade Aumentada
          </DialogTitle>
          <DialogDescription className="text-xl">
            Depois de assistir o vídeo não se esqueça de jogar nosso{' '}
            <Link
              href="https://create.kahoot.it/share/selecoes-e-arranjos/f922772e-15cc-4fff-a8ff-f3bd15258bad"
              target="_blank"
              rel="noopener noreferrer"
              className='underline text-blue-300'
            >
              quiz
            </Link>{' '}
            🤓!
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-full">
          <ReactPlayer
            url="videos/video.mp4"
            controls={true}
            fallback={
              <Skeleton className="w-[45vw] max-md:w-[78vw] h-[33vh] max-md:h-[29vw]" />
            }
            width="100%"
            height="100%"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
