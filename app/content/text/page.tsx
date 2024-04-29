'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '../../../components/shadcn/button'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../../../components/shadcn/tabs'
import { RASlide } from './ra-slide'
import { RVSlide } from './rv-slide'

export default function TextPage() {
  const [isTheaterMode, setIsTheaterMode] = useState(false)

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setIsTheaterMode(false)
      }
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])

  const activeTheaterMode = () => {
    setIsTheaterMode(true)
    document.documentElement.requestFullscreen()
  }

  return (
    <main className="w-full h-full">
      <div className="p-4 flex justify-around">
        <Link
          href="/content/video"
          className="bg-white text-center p-2 rounded-lg"
        >
          Ir ao vídeo
        </Link>
        <Button onClick={activeTheaterMode}>Tela cheia</Button>
      </div>

      <Tabs
        defaultValue="rv"
        className={`w-full h-full text-center ${
          isTheaterMode ? 'theater-mode' : ''
        }`}
      >
        <TabsList>
          <TabsTrigger value="rv">Realidade Virtual</TabsTrigger>
          <TabsTrigger value="ra">Realidade Aumentada</TabsTrigger>
        </TabsList>
        <TabsContent value="rv" className="w-full h-full">
          <RVSlide isTheaterMode={isTheaterMode} />
        </TabsContent>
        <TabsContent value="ra" className="w-full h-full">
          <RASlide isTheaterMode={isTheaterMode} />
        </TabsContent>
      </Tabs>
    </main>
  )
}
