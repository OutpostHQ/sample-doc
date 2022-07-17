import { Block, tasty } from '@cube-dev/ui-kit'
const NavBlock = tasty(Block, {
  as: 'nav',
})
const TastySideNav = tasty(NavBlock, {
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
    marginLeft: ['0', '20px'],
  },
})
const ActiveBlock = tasty(Block, {
  styles: {
    scale: 1.02,
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: '#primary.20',
    borderRadius: '10px',
  },
})
export { StickyBlock, TastySideNav, SectionBlock, NavBlock, ActiveBlock }
