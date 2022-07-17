import { Block } from '@cube-dev/ui-kit'
import { ActiveBlock } from './tasty'

const ToggleBlock = ({ children, active, ...BlockProps }) => {
  return active ? (
    <ActiveBlock {...BlockProps}>{children}</ActiveBlock>
  ) : (
    <Block {...BlockProps}>{children}</Block>
  )
}
export default ToggleBlock
