import Image, { StaticImageData } from 'next/image'

type IProps = {
  children: string
  link: string
  icon: StaticImageData
}

export function Anchor({ icon, link, children }: IProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-2 items-center bg-slate-200 hover:bg-slate-400 p-4 rounded-3xl"
    >
      {children}
      <Image src={icon} alt="Linkedin icon" height={25} width={25} />
    </a>
  )
}
