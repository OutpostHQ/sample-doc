import { Button } from '@cube-dev/ui-kit'

export default {
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
    primary: {
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
