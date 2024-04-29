'use client'

import Image from 'next/image'
import Link from 'next/link'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import aux from '../../assets/17.png'
import aux2 from '../../assets/diferencas-realidade-virtual-e-aumentada.png'
import aux3 from '../../assets/grupo-multirracial-de-estudantes-usando-gadgets-de-rv-durante-as-aulas.webp'
import aux4 from '../../assets/2015-09-29-vr-helm-militar-norteamericano.webp'
import aux5 from '../../assets/61e6f5037c6a20001842655c.webp'
import aux6 from '../../assets/2.-realidade-virtual.webp'
import aux7 from '../../assets/vr-educação.jpeg'
import aux8 from '../../assets/img_8649.webp'
import aux9 from '../../assets/alunos-da-bond-university-australia.-cred-divulgacao-1024x1024.jpg'

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
    >
      {/* Inicio primeiro slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            O que é Realidade Virtual?
          </h1>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux2}
                alt="Imagem do primeiro oculos"
                className="h-48 max-md:h-fit w-full"
              />
            </div>
            <p className="text-xl text-white">
              A RV busca fazer com que o cérebro acredite em algo como
              realidade, mesmo que não seja, e várias definições de realidade
              virtual já foram cunhadas, mas atualmente se refere principalmente
              a imagens geradas por computador e hardware imersivo. Embora a
              interatividade seja frequentemente citada como um requisito, nem
              toda realidade virtual gerada por computador é interativa e não
              precisa da interação para atingir realidade na nossa percepção.
            </p>
          </div>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-sm text-white">
                Primeiro monitor montado na cabeça VR / AR (Sword of Damocles).
              </p>
            </div>
            <p className="text-xl text-white">
              Em 1968, Ivan Sutherland e seu aluno Bob Sproull criaram o
              primeiro monitor montado na cabeça VR / AR (Sword of Damocles) que
              foi conectado a um computador. Era uma engenhoca grande e
              assustadora que era pesada demais para qualquer usuário usar
              confortavelmente e estava suspensa no teto (daí o nome). O usuário
              também precisaria ser amarrado ao dispositivo. Os gráficos gerados
              por computador eram salas e objetos de wireframe muito primitivos.
            </p>
          </div>
        </div>
      </div>
      {/* FIM primeiro slide */}

      {/* Inicio segundo slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Características
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
                A realidade virtual rompe ou suaviza a barreira existente entre
                a simulação e o usuário que normalmente é provocada pelos
                mecanismos operacionais do computador.
              </p>
              <p>
                As interfaces baseadas em Realidade Virtual ocasionam como
                características, cinco fatores: imersiva, intensiva, interativa,
                ilustrativa e informativa.
              </p>
            </div>
          </div>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux4}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-sm text-white">
                Soldado norte-americano em treinamento simulado de salto de
                paraquedas — Foto: Reprodução / Wikipédia.
              </p>
            </div>
            <p className="text-2xl text-white">
              Os seus componentes são o usuário que faz parte de um mundo
              virtual gerado no computador, utilizando-se das vias sensoriais de
              percepção e controle, esses ambiente virtual criado serve para
              simular um ambiente real ou imaginário.
            </p>
          </div>
        </div>
      </div>
      {/* Fim segundo slide */}

      {/* Inicio terceiro slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Classificação da Realidade Virtual (Casas et al., 1996)
          </h1>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux6}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-white text-sm">
                Jogos e aplicações oferecem experiências diferenciadas em
                Realidade Virtual — Foto: Viviane Weneck/TechTudo
              </p>
            </div>
            <ul className="text-xl text-white list-disc ml-10 flex flex-col gap-5 text-start">
              <li>
                Sistemas de imersão: aqueles que submergem ou introduzem o
                explorador de maneira estreita com o mundo virtual, mediante a
                utilização de sistemas visuais do tipo HMD.
              </li>
              <li>
                Realidade virtual em Segunda pessoa (unencumbered systems):
                envolve respostas em tempo real. O explorador vê a si mesmo
                dentro de cena, pois é colocado em frente a um monitor no qual é
                projetada sua imagem somada a outra imagem utilizada como fundo
                ou ambiente
              </li>
              <li>
                Sistema de Telepresença: a imersão é percebida através de sons e
                respostas aos movimentos realizados no mundo real.
              </li>
              <li>
                Sistema Desktop: englobam as aplicações que mostram uma imagem
                2D ou 3D na tela plana de um monitor de computador.
              </li>
            </ul>
          </div>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux5}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-sm text-white">
                Meta Quest 2, dispositivo RV mais popular de todos os tempos.
              </p>
            </div>
            <p className="text-xl text-white">
              Para que essas ideias aconteçam com maior performance, é
              necessária a utilização de alguns dispositivos de interface como:
              mouses, joysticks 2D 3D, luvas, monitor, shutter glasses,
              capacetes, cave e projetor de retina..
            </p>
          </div>
        </div>
      </div>
      {/* Fim terceiro slide */}

      {/* Inicio quarto slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-full flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Realidade Virtual na Educação
          </h1>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux7}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-white text-sm">Foto: https://forbes.com.br</p>
            </div>
            <div className="flex flex-col gap-3 text-2xl text-white">
              <p>
                A Educação pode ser vista como um processo de descoberta,
                exploração e de observação, além de eterna construção do
                conhecimento. Com a Realidade Virtual presente na educação
                poderemos descobrir, explorar e construir conhecimento
                (aprender) sobre lugares que jamais pensaríamos visitar.
              </p>
              <p>
                A Realidade Virtual em seu conjunto reúne especificidades e
                atributos que a tornam a ferramenta ideal para as múltiplas
                situações e contextos de pesquisa e aprendizagem. Cada um tem o
                seu estilo de aprendizagem, uns visuais, outros verbais, uns
                gostam de explorar e outros preferem deduzir. Além disso,
                permite também a criação de ambientes onde a aprendizagem se
                realiza por etapas, sendo as barreiras entre as etapas
                facilmente colocadas ou removidas.
              </p>
            </div>
          </div>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux8}
                alt="Imagem do primeiro oculos"
                className="h-48 w-full"
              />
              <p className="text-sm text-white">
                Dentro dos óculos de papel, há um celular com o programa de
                realidade virtual. — Foto:
                https://epoca.globo.com/ideias/noticia/2016/01/realidade-virtual-na-sala-de-aula.html
              </p>
            </div>
            <div className="flex flex-col gap-3 text-2xl text-white">
              <p>
                A Realidade Virtual não pode ser tratada apenas como &quot;mais
                uma ferramenta&quot; para melhorar a aprendizagem e sim, como um
                poderoso instrumento de aprendizagem cujos métodos tradicionais
                estão falhando.
              </p>
              <p>
                A introdução da Realidade Virtual na educação demonstra um novo
                paradigma que relata uma educação de forma dinâmica, criativa,
                colocando o aluno no centro dos processos de aprendizagem e
                buscando uma formação de um ser crítico, independente e
                construtor de seu conhecimento. Mas, infelizmente, a utilização
                da Realidade Virtual nas escolas está longe de ser um sistema
                barato.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fim quarto slide */}

      {/* Inicio quinto slide */}
      <div className="w-full h-full p-10 flex">
        <div className="w-full h-fit flex flex-col gap-10">
          <h1 className="font-ArchivoBlack text-4xl text-white text-center">
            Realidade Virtual na Educação
          </h1>
          <div className="w-full h-fit flex gap-5 max-md:flex-col max-md:items-center">
            <div className="h-full max-md:h-fit w-[40rem] max-md:w-fit">
              <Image
                src={aux9}
                alt="Imagem do primeiro oculos"
                className="h-48 w-96"
              />
              <p className="w-96 text-white text-sm text-wrap">
                Aluna da Bond University, Austrália. Foto:
                https://desafiosdaeducacao.com.br/realidade-aumentada-e-virtual-educacao/
              </p>
            </div>
            <div className="flex flex-col gap-3 text-2xl text-white">
              <div className="flex flex-col gap-3 text-2xl text-white">
                <h2 className="text-center text-3xl font-bold mb-6">
                  Motivos para usar RV na educação
                </h2>
                <ul className="text-xl text-white list-disc ml-10 flex flex-col gap-5 text-start">
                  <li>Maior motivação dos estudantes (usuários);</li>
                  <li>
                    Poder de ilustração da realidade virtual para alguns
                    processos e objetos é muito maior do que outras mídias;
                  </li>
                  <li>Permite uma análise de muito perto ou muito longe;</li>
                  <li>
                    Permite que as pessoas com deficiência realizem tarefas que
                    de outra forma não são possíveis;
                  </li>
                  <li>Dá oportunidades para experiências;</li>
                  <li>
                    Permite que o aprendiz desenvolva o trabalho no seu próprio
                    ritmo;
                  </li>
                  <li>
                    Não restringe o prosseguimento de experiências ao período da
                    aula regular;
                  </li>
                  <li>
                    Permite que haja interação, e desta forma estimula a
                    participação ativa do estudante.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fim quinto slide */}

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
                  href="https://horusstudio.com.br/historia-dos-oculos-de-realidade-virtual-vr"
                  target="_blank"
                >
                  https://horusstudio.com.br/historia-dos-oculos-de-realidade-virtual-vr
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
