import { Button } from '@cube-dev/ui-kit'
import { useContext } from 'react'
import ToggleBlock from '../ToggleBlock'
import { PathContext, NavStateContext } from './NavContexts'
export default function NavigationLink({
  item,
}: {
  item: { name: string; pathname: string }
}) {
  const path = useContext(PathContext)
  const closeNav = useContext(NavStateContext)
  const active = path.endsWith(item.pathname)
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
