import { EditFilled, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Flex, Space, Text, Link } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { DocsArray } from '../../utils/DocsArray'
export const PageFooter = ({ githublink }) => {
  const router = useRouter()
  const currentPath = router.pathname
  let currentIndex = undefined
  for (let i = 0; i < DocsArray.length; i++) {
    if (currentPath.endsWith(DocsArray[i].pathname)) {
      currentIndex = i
      break
    }
  }
  return (
    <Flex
      padding="15px 20px"
      flow="column"
      height="100%"
      justifyContent="space-around"
      gap="20px"
      border="top"
    >
      <Space flow="row">
        <EditFilled />
        <Link to={'!' + githublink}>Edit this page on GitHub</Link>
      </Space>
      <Flex flow="row" justifyContent="space-between">
        <Flex flow="column" alignItems="flex-start" gap={'10px'}>
          {currentIndex !== undefined && currentIndex - 1 >= 0 ? (
            <>
              <Text>Previous</Text>
              <Space flow="row">
                <LeftOutlined />
                <NextLink
                  href={`/docs/${DocsArray[currentIndex - 1].pathname}`}
                >
                  <Text weight={'bold'}>
                    {DocsArray[currentIndex - 1].name}
                  </Text>
                </NextLink>
              </Space>
            </>
          ) : null}
        </Flex>
        <Flex flow="column" alignItems="flex-end" gap={'10px'}>
          {currentIndex !== undefined && currentIndex + 1 < DocsArray.length ? (
            <>
              <Text>Next</Text>
              <Space flow="row">
                <NextLink
                  href={`/docs/${DocsArray[currentIndex + 1].pathname}`}
                >
                  <Text weight={'bold'}>
                    {DocsArray[currentIndex + 1].name}
                  </Text>
                </NextLink>
                <RightOutlined />
              </Space>
            </>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  )
}
