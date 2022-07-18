import { Button, Flex, Link } from '@cube-dev/ui-kit'
import { useContext } from 'react'
import { PathContext } from './PathContext'
import ToggleBlock from '../ToggleBlock'
import { NavStateContext } from './NavStateContext'
export default function NavigationLink({
  item,
}: {
  item: { name: string; pathname: string }
}) {
  const path = useContext(PathContext)
  const closeNav = useContext(NavStateContext)
  return (
    <ToggleBlock active={path.endsWith(item.pathname)} paddingInline="46px 0">
      <Button
        type="link"
        to={`/docs/${item.pathname}`}
        onPress={closeNav}
        padding="0.4rem 0"
        outline="0"
        color={{
          hovered: '#primary',
        }}
      >
        {item.name}
      </Button>
    </ToggleBlock>
  )
}
// rewrite with AccordianItem
