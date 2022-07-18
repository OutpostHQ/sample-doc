import { LegacyTabs } from '@cube-dev/ui-kit'
import { useState } from 'react'

const PageTabs = ({
  design = 'Hello',
  props = 'Hello',
  usage = 'Hello',
  children,
}) => {
  const [activeKey, setActiveKey] = useState('usage')
  console.log(children, 'sd')
  function onClick(id) {
    setActiveKey(id)
  }
  return (
    <LegacyTabs activeKey={activeKey} onTabClick={onClick}>
      <LegacyTabs.TabPane title={`Usage`} id={'usage'} key={'usage'}>
        {usage}
      </LegacyTabs.TabPane>
      <LegacyTabs.TabPane title={`Design`} id={'design'} key={'design'}>
        {design}
      </LegacyTabs.TabPane>
      <LegacyTabs.TabPane title={`Props`} id={'props'} key={'props'}>
        {props}
      </LegacyTabs.TabPane>
    </LegacyTabs>
  )
}
export { PageTabs }
