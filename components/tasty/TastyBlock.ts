import { Block, tasty } from '@cube-dev/ui-kit'

const TastySideNav = tasty(Block, {
  /** Change tag name */
  as: 'nav',
  /** Extend or rewrite styles */
  styles: {
    backgroundColor: '#primary.10',
    paddingLeft: '20px',
    overflowY: 'scroll',
  },
  /** Add more default properties/attributes */
})

const StickyBlock = tasty(Block, {
  styles: {
    position: 'sticky',
    top: '0',
  },
})
export { StickyBlock, TastySideNav }
