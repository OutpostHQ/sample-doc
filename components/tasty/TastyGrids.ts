import { Grid, tasty } from '@cube-dev/ui-kit'

const ScrollableYGrid = tasty(Grid, {
  styles: {
    overflowY: 'scroll',
  },
})
export {ScrollableYGrid};