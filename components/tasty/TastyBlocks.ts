import { Block, tasty } from '@cube-dev/ui-kit'
import styled from 'styled-components'
const NavBlock = tasty(Block, {
  as: 'nav',
})
const SecondaryBlock = tasty(Block, {
  styles: {
    backgroundColor: '#EFEBFF',
  },
})
const TastySideNavWrapper = tasty(NavBlock, {
  styles: {
    backgroundColor: '#EFEBFF',
    padding: '8px',
    overflowY: 'scroll',
    paddingTop: ['28px', '16px'],
    border: '1px solid #E5E5FC',
  },
})

const StickyBlock = tasty(Block, {
  styles: {
    position: 'sticky',
    top: '0',
  },
})

const SectionBlock = tasty(Block, {
  flow: 'column',
  styles: {
    marginBottom: '20px',
  },
})

const ActiveBlock = tasty(Block, {
  styles: {
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: '#primary.30',
    borderRadius: '5px',
  },
})
const BorderedBlock = tasty(Block, {
  styles: {
    border: '1px solid rgba(20, 20, 70, 0.1)',
    borderRadius: '8px',
    marginBottom: '10px',
  },
})

const ErrorBlock = tasty(Block, {
  styles: {
    background: '#danger',
  },
})
export {
  BorderedBlock,
  ErrorBlock,
  StickyBlock,
  TastySideNavWrapper,
  SectionBlock,
  NavBlock,
  ActiveBlock,
  SecondaryBlock,
}
