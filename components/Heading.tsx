import { Block } from '@cube-dev/ui-kit'
import { createElement } from 'react'
import { HOneText, HThreeText, HTwoText } from './tasty'

const HeadingWrapper = ({ level, children, ...BlockProps }) => {
  if (level === 1)
    return (
      <Block margin={'24px 0'} {...BlockProps}>
        <HOneText>{children}</HOneText>
      </Block>
    )
  else if (level === 2)
    return (
      <Block margin={'40px 0 25px'} {...BlockProps}>
        <HTwoText>{children}</HTwoText>
      </Block>
    )
  else
    return (
      <Block margin={'30px 0 20px 0'} {...BlockProps}>
        <HThreeText>{children}</HThreeText>
      </Block>
    )
}
const Heading = ({ id = '', level = 1, children, className }) => {
  return level > 3 ? (
    createElement(
      `h${level}`,
      {
        id,
        className: ['heading', className].filter(Boolean).join(' '),
      },
      children
    )
  ) : (
    <HeadingWrapper
      children={children}
      id={id}
      level={level}
      className={className}
    />
  )
}
export { Heading }
