import { Block, tasty } from '@cube-dev/ui-kit'

const TastySideNav = tasty(Block, {
  /** Change tag name */
  as: 'nav',
  /** Extend or rewrite styles */
  styles: {
    backgroundColor: '#primary.10',
    padding: '8px',
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

const SectionBlock = tasty(Block, {
  flow: 'column',
  styles: {
    marginTop: '20px',
  },
})
export { StickyBlock, TastySideNav, SectionBlock }
