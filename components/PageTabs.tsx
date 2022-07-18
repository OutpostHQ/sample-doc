import { LegacyTabs } from '@cube-dev/ui-kit'
import { useState } from 'react'

const PageTabs = ({ children }) => {
  const [activeKey, setActiveKey] = useState('usage')
  console.log(children, 'sd')
  function onClick(id) {
    setActiveKey(id)
  }
  return (
    <LegacyTabs activeKey={activeKey} onTabClick={onClick}>
      {children}
    </LegacyTabs>
  )
}
export { PageTabs }
