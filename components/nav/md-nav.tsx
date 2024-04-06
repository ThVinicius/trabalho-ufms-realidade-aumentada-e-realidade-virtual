import { useState } from 'react'
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
            <Button
              variant="link"
              onClick={() => nav('/')}
              className={`flex gap-2 ${
                pathname === '/test' ? 'text-green-700' : 'text-black'
              }`}
            >
              <GraduationCap />
              Prove seu conhecimento!
            </Button>
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
