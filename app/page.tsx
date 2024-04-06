import { Rocket } from 'lucide-react'

import { Button } from '../components/shadcn/button'

export default function Home() {
  return (
    <main className="flex w-full items-center justify-between max-md:justify-center p-6">
      <div className="h-full w-1/2 max-md:w-full pt-48 max-md:pt-9 flex flex-col items-center bounceIn">
        <h1 className="font-ArchivoBlack text-5xl text-white text-center mb-10">
          Realidade Virtual e Realidade Aumentada
        </h1>
        <h2 className="font-ArchivoBlack text-2xl text-white text-center bg-blue-950 shadow-md rounded-md p-2">
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
