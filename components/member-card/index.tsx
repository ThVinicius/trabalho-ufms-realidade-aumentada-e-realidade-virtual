import linkedinIcon from '../../app/assets/linkedin.png'
import { Anchor } from './anchor'
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn/avatar'

type IProps = {
  id: string
  name: string
  linkedin?: string
  avatar?: string
  avatarFallback: string
  fallbackColor: string
}

export function MemberCard({
  name,
  linkedin,
  avatar,
  avatarFallback,
  fallbackColor,
  id
}: IProps) {
  return (
    <div
      className={`w-80 h-48 relative rounded-3xl shadow-lg m-4 bg-white fadeInRight fadeInDelay${id}`}
    >
      <Avatar className="w-20 h-20 absolute -top-9 left-[7.5rem]">
        <AvatarImage src={avatar} />
        <AvatarFallback className={`text-3xl ${fallbackColor}`}>
          {avatarFallback}
        </AvatarFallback>
      </Avatar>
      <div className="px-6 py-4 mt-10">
        <div className="font-bold text-xl text-center mb-2">{name}</div>
      </div>
      <div className="px-6 py-4 flex items-center justify-center gap-4 flex-wrap">
        {linkedin && (
          <Anchor link={linkedin} icon={linkedinIcon}>
            Linkedin
          </Anchor>
        )}
      </div>
    </div>
  )
}
