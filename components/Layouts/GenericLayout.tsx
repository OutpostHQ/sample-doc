import { Block } from '@cube-dev/ui-kit'
import { TopBar } from '../TopBar'

const genericLayout = ({ children }) => {
  const versionSelector = false
  return (
    <Block color={'#2B2962'}>
      <TopBar
        setSideNavOpen={() => {}}
        sideNavOpen={false}
        versionSelector={versionSelector}
      />
      {children}
    </Block>
  )
}
export default genericLayout
