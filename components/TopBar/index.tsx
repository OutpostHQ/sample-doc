import React from 'react'
import { NavLinks } from './NavLinks'
import { Flex, Link } from '@cube-dev/ui-kit'
import { MainLogo } from '../icons/MainLogo'
import Sponser from './Sponser'
import Search from './Search'
import VersionSelect from './versionSelector'

export function TopBar() {
  return (
    <nav>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap="2rem">
          <Link type="undefined" to="/" label="home">
            <MainLogo />
          </Link>
          <VersionSelect />
        </Flex>
        <section>
          <Flex gap="1rem" alignItems="center">
            <Search />
            <NavLinks />
            <Sponser />
          </Flex>
        </section>
      </Flex>
    </nav>
  )
}