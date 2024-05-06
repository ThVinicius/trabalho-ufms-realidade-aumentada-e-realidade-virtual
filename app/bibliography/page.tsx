import Link from 'next/link'

export default function Bibliography() {
  return (
    <main className="w-full h-full p-10 max-md:p-2">
      <div className="w-1/3 max-md:w-full h-full rounded shadow-2xl bg-blue-950 p-2 pb-11 overflow-y-auto fadeInRight">
        <h1 className="font-ArchivoBlack text-3xl text-white text-center mb-3">
          Fontes da Pesquisa
        </h1>

        <div className="w-full h-full flex flex-col gap-7 text-center text-white text-md text-wrap">
          <Link
            href="https://www.iberdrola.com/inovacao/o-que-e-realidade-aumentada#:~:text=A%20Realidade%20Aumentada%20(RA)%20%C3%A9,bilh%C3%B5es%20de%20d%C3%B3lares%20no%20mundo"
            target="_blank"
          >
            https://www.iberdrola.com/inovacao/o-que-e-realidade-aumentada
          </Link>

          <Link
            href="https://r2u.io/confira-algumas-empresas-de-realidade-virtual-e-realidade-aumentada-no-brasil/"
            target="_blank"
          >
            https://https://r2u.io/confira-algumas-empresas-de-realidade-virtual-e-realidade-aumentada-no-brasil/
          </Link>

          <Link
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQirHDzlyIyKC_tyaVY6LrQRBDm_tV_mc0GUq1VgguI3PKGPhFogsakJN&s=10"
            target="_blank"
          >
            https://https://encrypted-tbn0.gstatic.com/
          </Link>

          <Link
            href="https://sebrae.com.br/sites/PortalSebrae/artigos/realidadeaumentada-torna-mais-eficiente-a-industria-40,4d7bcf1a03fe5810VgnVCM1000001b00320aRCRD"
            target="_blank"
          >
            https://sebrae.com.br/sites/PortalSebrae/artigos/realidadeaumentada-torna-mais-eficiente-a-industria-40
          </Link>

          <Link
            href="https://www.redalyc.org/articulo.oa?id=50010104"
            target="_blank"
          >
            Braga Mariluci . Realidade Virtual e Educação. Revista de Biologia e
            Ciências da Terra [em linea]. 2001, 1(1). ISSN: 1519-5228.
          </Link>
        </div>
      </div>
    </main>
  )
}
