import linkedinIcon from '../../app/assets/linkedin.png'
import githubIcon from '../../app/assets/github.png'
import { Anchor } from './anchor'

type IProps = {
  id: string
  name: string
  linkedin: string
  github?: string
  instagram?: string
}

export function MemberCard({ name, linkedin, github, instagram, id }: IProps) {
  return (
    <div
      className={`max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white fadeInRight fadeInDelay${id}`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 py-4 flex items-center gap-4 flex-wrap">
        <Anchor link={linkedin} icon={linkedinIcon}>
          Linkedin
        </Anchor>
        {github && (
          <Anchor link={github} icon={githubIcon}>
            GitHub
          </Anchor>
        )}
        {instagram && (
          <Anchor link={instagram} icon={linkedinIcon}>
            Instagram
          </Anchor>
        )}
      </div>
    </div>
  )
}
