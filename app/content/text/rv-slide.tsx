'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Button } from '../../../components/shadcn/button'

import aux2 from '../../assets/diferencas-realidade-virtual-e-aumentada.png'
import aux3 from '../../assets/grupo-multirracial-de-estudantes-usando-gadgets-de-rv-durante-as-aulas.webp'

import sonyRV from "../../assets/sony.png"
import valveRV from "../../assets/valve.png"
import metaRV from "../../assets/meta-quest.png"
import nasaRV from "../../assets/nasa-rv.jpeg"

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

export function RVSlide({ isTheaterMode }: IProps) {
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
            O QUE É REALIDADE VIRTUAL
          </h1>
          <div className="w-full h-full flex flex-col items-center max-md:flex-col max-md:items-center gap-28">
            <p className="text-2xl text-white">
              A Realidade Virtual (RV) busca fazer com que o cérebro acredite em
              algo como realidade, mesmo que não seja, e várias definições de
              realidade virtual já foram cunhadas, mas atualmente se refere
              principalmente a imagens geradas por computador e hardware
              imersivo. Embora a interatividade seja frequentemente citada como
              um requisito, nem toda realidade virtual gerada por computador é
              interativa e não precisa da interação para atingir realidade na
              nossa percepção.
            </p>

            <div className="h-fit w-fit">
              <Image
                src={aux2}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-fit w-full"
              />
              <p className="text-white text-sm">
                Montanha-russa com realidade virtual do parque SeaWorld Orlando
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FIM primeiro slide */}

      {/* Inicio segundo slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Características da Realidade Virtual
          </h1>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux3}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-white text-sm">
                realidade virtual sendo usado na educação
              </p>
            </div>

            <div className="flex flex-col gap-3 text-2xl text-white">
              <p>
                As interfaces são divididas em cinco fatores: imersiva,
                intensiva, interativa, ilustrativa e informativa.
              </p>
              <ul className="text-xl text-white list-disc ml-10 flex flex-col gap-5 text-start">
                <li>
                  Imersiva: Refere-se à sensação de estar completamente
                  envolvido no ambiente virtual. A tecnológica busca criar uma
                  experiência tão convincente que o usuário se sente como se
                  estivesse fisicamente presente em um mundo virtual. Isso é
                  alcançado por meio do uso de displays montados na cabeça
                  (HMDs), áudio tridimensional e sensores de movimento, entre
                  outras tecnologias.
                </li>
                <li>
                  Intensiva: A característica intensiva está relacionada ao
                  nível de detalhes e à complexidade dos ambientes virtuais. Uma
                  experiência de RV intensiva oferece uma riqueza de detalhes
                  que aproxima o ambiente virtual da realidade, tanto em termos
                  visuais quanto sonoros. Essa característica pode contribuir
                  para a profundidade da experiência e o impacto emocional que a
                  RV pode ter sobre os usuários.{' '}
                </li>
                <li>
                  Interativa: A interatividade é uma parte crucial das
                  experiências de RV. Ela se refere à capacidade do usuário de
                  interagir com o ambiente virtual de maneira significativa. Em
                  um cenário de RV interativo, o usuário pode tocar objetos,
                  mover-se no espaço, interagir com personagens virtuais e tomar
                  decisões que afetam o curso da experiência. A interatividade é
                  fundamental para criar experiências envolventes e
                  participativas.
                </li>
                <li>
                  Ilustrativa: A característica ilustrativa diz respeito à
                  capacidade da RV de visualizar informações de maneira clara e
                  compreensível. Isso é especialmente útil em contextos
                  educacionais e profissionais, onde a RV pode ser usada para
                  ilustrar conceitos complexos ou apresentar dados de uma forma
                  mais intuitiva. A visualização 3D permite que os usuários
                  entendam informações de maneira mais eficaz, graças à
                  capacidade de observar objetos de diferentes ângulos e
                  contextos.{' '}
                </li>
                <li>
                  Informativa: Por fim, a característica informativa refere-se
                  ao uso da RV para fornecer informações e conhecimentos ao
                  usuário. Em ambientes de RV informativos, o conteúdo é
                  apresentado de maneira envolvente, facilitando a aprendizagem
                  e a retenção de informações. A RV é uma ferramenta valiosa
                  para treinamento, educação e simulação, pois pode fornecer
                  informações de uma maneira mais dinâmica e interativa do que
                  os métodos tradicionais.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Fim segundo slide */}

      {/* Inicio terceiro slide */}
      <div className="w-full h-full p-10 flex">
        <div className="h-full flex flex-col gap-10">
          <h1 className="w-full font-ArchivoBlack text-4xl text-white text-center">
          Principais empresas que utilizam a Realidade Virtual
          </h1>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={metaRV}
                alt="Kit de realidade virtual da META"
                className="h-48 max-md:h-24 w-full max-md:w-44"
              />
              <p className="text-white text-sm">
                Kit de realidade virtual da META
              </p>
            </div>

            <div className='text-white flex flex-col gap-7'>
              <h2 className='text-3xl'>Meta</h2>
              <p className='text-2xl'>
              A Meta é proprietária da Oculus, uma das marcas mais reconhecidas em RV. Eles oferecem dispositivos como o Oculus Quest, um headset autônomo para jogos e outras experiências de RV. A Meta também está envolvida em criar o “metaverso”, uma visão de espaços virtuais onde as pessoas podem interagir socialmente e profissionalmente.
            </p>
            </div>
          </div>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={valveRV}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-white text-sm">
                Kit de realidade virtual da Valve
              </p>
            </div>

            <div className='text-white flex flex-col gap-7'>
              <h2 className='text-3xl'>Valve</h2>
              <p className='text-2xl'>
              A Valve é uma importante empresa de desenvolvimento de jogos que tem explorado a RV de forma inovadora. Eles também criaram o Valve Index, um dos headsets de RV de alta qualidade no mercado.
            </p>
            </div>
            
          </div>
        </div>
      </div>
      {/* Fim terceiro slide */}

      {/* Inicio quarto slide */}
      <div className="w-full h-full p-10 flex">
        <div className="h-full flex flex-col gap-10">
          <h1 className="w-full font-ArchivoBlack text-4xl text-white text-center">
          Principais empresas que utilizam a Realidade Virtual
          </h1>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={sonyRV}
                alt="Óculos de realidade virtual da Sony"
                className="h-48 max-md:h-24 w-full max-md:w-44"
              />
              <p className="text-white text-sm">
              Óculos de realidade virtual da Sony
              </p>
            </div>
            <div className='text-white flex flex-col gap-7'>
              <h2 className='text-3xl'>Sony</h2>
              <p className='text-2xl'>
              A Sony desenvolveu o PlayStation VR para uso com o console PlayStation, proporcionando uma variedade de experiências de RV, especialmente jogos.
            </p>
            </div>
            
          </div>
          <div className="w-full h-full flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full w-[40rem] max-md:w-fit max-md:flex max-md:flex-col max-md:items-center">
              <Image
                src={nasaRV}
                alt="O engenheiro Tom Grubb manipula uma simulação em 3D com a animação da velocidade e da direção de quatro milhões de estrelas na nossa vizinhança da Via Láctea. (Foto: NASA/Chris Gunn)"
                className="h-48 w-full"
              />
              <p className="text-white text-sm">
              O engenheiro Tom Grubb manipula uma simulação em 3D com a animação da velocidade e da direção de quatro milhões de estrelas na nossa vizinhança da Via Láctea. (Foto: NASA/Chris Gunn)
              </p>
            </div>

            <div className='text-white flex flex-col gap-7'>
              <h2 className='text-3xl'>Nasa</h2>
              <p className='text-2xl'>
              Utiliza Rv para treinamentos de astronautas, simulação de missões e visualização de dados espaciais.
            </p>
            </div>
            
          </div>
        </div>
      </div>
      {/* Fim quarto slide */}

      {/* Fim slide */}
      <div className="w-full h-full p-10 flex">
        <div className="h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Referências Bibliográficas
          </h1>
          <div className="flex flex-col gap-3 text-2xl text-white">
            <ul className="text-xl text-white list-disc ml-10 flex flex-col gap-5 text-start">
              <li>
                Braga Mariluci . Realidade Virtual e Educação. Revista de
                Biologia e Ciências da Terra [em linea]. 2001, 1(1). ISSN:
                1519-5228. Disponible em:{' '}
                <Link
                  href="https://www.redalyc.org/articulo.oa?id=50010104"
                  target="_blank"
                >
                  https://www.redalyc.org/articulo.oa?id=50010104
                </Link>
              </li>
              <li>
                <Link
                  href="https://about.meta.com/br/technologies/meta-quest/"
                  target="_blank"
                >
                  https://about.meta.com/br/technologies/meta-quest/
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.valvesoftware.com/pt-br/index"
                  target="_blank"
                >
                  https://www.valvesoftware.com/pt-br/index
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.playstation.com/pt-br/ps-vr/"
                >
                  https://www.playstation.com/pt-br/ps-vr/
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
