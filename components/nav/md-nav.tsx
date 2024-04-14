import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BookOpenText, GraduationCap, Home, Menu, Users } from 'lucide-react'
import { Sheet, SheetContent } from '../shadcn/sheet'
import { Button } from '../shadcn/button'

type IProps = {
  pathname: string
}

export function MDNav({ pathname }: IProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const nav = (path: string) => {
    setOpen(false)

    router.push(path)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="p-4 md:hidden">
        <Button variant="outline" onClick={() => setOpen(true)}>
          <Menu />
        </Button>

        <SheetContent className="w-72">
          <nav className="w-full mt-10 flex flex-col items-center gap-9">
            <Button
              variant="link"
              className={`flex gap-2 ${
                pathname === '/' ? 'text-green-700' : 'text-black'
              }`}
              onClick={() => nav('/')}
            >
              <Home />
              Início
            </Button>
            <Button
              variant="link"
              onClick={() => nav('/members')}
              className={`flex gap-2 ${
                pathname === '/members' ? 'text-green-700' : 'text-black'
              }`}
            >
              <Users />
              Membros
            </Button>
            <Link
              href="https://create.kahoot.it/share/selecoes-e-arranjos/f922772e-15cc-4fff-a8ff-f3bd15258bad"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex gap-2 ${
                pathname === '/test' ? 'text-green-700' : 'text-black'
              }`}
            >
              <GraduationCap />
              Prove seu conhecimento!
            </Link>
            <Button
              variant="link"
              onClick={() => nav('/')}
              className={`flex gap-2 ${
                pathname === '/bibliography' ? 'text-green-700' : 'text-black'
              }`}
            >
              <BookOpenText />
              Bibliografia
            </Button>
          </nav>
        </SheetContent>
      </div>
    </Sheet>
  )
}
