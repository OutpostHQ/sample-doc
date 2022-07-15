import React, { SetStateAction, useState } from 'react'
import { NavLinks } from './NavLinks'
import { Block, Flex, Link } from '@cube-dev/ui-kit'
import { MainLogo } from '../icons/MainLogo'
import Sponser from './Sponser'
import Search from './Search'
import VersionSelect from './versionSelector'
import ToggleSidebar from './ToggleSidebar'
import ToggleTheme from './ToggleTheme'

export function TopBar({
  sideNavOpen,
  setSideNavOpen,
}: {
  sideNavOpen: Boolean
  setSideNavOpen: React.Dispatch<SetStateAction<boolean>>
}) {
  return (
    <nav>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding={['0.6rem', , ' 0.25rem 0.1rem']}
      >
        <Flex alignItems="center" gap={['2vw ', '1vw', '0.5rem']}>
          <Link type="undefined" to="/" label="home" size={'small'}>
            <MainLogo />
          </Link>
          <VersionSelect />
        </Flex>
        <section>
          <Flex gap={['1rem', '0.5rem', 0]} alignItems="center">
            <Block width="25vw" height="42px" display={['initial', , 'none']}>
              <Search />
            </Block>
            <Block flex="0 0 auto">
              <ToggleTheme />
              <ToggleSidebar open={sideNavOpen} setOpen={setSideNavOpen} />
            </Block>
            <Block flex="0 0 auto" display={['initial', , 'none']}>
              <NavLinks />
            </Block>
            <Sponser />
          </Flex>
        </section>
      </Flex>
      <Block
        width="95vw"
        height="38px"
        display={['none', , sideNavOpen ? 'initial' : 'none']}
      >
        <Search />
      </Block>
    </nav>
  )
}
