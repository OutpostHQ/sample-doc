import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import {
  BottomBorderedHeadline,
  HThreeText,
  HTwoText,
  NavBlock,
  SideMenuText,
} from './tasty'
import { Block, Space, Text } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
import ToggleBlock from './ToggleBlock'
import { BorderBottomOutlined } from '@ant-design/icons'

export function TableOfContents({ toc }) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  )

  if (items.length < 1) {
    return null
  }
  const router = useRouter()
  const [hash, setHash] = useState('')
  useEffect(() => {
    setHash(router.asPath.split('#')[1] || '')
  }, [router])
  return (
    <NavBlock padding={'50px 16px 0'}>
      <Block padding="10px 0">
        <BottomBorderedHeadline>Contents</BottomBorderedHeadline>
      </Block>
      <Space flow="column">
        {items.map((item) => {
          const href = `#${item.id}`
          return (
            <ToggleBlock
              key={item.title}
              active={hash === item.id}
              padding={`3px auto 3px calc(15 * ${item.level - 1}px)`}
            >
              <NextLink href={href} passHref>
                <SideMenuText weight={item.level === 2 ? 500 : 400}>
                  {item.title}
                </SideMenuText>
              </NextLink>
            </ToggleBlock>
          )
        })}
      </Space>
    </NavBlock>
  )
}
