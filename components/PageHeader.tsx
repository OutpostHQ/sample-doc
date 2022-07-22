import { Block, Flex, Link, Space, Text } from '@cube-dev/ui-kit'
import { GithubIcon } from './icons/GithubIcon'
import CompDetails from '../utils/ComponentDetails'
import { useRouter } from 'next/router'
import NPMIcon from './icons/NpmIcon'
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
      <Link
        to={`${pathChunk}/${pagetab}`}
        color={{ ':hover': isCurrentPage ? '' : '#primary' }}
        border={isCurrentPage ? '3bw bottom #primary' : ''}
        textTransform="capitalize"
        fontWeight={isCurrentPage ? 'bold' : 'normal'}
        outline="0"
        padding="16px"
      >
        {pagetab}
      </Link>
    )
  }

  return (
    <Flex flow="column">
      <Block padding={'24px 0'}>
        <Text preset="h1">{title}</Text>
      </Block>
      <Text preset="p1">{description}</Text>
      <Space flow="row" gap={'16px'} padding={'20px 0 32px'}>
        <Link
          to={'!' + source}
          type="outline"
          icon={<GithubIcon />}
          radius="8px"
        >
          Source
        </Link>{' '}
        <Link
          to={`!https://www.npmjs.com/package/${pkg}`}
          type="outline"
          icon={<NPMIcon />}
          radius="8px"
        >
          {pkg}
        </Link>
      </Space>
      <Flex border="bottom">
        {ToggledLink('usage')}
        {ToggledLink('props')}
        {ToggledLink('design')}
      </Flex>
    </Flex>
  )
}

export { PageHeader }
