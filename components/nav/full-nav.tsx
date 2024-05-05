import Link from 'next/link'
import { BookOpenText, GraduationCap, Home, Users } from 'lucide-react'

type IProps = {
  pathname: string
}

export function FullNav({ pathname }: IProps) {
  return (
    <nav className="hidden md:flex w-screen h-full p-4 justify-around items-center border-b-2 border-b-white">
      <Link
        href="/"
        className={`flex gap-2 ${
          pathname === '/' ? 'text-green-700' : 'text-white'
        }`}
      >
        <Home />
        Início
      </Link>
      <Link
        href="/members"
        className={`flex gap-2 ${
          pathname === '/members' ? 'text-green-700' : 'text-white'
        }`}
      >
        <Users />
        Membros
      </Link>
      <Link
        href="https://create.kahoot.it/details/b725b87f-2497-4b1b-a509-f914be636e2e"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex gap-2 ${
          pathname === '/test' ? 'text-green-700' : 'text-white'
        }`}
      >
        <GraduationCap />
        Prove seu conhecimento!
      </Link>
      <Link
        href="/bibliography"
        className={`flex gap-2 ${
          pathname === '/bibliography' ? 'text-green-700' : 'text-white'
        }`}
      >
        <BookOpenText />
        Bibliografia
      </Link>
    </nav>
  )
}
