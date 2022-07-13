import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
