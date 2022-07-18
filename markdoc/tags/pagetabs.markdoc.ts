import { PageTabs } from '../../components'

const pagetabs = {
  render: PageTabs,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    design: {
      required: true,
      type: String,
      description: 'Design Tab for the component',
    },
    usage: {
      required: true,
      type: String,
      description: 'Usage Tab for the component',
    },
    props: {
      required: true,
      type: String,
      description: 'Props Tab for the component',
    },
  },
}
export default pagetabs
