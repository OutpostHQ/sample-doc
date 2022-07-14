import React from 'react'
import { Block, Text } from '@cube-dev/ui-kit'
import DocsMap from '../../utils/DocsMap'
import NavigationSection from './NavigationSection'
import { TastySideNav } from '../tasty'

export function SideNav({ state }: { state: boolean }) {
  // const router = useRouter()
  const sections = Object.keys(DocsMap)
  return (
    <TastySideNav display={['initial', 'initial', state ? 'block' : 'none']}>
      {sections.map((section) => {
        return (
          <Block flow="column" padding="20px 0 10px 0px" key={section}>
            <Text weight={'bold'}>{section}</Text>
            <NavigationSection sectionItems={DocsMap[section]} />
          </Block>
        )
      })}
    </TastySideNav>
  )
}
