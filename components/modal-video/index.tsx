'use client'

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
            Depois de assistir o vídeo não se esqueça de jogar nosso quiz 🤓!
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-full">
          <ReactPlayer
            url="videos/video.mp4"
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
