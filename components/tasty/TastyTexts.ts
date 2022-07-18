import { tasty, Text } from '@cube-dev/ui-kit'

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
const SideMenuText = tasty(Text, {
  weight: 400,
  as: 'a',
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
  },
})
export {
  HeadingText,
  HOneText,
  HTwoText,
  HThreeText,
  SectionTitleText,
  SideMenuText,
  PageDescriptionText,
}
