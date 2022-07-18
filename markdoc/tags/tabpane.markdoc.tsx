import { LegacyTabs } from '@cube-dev/ui-kit'
type PaneTypes = 'usage' | 'props' | 'design'

const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || ''

const TabPane = ({ type, children }: { type: PaneTypes; children: any }) => {
  const title = capitalize(type)
  return (
    <LegacyTabs.TabPane title={title} key={type} id={type}>
      {children}
    </LegacyTabs.TabPane>
  )
}

const tabpane = {
  render: TabPane,
  attributes: {
    type: 'usage' || 'props' || 'design',
  },
}
export default tabpane
