import { EditFilled, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Flex, Space, Text, Link } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
export const PageFooter = ({ editLink }) => {
  //from /docs/cat/file/usage  to cat/file or /docs/file to file
  let pathChunk = useRouter()
    .pathname.replace('/docs/', '')
    .replace('/usage', '')
  const DocsArray = JSON.parse(process.env.DOCARRAY) || []
  let currentIndex = DocsArray.findIndex(
    (docItem) => docItem.pathname.replace('/usage', '') == pathChunk
  )
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
        <Link to={'!' + editLink}>Edit this page on GitHub</Link>
      </Space>
      <Flex flow="row" justifyContent="space-between">
        <Flex flow="column" alignItems="flex-start" gap={'10px'}>
          {currentIndex !== undefined && currentIndex - 1 >= 0 ? (
            <>
              <Text>Previous</Text>
              <Space flow="row">
                <LeftOutlined />
                <Link to={`/docs/${DocsArray[currentIndex - 1].pathname}`}>
                  <Text weight={'bold'}>
                    {DocsArray[currentIndex - 1].name}
                  </Text>
                </Link>
              </Space>
            </>
          ) : null}
        </Flex>
        <Flex flow="column" alignItems="flex-end" gap={'10px'}>
          {currentIndex !== undefined && currentIndex + 1 < DocsArray.length ? (
            <>
              <Text>Next</Text>
              <Space flow="row">
                <Link to={`/docs/${DocsArray[currentIndex + 1].pathname}`}>
                  <Text weight={'bold'}>
                    {DocsArray[currentIndex + 1].name}
                  </Text>
                </Link>
                <RightOutlined />
              </Space>
            </>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  )
}
