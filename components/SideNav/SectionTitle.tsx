import { Block } from '@cube-dev/ui-kit'
import { SectionTitleText } from '../tasty'

const SectionTitle = ({ children }) => {
  return (
    <Block padding="8px auto 8px 16px">
      <SectionTitleText>{children}</SectionTitleText>
    </Block>
  )
}
export default SectionTitle
