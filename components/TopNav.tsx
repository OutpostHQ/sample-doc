import React from 'react'
import { NavLinks } from './NavLinks'
import { Flex, Link } from '@cube-dev/ui-kit'
import { MainLogo } from './icons/MainLogo'
import Sponser from './Sponser'
import Search from './Search'

export function TopNav() {
  return (
    <nav>
      <Flex justifyContent="space-between" alignItems="center">
        <Link type="undefined" to="/" label="home">
          <MainLogo />
        </Link>
        <section>
          <Flex gap="10px" alignItems="center">
            <Search />
            <NavLinks />
            <Sponser />
          </Flex>
        </section>
      </Flex>
    </nav>
  )
}
