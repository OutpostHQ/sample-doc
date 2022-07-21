import { Block, Button, Flex, Text } from '@cube-dev/ui-kit'
import { MultipleUserAvatar, SingleUserAvatar } from './icons/Avatar'

export function BlogCard({ blog, main }) {
  if (!main && blog.description.length > 80) {
    blog.description = blog.description.substring(0, 80) + '...'
  }
  return (
    <Flex
      gap="20px"
      flow={main ? 'row' : 'column'}
      width={main ? '100%' : '340px'}
      height={main ? '340px' : '450px'}
      padding="20px"
      flexShrink="0"
    >
      <Block
        overflow="hidden"
        radius="10px"
        flexShrink="0"
        height={main ? '300px' : '180px'}
      >
        <img
          src={'/images/' + blog.image}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            height: '100%',
            width: '100%',
          }}
        />
      </Block>
      <Flex flow="column" height="300px" justifyContent="space-between">
        <Button
          radius="100px"
          width="85px"
          flexGrow="0"
          padding="4px 6px"
          type="outline"
        >
          {blog.type}
        </Button>
        <Flex color="rgba(71, 70, 109, 1)" gap="16px">
          <Text>{blog.time_created}</Text>
          {/* <Block border width></Block> */}
          <Text>{blog.time_to_read}</Text>
        </Flex>
        <Text weight={600} style={{ lineHeight: '28px', fontSize: '20px' }}>
          {blog.title}
        </Text>
        <Text>{blog.description}</Text>
        <Flex gap="2x" alignItems="center">
          <Block
            width={blog.writers.length === 1 ? '40px' : '70px'}
            height="40px"
            fill="#black.08"
            radius="50%"
          >
            {blog.writers.length === 1 ? (
              <SingleUserAvatar />
            ) : (
              <MultipleUserAvatar />
            )}
          </Block>
          <Text>{blog.writers.join(', ')}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
