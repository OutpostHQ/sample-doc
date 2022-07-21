import { tasty, Text } from '@cube-dev/ui-kit'
import styled from 'styled-components'

const HeadingText = tasty(Text, {
  weight: 600,
  styles: {
    display: 'block',
  },
})
const HOneText = tasty(HeadingText, {
  styles: {
    fontSize: ['42px', '31px'],
  },
})
const HTwoText = tasty(HeadingText, {
  styles: {
    fontSize: ['28px', '24px'],
  },
})
const HThreeText = tasty(HeadingText, {
  styles: {
    fontSize: ['22px', '20px'],
  },
})

const OnHoverText = styled(Text)`
  &:hover {
    color: rgba(122, 119, 255);
  }
`
const SideMenuText = tasty(OnHoverText, {
  weight: 500,
  styles: {
    fontSize: ['16px', '16px', '18px'],
  },
})
const SectionTitleText = tasty(Text, {
  weight: 800,
  styles: {
    letterSpacing: '0.1rem',
    fontSize: ['16px', '16px', '18px'],
  },
})
const PageDescriptionText = tasty(Text, {
  weight: 400,
  styles: {
    fontSize: ['20px', , '21px'],
    lineHeight: '1.5rem',
    paddingRight: ['100px', '60px', '0'],
  },
})

const BottomBorderedHeadline = tasty(Text, {
  weight: 700,
  styles: {
    fontSize: '21px',
    borderBottom: '1px solid rgba(20, 20, 70, 0.1)',
  },
})
export {
  BottomBorderedHeadline,
  HeadingText,
  HOneText,
  HTwoText,
  HThreeText,
  OnHoverText,
  SectionTitleText,
  SideMenuText,
  PageDescriptionText,
}
