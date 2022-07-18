import { Button, tasty } from '@cube-dev/ui-kit'

const BorderedClearButton = tasty(Button, {
  type: 'clear',
  styles: {
    border: '1px solid #primary.20',
    borderRadius: '8px',
  },
})

export { BorderedClearButton }
