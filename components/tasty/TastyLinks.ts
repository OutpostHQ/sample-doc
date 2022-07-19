import { Link, tasty } from '@cube-dev/ui-kit'

const BorderedClearLink = tasty(Link, {
  type: 'clear',
  styles: {
    border: '1px solid #primary.20',
    borderRadius: '8px',
  },
})

export { BorderedClearLink }
