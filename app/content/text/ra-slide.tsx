'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Button } from '../../../components/shadcn/button'

import aux3 from '../../assets/realidade-aumentada.webp'
import googleRA from '../../assets/google-ra.png'
import appleRA from '../../assets/apple-ra.png'
import microsftRA from '../../assets/microsoft-ra.png'
import ikeaRA from '../../assets/ikea-ra.png'
import pokemon from '../../assets/size_960_16_9_pokemon-go.webp'
import medidasRA from '../../assets/medidas-ra.png'
import inkHunterRA from '../../assets/ink-hunter-ra.png'

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

type IProps = {
  isTheaterMode: boolean
}

export function RASlide({ isTheaterMode }: IProps) {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      keyBoardControl
      itemClass={`${isTheaterMode ? 'carousel-full-mode' : ''} slideBackground`}
      containerClass="carousel-conteiner"
      customRightArrow={
        <Button className="absolute right-10 text-white p-5 py-7 rounded-full bg-white opacity-50 hover:bg-white hover:opacity-100">
          <ArrowRight size={36} color="#000" />
        </Button>
      }
      customLeftArrow={
        <Button className="absolute left-10 text-white p-5 py-7 rounded-full bg-white opacity-50 hover:bg-white hover:opacity-100">
          <ArrowLeft size={36} color="#000" />
        </Button>
      }
    >
      {/* Inicio primeiro slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            O QUE É REALIDADE AUMENTADA
          </h1>
          <div className="w-full h-full flex flex-col items-center max-md:flex-col max-md:items-center gap-28">
            <p className="text-2xl text-white">
              A Realidade Aumentada (RA) é uma tecnologia que sobrepõe elementos
              digitais ao mundo real, criando uma experiência mista que pode ser
              interativa e informativa.
            </p>

            <div className="h-fit w-fit">
              <Image
                src={aux3}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-fit w-full"
              />
              <p className="text-white text-sm">
                Cliente &quot;experimentando&quot; um tenis com o auxilio da
                realidade aumentada
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FIM primeiro slide */}

      {/* Inicio segundo slide */}
      <div className="w-full h-full p-10 flex">
        <div className="h-full flex flex-col gap-10">
          <h1 className="w-full font-ArchivoBlack text-4xl text-white text-center">
            Principais empresas que utilizam a Realidade Aumentada
          </h1>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={googleRA}
                alt="Google Glass"
                className="h-48 max-md:h-24 w-full max-md:w-44"
              />
              <p className="text-white text-sm">
                O Google Glass é um dispositivo semelhante a um par de óculos,
                que fixados em um dos olhos, disponibiliza uma pequena tela
                acima do campo de visão.
              </p>
            </div>

            <div className="text-white flex flex-col gap-7">
              <h2 className="text-3xl">Google</h2>
              <p className="text-2xl">
                O Google foi o pioneiro no uso de RA com o Google Glass, que foi
                uma tentativa inicial de óculos inteligentes. Além disso, o
                Google oferece funcionalidades de RA em produtos como o Google
                Maps, que possui uma função de navegação chamada Live View para
                orientar pessoas pelas cidades.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={appleRA}
                alt="O Apple Vision Pro"
                className="h-48 w-full"
              />
              <p className="text-sm text-white">
                O Apple Vision Pro, headset de realidade mista (MR) da Apple.
              </p>
            </div>

            <div className="text-white flex flex-col gap-7">
              <h2 className="text-3xl">Apple</h2>
              <p className="text-2xl">
                A Apple incorporou recursos de RA em seus dispositivos IOS, como
                o iPhone e o iPad, por meio da plataforma ARRKit. Muitas
                aplicações utilizam esses recursos para jogos, design de
                interiores, educação e outras experiências interativas. A Apple
                também lançou o Vision Pro, um headset de realidade mista com
                capacidade para experiências de RA e RV.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fim segundo slide */}

      {/* Inicio terceiro slide */}
      <div className="w-full h-full p-10 flex">
        <div className="h-full flex flex-col gap-10">
          <h1 className="w-full font-ArchivoBlack text-4xl text-white text-center">
            Principais empresas que utilizam a Realidade Aumentada
          </h1>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={microsftRA}
                alt="HoloLens da Microsoft"
                className="h-48 max-md:h-24 w-full max-md:w-44"
              />
              <p className="text-white text-sm">
                Um dispositivo holográfico autónomo, ergonómico e sem fios com
                aplicações preparadas para empresas e para aumentar a precisão e
                o rendimento do utilizador.
              </p>
            </div>

            <div className="text-white flex flex-col gap-7">
              <h2 className="text-3xl">Microsoft</h2>
              <p className="text-2xl">
                A Microsoft desenvolveu o HoloLens, um dispositivo de realidade
                mista que permite sobrepor elementos digitais ao mundo real. Ele
                é amplamente utilizado para fins industriais, médicos e
                educacionais.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={pokemon}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-sm text-white">
                Jogo usa realidade aumentada para levar personagens da Nintendo
                ao mundo real, mas de forma virtual (Reprodução/Niantic)
              </p>
            </div>

            <div className="text-white flex flex-col gap-7">
              <h2 className="text-3xl">Niantic</h2>
              <p className="text-2xl">
                Conhecida pelo jogo de sucesso Pokémon Go, que usa a RA para
                colocar Pokémon no mundo real. Eles também desenvolveram outros
                jogos que exploram a realidade aumentada como Harry Potter:
                Wizard Unite.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fim terceiro slide */}

      {/* Inicio quarto slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Principais empresas que utilizam a Realidade Aumentada
          </h1>
          <div className="w-full h-full flex flex-col items-center max-md:flex-col max-md:items-center gap-28">
            <div className="text-white flex flex-col gap-7">
              <h2 className="text-3xl">IKEA</h2>
              <p className="text-2xl text-white">
                A IKEA usa a RA para permitir que os clientes visualizem móveis
                em seus espaços, por meio do aplicativo IKEA Place. Os usuários
                podem sobrepor modelos tridimensionais de móveis em ambientes
                reais para ajudar a tomar decisões de compra.
              </p>
            </div>
            <div className="h-fit w-fit">
              <Image
                src={ikeaRA}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-fit w-full"
              />
              <p className="text-white text-sm">
                O Ikea Place facilita a decisão de compra dos clientes (Foto:
                Divulgação)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fim quarto slide */}

      {/* Inicio quinto slide */}
      <div className="w-full h-full p-10 flex">
        <div className="h-full flex flex-col gap-10">
          <h1 className="w-full font-ArchivoBlack text-4xl text-white text-center">
            Aplicativos de Realidade Aumentada
          </h1>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={medidasRA}
                alt="App de medidas"
                className="h-48 max-md:h-24 w-full max-md:w-44"
              />
              <p className="text-white text-sm">
                O app Medida permite medir rapidamente o tamanho de objetos
                reais, a altura de uma pessoa, e ele pode fornecer
                automaticamente as dimensões de objetos retangulares.
              </p>
            </div>

            <div className="text-white flex flex-col gap-7">
              <h2 className="text-3xl">Medidas (IOS)</h2>
              <p className="text-2xl">
                Ele funciona como uma espécie de fita métrica, permitindo medir
                o tamanho dos objetos ao seu redor por meio da câmera.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={inkHunterRA}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-white text-sm">
                A ferramenta permite escolher e aplicar desenhos em fotos da
                pele de qualquer parte do corpo.
              </p>
            </div>

            <div className="text-white flex flex-col gap-7">
              <h2 className="text-3xl">Ink Hunter</h2>
              <p className="text-2xl">
                É a solução de RA para quem quer se tatuar. O app permite testar
                como uma tatuagem vai ficar. Para usar é bem simples: você só
                precisa marcar o espaço no seu corpo com uma caneta e apontá-lo
                para a câmera.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fim quinto slide */}

      {/* Fim slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Referências Bibliográficas
          </h1>
          <div className="flex flex-col gap-3 text-2xl text-white">
            <ul className="text-xl text-white list-disc ml-10 flex flex-col gap-5 text-start">
              <li>
                <Link
                  href="https://g1.globo.com/tecnologia/noticia/2015/03/google-nao-desistiu-de-oculos-inteligentes-diz-executivo.html"
                  target="_blank"
                >
                  https://g1.globo.com/tecnologia/noticia/2015/03/google-nao-desistiu-de-oculos-inteligentes-diz-executivo.html
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.apple.com/apple-vision-pro/"
                  target="_blank"
                >
                  https://www.apple.com/apple-vision-pro/
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.safeimports.com.br/microsoft-hololens2"
                  target="_blank"
                >
                  https://www.safeimports.com.br/microsoft-hololens2
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ikea.com/global/en/newsroom/innovation/ikea-to-launch-new-ar-capabilities-for-ikea-place-on-new-ipad-pro-200319/"
                  target="_blank"
                >
                  https://www.ikea.com/global/
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.cnnbrasil.com.br/tecnologia/realidade-aumentada/"
                  target="_blank"
                >
                  https://www.cnnbrasil.com.br/tecnologia/realidade-aumentada/
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
