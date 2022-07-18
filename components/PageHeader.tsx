import { Block, Flex, Space } from '@cube-dev/ui-kit'
import { BorderedClearButton, HOneText, PageDescriptionText } from './tasty'
import { Link } from '@cube-dev/ui-kit'
import { GithubIcon } from './icons/GithubIcon'
const PageHeader = ({ title, description, source, pkg }) => {
  return (
    <Flex flow="column">
      <Block padding={'24px 0'}>
        <HOneText>{title}</HOneText>
      </Block>
      <PageDescriptionText>{description}</PageDescriptionText>
      <Space flow="row" gap={'16px'} padding={'20px 0 32px'}>
        <Link to={source} as="a" target="_blank">
          <BorderedClearButton icon={<GithubIcon />}>
            Source
          </BorderedClearButton>
        </Link>{' '}
        <Link
          to={`https://www.npmjs.com/package/${pkg}`}
          as="a"
          target="_blank"
        >
          <BorderedClearButton icon={<GithubIcon />}>{pkg}</BorderedClearButton>
        </Link>
      </Space>
    </Flex>
  )
}
export { PageHeader }
