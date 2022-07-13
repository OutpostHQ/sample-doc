import React from 'react'
import Link from 'next/link'

export function TopNav({ children }) {
  return (
    <nav>
      <Link href="/" className="flex">
        Home
      </Link>
      <section>{children}</section>
    </nav>
  )
}
