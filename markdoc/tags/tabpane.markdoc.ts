import { LegacyTabs } from '@cube-dev/ui-kit'

const tabpane = {
  render: LegacyTabs.TabPane,
  attributes: {
    title: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
}
export default tabpane
