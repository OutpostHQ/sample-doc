import { Button } from '@cube-dev/ui-kit'

const button = {
  render: Button,
  attributes: {
    isLoading: {
      type: Boolean,
    },
    icon: {
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
    size: {
      type: String,
    },
  },
}

export default button
