import { Rocket } from 'lucide-react'

import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="flex w-full h-[calc(100%-5rem)] items-center justify-between p-6">
      <div className="h-full w-1/2 pt-48 flex flex-col items-center bounceIn">
        <h1 className="font-ArchivoBlack text-5xl text-white text-center mb-10">
          Realidade Virtual e Realidade Aumentada
        </h1>
        <h2 className="text-2xl text-white text-center">
          Trabalho de pesquisa realizado na aula de Fundamentos de computação
        </h2>
        <Button className="h-16 flex gap-3 bg-green-500 hover:bg-green-400 text-xl mt-10 pulse">
          Iniciar aprendizagem
          <Rocket />
        </Button>
      </div>
    </main>
  )
}
