'use client'

import Image from 'next/image'
import Link from 'next/link'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import aux from '../../assets/photo.webp'
import aux2 from '../../assets/pokemon-go-g1.webp'
import aux3 from '../../assets/realidade-aumentada.webp'
import aux4 from '../../assets/Apple-Vision-Pro-sistema-1.jpg'
import aux5 from '../../assets/ikea-place.webp'
import aux6 from '../../assets/ra.jpeg'
import aux7 from '../../assets/Realidade-Aumentada-na-Logistica-Interna-a-experiencia-do-cliente-em-primeiro-lugar.jpg'

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
      containerClass='carousel-conteiner'
    >
      {/* Inicio primeiro slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Características da Realidade Aumentada
          </h1>
          <div className="w-full h-full flex max-md:flex-col max-md:items-center gap-5">
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

            <p className="text-2xl text-white">
              A realidade aumentada (RA) consiste em uma tecnologia que integra
              um conteúdo virtual dentro de um cenário real a partir de câmeras.
              Com isso, ela permite sobrepor elementos — oferecendo um mundo
              real com outros olhos.
            </p>
          </div>
        </div>
      </div>
      {/* FIM primeiro slide */}

      {/* Inicio segundo slide */}
      <div className="w-full h-full p-10 flex">
        <div className="h-full flex flex-col gap-10">
          <h1 className="h-full w-full font-ArchivoBlack text-4xl text-white text-center">
            História
          </h1>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={aux}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-24 w-full max-md:w-44"
              />
              <p className="text-white text-sm">
                Thomas Caudell, criador do termo &apos;realidade aumentada&apos;
                (Foto: Divulgação/ceet.unm.edu)
              </p>
            </div>

            <p className="text-2xl text-white">
              O termo foi criado em 1992 pelo cientista e pesquisador Thomas P.
              Caudell durante o desenvolvimento de um dos aviões mais famosos do
              mundo: o Boeing 747. Caudell observou que os operários
              responsáveis pela montagem da nova aeronave perdiam muito tempo
              interpretando as instruções e pensou: o que aconteceria se eles
              tivessem acesso a um monitor que os guiasse durante a instalação?
            </p>
          </div>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={aux2}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-sm text-white">
                &apos;Pokémon Go&apos;, jogo que leva os pokémons para o mundo
                real (Foto: Divulgação/Apple)
              </p>
            </div>
            <div className="flex flex-col gap-3 text-2xl text-white">
              <p>
                Foi em 1992, então, que surgiu o conceito de RA, e não, tal como
                muitos acreditam, no verão de 2016, quando fomos contagiados
                pela febre do Pokémon GO, um videogame que o jogador deve
                procurar e capturar diferentes personagens da saga japonesa. Em
                seu auge, o game atingiu a marca astronômica de 45 milhões de
                usuários diários ativos.
              </p>
              <p>
                O Pokémon GO popularizou a RA. Ele aproximou essa tecnologia do
                grande publico, mas, naquela época, já eram muitas as empresas
                de diversos setores (saúde, educação, arquitetura, serviços,
                varejo, etc.) que começavam a utilizá-la com o objetivo de criar
                experiências de valor para seus clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fim segundo slide */}

      {/* Inicio terceiro slide */}
      <div className="w-full h-full p-10 flex">
        <div className="h-full w-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Algumas empresas que aderiram a RA:
          </h1>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-fit">
              <Image
                src={aux4}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-fit w-full"
              />
              <p className="text-white text-sm">Imagem: Apple.</p>
            </div>
            <ul className="text-xl text-white list-disc ml-10 flex flex-col gap-5 text-start">
              <li>IKEA – empresa de móveis.</li>
              <li>MedRoom – startup de ensino medicinal</li>
              <li>DigitalKey e a iTeleport – empresa da área de arquitetura</li>
              <li>Techplus – industria que aderiu a RA</li>
              <li>Apple – Com o Vision Pro</li>
            </ul>
          </div>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-fit">
              <Image
                src={aux5}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-fit w-full"
              />
              <p className="text-sm text-white">
                O Ikea Place facilita a decisão de compra dos clientes (Foto:
                IKEA)
              </p>
            </div>
            <div className="flex flex-col gap-3 text-2xl text-white">
              <h2 className="text-center text-3xl font-bold mb-6">
                Exemplo: IKEA
              </h2>
              <p>
                “Graças às ferramentas digitais, podemos ter toda a Ikea
                conosco, em uma área reduzida [oferecendo ao mesmo tempo] uma
                continuidade entre as lojas físicas e a oferta online, em
                diferentes suportes, com a possibilidade de ser atendido com
                conselhos personalizados“, acrescentou. “A digitalização abre
                novas oportunidades no setor varejista. Queremos aproveitá-las
                para fortalecer o contato com o cliente”.
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
            RA nas indústrias
          </h1>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:flex max-md:flex-col max-md:items-center max-md:h-fit w-fit">
              <Image
                src={aux6}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-fit w-fit"
              />
              <p className="text-white text-sm">
                Foto:
                https://convergint.com.br/2021/01/19/realidade-aumentada-na-industria-como-a-tecnologia-otimiza-os-processos-de-manutencao/
              </p>
            </div>
            <div className="flex flex-col gap-3 text-2xl text-white">
              <p>
                RA mais conhecido na industria como 4.0, trás uma visão positiva
                através da digitalização industrial, promovendo um melhor
                desempenho na produtividade.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-fit">
              <Image
                src={aux7}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-fit w-fit"
              />
              <p className="text-sm text-white">
                Foto:
                https://automni.com.br/realidade-aumentada-na-logistica-interna-a-experiencia-do-cliente-em-primeiro-lugar/
              </p>
            </div>
            <div className="flex flex-col gap-3 text-2xl text-white">
              <p>
                Capacitando através de treinamentos, deixando mais simplificado
                e capacitado, evitando assim erros. E em manutenção o usuario
                consegue acessar manuais entre outros no ato do reparo de forma
                remota. Fabricas de automotivos são um dos maiores exemplos,
                pois utilizam muito na atualidade atraves da robótica a RA.
              </p>
              <p>
                No varejo o RA através de smartphones que possibilita ao usuário
                capturar, envio e edição em tempo real. Design de interiores
                onde o usuário pode visualizar como seria sua casa.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fim quarto slide */}

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
                  href="	https://www.iberdrola.com/inovacao/o-que-e-realidade-aumentada#:~:text=A%20Realidade%20Aumentada%20(RA)%20%C3%A9,bilh%C3%B5es%20de%20d%C3%B3lares%20no%20mundo"
                  target="_blank"
                >
                  https://www.iberdrola.com/inovacao/o-que-e-realidade-aumentada
                </Link>
              </li>
              <li>
                <Link
                  href="https://r2u.io/confira-algumas-empresas-de-realidade-virtual-e-realidade-aumentada-no-brasil/"
                  target="_blank"
                >
                  https://r2u.io/confira-algumas-empresas-de-realidade-virtual-e-realidade-aumentada-no-brasil/
                </Link>
              </li>
              <li>
                <Link
                  href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQirHDzlyIyKC_tyaVY6LrQRBDm_tV_mc0GUq1VgguI3PKGPhFogsakJN&s=10"
                  target="_blank"
                >
                  https://encrypted-tbn0.gstatic.com/
                </Link>
              </li>
              <li>
                <Link
                  href="https://sebrae.com.br/sites/PortalSebrae/artigos/realidadeaumentada-torna-mais-eficiente-a-industria-40,4d7bcf1a03fe5810VgnVCM1000001b00320aRCRD"
                  target="_blank"
                >
                  https://sebrae.com.br/sites/PortalSebrae/artigos/realidadeaumentada-torna-mais-eficiente-a-industria-40
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
