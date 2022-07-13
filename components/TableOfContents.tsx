import React from 'react'
import Link from 'next/link'

export function TableOfContents({ toc }) {
  console.log(toc)
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  )

  if (items.length <= 1) {
    return null
  }

  return (
    <nav className="toc">
      <ul className="flex column">
        {items.map((item) => {
          const href = `#${item.id}`
          const active =
            typeof window !== 'undefined' && window.location.hash === href
          return (
            <li
              key={item.title}
              className={[
                active ? 'active' : undefined,
                item.level === 3 ? 'padded' : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Link href={href} passHref>
                <a>{item.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
