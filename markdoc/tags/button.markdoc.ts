import { Button } from '@cube-dev/ui-kit'

const button = {
  render: Button,
  attributes: {
    isLoading: {
      type: Boolean,
    },
    icons: {
      type: String,
    },
    isSelected: {
      type: Boolean,
    },
    type: {
      type: String,
    },
    theme: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
    },
  },
}

export default button
