'use client'

import { usePathname } from 'next/navigation'
import { FullNav } from './full-nav'
import { MDNav } from './md-nav'

export function NavHeader() {
  const pathname = usePathname()

  return (
    <header className='h-20'>
      <FullNav pathname={pathname} />
      <MDNav pathname={pathname} />
    </header>
  )
}
