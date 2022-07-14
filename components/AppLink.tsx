import React from 'react'
import { Link } from '@cube-dev/ui-kit'

export function AppLink(props: Props) {
  return <Link to={props.href}>{props.children}</Link>
}

interface Props {
  href: string
  children: any
}
