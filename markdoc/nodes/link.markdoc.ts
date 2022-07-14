import { AppLink } from '../../components'

export const link = {
  render: AppLink,
  attributes: {
    href: {
      description: 'The path or URL to navigate to.',
      type: String,
      errorLevel: 'critical',
      required: true,
    },
  },
}
