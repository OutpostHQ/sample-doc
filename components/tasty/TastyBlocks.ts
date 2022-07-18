import { Block, tasty } from '@cube-dev/ui-kit'
import styled from 'styled-components'
const NavBlock = tasty(Block, {
  as: 'nav',
})
const TastySideNavWrapper = tasty(NavBlock, {
  styles: {
    backgroundColor: '#primary.10',
    padding: '8px',
    overflowY: 'scroll',
    paddingTop: ['28px', '16px'],
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
const HoveredBlock = styled(Block)`
  &:hover {
    background-color: #d7ceff;
    transform: scale(1.02);
  }
  border-radius: 10px;
`
const ActiveBlock = tasty(HoveredBlock, {
  styles: {
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: '#d7ceff',
  },
})
export {
  StickyBlock,
  TastySideNavWrapper,
  SectionBlock,
  NavBlock,
  ActiveBlock,
  HoveredBlock,
}
