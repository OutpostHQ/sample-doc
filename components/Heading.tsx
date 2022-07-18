import { Block } from '@cube-dev/ui-kit'
import { createElement } from 'react'
import { HOneText, HThreeText, HTwoText } from './tasty'

const HeadingWrapper = ({ level, children, ...BlockProps }) => {
  if (level === 1)
    return (
      <Block padding={'24px 0'} {...BlockProps}>
        <HOneText>{children}</HOneText>
      </Block>
    )
  else if (level === 2)
    return (
      <Block padding={'20px 0 0'} {...BlockProps}>
        <HTwoText>{children}</HTwoText>
      </Block>
    )
  else
    return (
      <Block padding={'20px 0 0'} {...BlockProps}>
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
