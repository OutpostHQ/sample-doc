import { Card, tasty } from '@cube-dev/ui-kit'

const TastySideNav = tasty(Card, {
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

const StickyCard = tasty(Card, {
  styles: {
    position: 'sticky',
    top: '0',
  },
})
export { StickyCard, TastySideNav }
