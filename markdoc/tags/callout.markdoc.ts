import { Callout } from '../../components'

const callout = {
  render: Callout,
  description: 'Display the enclosed content in a callout box',
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
      description: 'The title displayed at the top of the callout',
    },
  },
}
export default callout
