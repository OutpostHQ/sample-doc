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
        <Text preset="h1">Latest Updates</Text>
        <Text preset="p1">
          All the latest Jenga-UI news, straight from the team.
        </Text>
        <Subscribe />
      </Flex>
      <Flex
        padding="20px 50px 50px 50px"
        justifyContent="center"
        style={{
          background:
            'linear-gradient(180deg, rgba(245,245,245,0) 0%, rgba(245,245,245,1) 100%)',
        }}
      >
        {FILTER_TYPES.map((filterType) => (
          <Button
            type="undefined"
            key={filterType}
            border={
              filterType === filter
                ? '3bw bottom #primary'
                : '3bw bottom #00000000'
            }
            radius="0"
            onPress={(e) => setFilter(e.target.textContent)}
          >
            {filterType}
          </Button>
        ))}
      </Flex>
      <Block style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <img src="/images/bg_gradient.png" />
      </Block>
      <Block fill="#F5F5F5">
        <Flex
          padding={['50px 70px', , '50px 10px']}
          flow="wrap"
          gap="20px"
          justifyContent="space-between"
        >
          {blogs &&
            blogs
              .filter((blog) => {
                if (filter === 'All') return true
                else {
                  return blog.type === filter
                }
              })
              .map((blog, index) => {
                const main = index === 0
                return <BlogCard key={index} blog={blog} main={main} />
              })}
        </Flex>
      </Block>
    </>
  )
}
