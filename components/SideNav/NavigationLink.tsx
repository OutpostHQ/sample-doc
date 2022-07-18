import { Flex } from '@cube-dev/ui-kit'
import NextLink from 'next/link'
import { useContext } from 'react'
import { PathContext } from './PathContext'
import ToggleBlock from '../ToggleBlock'
import { SideMenuText } from '../tasty'
import { NavStateContext } from './NavStateContext'
export default function NavigationLink({
  item,
}: {
  item: { name: string; pathname: string }
}) {
  const path = useContext(PathContext)
  const closeNav = useContext(NavStateContext)
  return (
    <ToggleBlock active={path.endsWith(item.pathname)}>
      <NextLink href={`/docs/${item.pathname}`}>
        <Flex
          padding="3px 0 3px 46px"
          height="100%"
          width={'100%'}
          alignItems={'center'}
          justifyContent={'flex-start'}
        >
          <SideMenuText>
            <a onClick={closeNav}>{item.name}</a>
          </SideMenuText>
        </Flex>
      </NextLink>
    </ToggleBlock>
  )
}
// rewrite with AccordianItem
