import { Badge, Block, Button, Flex, Tag, Text } from '@cube-dev/ui-kit'
import { UserAvatar } from './BlogAvatar'

export function BlogCard({ blog, main }) {
  let blogDecriptionStriped = ''
  if (!main && blog.description.length > 80) {
    blogDecriptionStriped = blog.description.substring(0, 80) + '...'
  }
  return (
    <Flex
      gap="20px"
      flow={main ? 'row' : 'column'}
      width={main ? '100%' : ['380px', '320px', '300px']}
      padding="20px"
      flexShrink="0"
    >
      <Block
        overflow="hidden"
        radius="10px"
        flexShrink="0"
        height={main ? '300px' : '180px'}
        width={main ? '600px' : '(360px-40px)'}
      >
        <img
          src={'/images/' + blog.image}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </Block>
      <Flex flow="column" gap="20px" justifyContent="space-between">
        <Flex
          flow={main ? 'column' : 'row'}
          justifyContent={main ? '' : 'space-between'}
          gap={main ? '25px' : '0'}
        >
          <Tag radius="20px">{blog.type}</Tag>
          <Flex color="rgba(71, 70, 109, 1)" gap="16px" alignItems="center">
            <Text>{blog.time_created}</Text>
            <Block fill="#dark-01.3" width="5px" height="5px" radius="50px">
              {' '}
            </Block>
            <Text>{blog.time_to_read + ' read'}</Text>
          </Flex>
        </Flex>
        <Text weight={600} style={{ lineHeight: '28px', fontSize: '20px' }}>
          {blog.title}
        </Text>
        <Text>{main ? blog.description : blogDecriptionStriped}</Text>
        <Flex gap alignItems="center">
          <UserAvatar Writers={blog.writers} />
          <Text>{blog.writers.join(', ')}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
