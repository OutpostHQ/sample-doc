import { Button } from '@cube-dev/ui-kit'
import Link from 'next/link'
import { useContext } from 'react'
import { SideMenuText } from '../tasty'
import ToggleBlock from '../ToggleBlock'
import { PathContext, NavStateContext } from './NavContexts'

const matchPath = (pathChunk: string = '', currentPath: string = '') =>
  currentPath.endsWith(pathChunk) ||
  currentPath.endsWith(pathChunk + '/usage') ||
  currentPath.endsWith(pathChunk + '/props') ||
  currentPath.endsWith(pathChunk + '/design')

export default function NavigationLink({
  item,
}: {
  item: { name: string; pathname: string }
}) {
  const path = useContext(PathContext)
  const rawPath = item.pathname
  const closeNav = useContext(NavStateContext)
  const pathChunk = rawPath.replace('/usage', '')
  const active = matchPath(pathChunk, path)

  return (
    <ToggleBlock active={active} paddingInline="46px 0" padding="0.3rem 0">
      <Link href={`/docs/${item.pathname}`}>
        <SideMenuText onClick={closeNav}>{item.name}</SideMenuText>
      </Link>
    </ToggleBlock>
  )
}
// rewrite with AccordianItem
