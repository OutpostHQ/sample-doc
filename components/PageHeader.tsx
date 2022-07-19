import { Block, Flex, Space } from '@cube-dev/ui-kit'
import { BorderedClearLink, HOneText, PageDescriptionText } from './tasty'
import { GithubIcon } from './icons/GithubIcon'
const PageHeader = ({ title, description, source, pkg }) => {
  return (
    <Flex flow="column">
      <Block padding={'24px 0'}>
        <HOneText>{title}</HOneText>
      </Block>
      <PageDescriptionText>{description}</PageDescriptionText>
      <Space flow="row" gap={'16px'} padding={'20px 0 32px'}>
        <BorderedClearLink
          to={source}
          target="_blank"
          type="clear"
          icon={<GithubIcon />}
        >
          Source
        </BorderedClearLink>{' '}
        <BorderedClearLink
          to={`https://www.npmjs.com/package/${pkg}`}
          target="_blank"
          type="clear"
          icon={<GithubIcon />}
          styles={{
            border: '1px solid #primary.20',
            borderRadius: '8px',
          }}
        >
          {pkg}
        </BorderedClearLink>
      </Space>
    </Flex>
  )
}
export { PageHeader }
