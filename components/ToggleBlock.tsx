import { Block } from '@cube-dev/ui-kit'
import { ActiveBlock, HoveredBlock } from './tasty'

const ToggleBlock = ({ children, active, ...BlockProps }) => {
  return active ? (
    <ActiveBlock {...BlockProps}>{children}</ActiveBlock>
  ) : (
    <HoveredBlock {...BlockProps}>{children}</HoveredBlock>
  )
}
export default ToggleBlock
