import { Block } from '@cube-dev/ui-kit'
import { TopBar } from '../TopBar'

const genericLayout = ({ children }) => {
  return (
    <Block color={'#2B2962'} fill={'#F5F5F5'}>
      <TopBar setSideNavOpen={() => {}} sideNavOpen={false} />
      {children}
    </Block>
  )
}
export default genericLayout
