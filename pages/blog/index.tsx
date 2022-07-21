import { Block, Button, Flex, Grid, Text } from '@cube-dev/ui-kit'
import { useEffect, useState } from 'react'
import { BlogCard, Subscribe } from '../../components'
import blogs from '../../utils/blogs.json'

const FILTER_TYPES = [
  'All',
  'Company',
  'Engineering',
  'Product',
  'Open Source',
  'Community',
  'Tutorials',
]
export default function BlogLandingPage() {
  const [filter, setFilter] = useState('All')

  return (
    <>
      <Flex
        flow="column"
        justifyContent="center"
        alignItems="center"
        height="350px+60px"
        gap="20px"
        border="top bottom"
      >
        <Text weight={600} style={{ lineHeight: '44px', fontSize: '42px' }}>
          Latest Updates
        </Text>
        <Text style={{ lineHeight: '28px', fontSize: '20px' }}>
          All the latest Jenga-UI news, straight from the team.
        </Text>
        <Subscribe />
      </Flex>
      <Flex padding="20px 50px 50px 50px" justifyContent="center">
        {FILTER_TYPES.map((filterType) => (
          <Button type="undefined" key={filterType}>
            {filterType}
          </Button>
        ))}
      </Flex>
      <Flex
        padding={['50px 70px', , '50px 10px']}
        flow="wrap"
        gap="20px"
        justifyContent="space-between"
      >
        {blogs &&
          blogs.map((blog, index) => {
            const main = index === 0
            return <BlogCard key={index} blog={blog} main={main} />
          })}
      </Flex>
    </>
  )
}
