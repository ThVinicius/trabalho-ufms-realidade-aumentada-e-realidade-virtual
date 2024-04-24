import Link from 'next/link'

export default function VideoPage() {
  return (
    <main className="w-full h-full">
      <div className="w-1/2 max-lg:w-full h-full p-3 flex flex-col gap-10 items-center justify-center">
        <h1 className="font-ArchivoBlack text-5xl text-white text-center">
          Vídeo da Pesquisa
        </h1>
        <video
          controls
          preload="none"
          poster="/images/poster.png"
          className="w-3/4 h-96"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
