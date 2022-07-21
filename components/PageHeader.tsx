import { Block, Flex, Space, Text } from '@cube-dev/ui-kit'
import {
  BorderedClearLink,
  BorderedSpace,
  HOneText,
  OnHoverText,
  PageDescriptionText,
} from './tasty'
import { GithubIcon } from './icons/GithubIcon'
import CompDetails from '../utils/ComponentDetails'
import Link from 'next/link'
import { useRouter } from 'next/router'
const PageHeader = ({ id, scope }) => {
  const fullpath = useRouter().pathname
  const pathChunk = fullpath
    .replace('/usage', '')
    .replace('/design', '')
    .replace('/props', '')
  const { title, description, source, pkg } = CompDetails.get(id)

  const ToggledLink = (pagetab) => {
    const isCurrentPage = fullpath.endsWith(pagetab)
    return (
      <Block
        padding="5px 10px"
        color="#2B2962"
        styles={{
          borderBottom: `${
            isCurrentPage ? '4px solid #primary.900' : 'initial'
          }`,
          textTransform: 'capitalize',
          fontWeight: `${isCurrentPage ? 700 : 500}`,
        }}
      >
        <Link href={`${pathChunk}/${pagetab}`}>
          <OnHoverText>{pagetab}</OnHoverText>
        </Link>
      </Block>
    )
  }

  return (
    <Flex flow="column">
      <Block padding={'24px 0'}>
        <HOneText>{title}</HOneText>
      </Block>
      <PageDescriptionText>{description}</PageDescriptionText>
      <Space flow="row" gap={'16px'} padding={'20px 0 32px'}>
        <BorderedClearLink to={'!' + source} type="clear" icon={<GithubIcon />}>
          Source
        </BorderedClearLink>{' '}
        <BorderedClearLink
          to={`!https://www.npmjs.com/package/${pkg}`}
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
      <BorderedSpace>
        {ToggledLink('usage')}
        {ToggledLink('props')}
        {ToggledLink('design')}
      </BorderedSpace>
    </Flex>
  )
}

export { PageHeader }
