import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Link } from '@cube-dev/ui-kit'

const items = [
  {
    title: 'Get started',
    links: [{ href: '/docs', children: 'Overview' }],
  },
]

export function SideNav() {
  const router = useRouter()

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <NextLink {...link} passHref>
                    <a href={link.href}>{link.children}</a>
                  </NextLink>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
