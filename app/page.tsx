import { ModalVideo } from '../components/select-content'

export default function Home() {
  return (
    <main className="flex w-full h-full items-center justify-between max-md:justify-center">
      <div className="h-full w-1/2 max-md:w-full pt-48 max-md:pt-9 flex flex-col items-center bounceIn">
        <h1 className="font-ArchivoBlack text-5xl text-white text-center mb-10">
          Realidade Virtual e Realidade Aumentada
        </h1>
        <h2 className="font-ArchivoBlack text-2xl text-white text-center bg-blue-950 shadow-md rounded-md p-2">
          Trabalho de pesquisa realizado para disciplina de Fundamentos de
          Tecnologia da Informação
        </h2>
        <ModalVideo />
      </div>
    </main>
  )
}
