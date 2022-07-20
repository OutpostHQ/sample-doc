import { Button } from '@cube-dev/ui-kit'
import { useContext } from 'react'
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
    <ToggleBlock active={active} paddingInline="46px 0">
      <Button
        type="link"
        to={`/docs/${item.pathname}`}
        onPress={closeNav}
        padding="0.4rem 0"
        outline="0"
        color={{
          hovered: !active ? '#primary' : '',
        }}
      >
        {item.name}
      </Button>
    </ToggleBlock>
  )
}
// rewrite with AccordianItem
