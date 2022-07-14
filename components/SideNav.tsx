import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Card } from '@cube-dev/ui-kit'

function NavigationLink() {
  return <></>
}
function NavigationSection() {
  return <></>
}

export function SideNav() {
  const router = useRouter()

  return (
    <Card
      styles={{
        backgroundColor: 'var(--secondary-bg)',
        borderColor: 'var(--border-color)',
        color: '--var(--primary-text-color)',
      }}
    >
      <nav>Hello</nav>
    </Card>
  )
}
