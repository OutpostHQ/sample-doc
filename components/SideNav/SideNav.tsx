import React from 'react'
import { Block, Text } from '@cube-dev/ui-kit'
import DocsMap from '../../utils/DocsMap'
import NavigationSection from './NavigationSection'
import { SectionBlock, TastySideNav } from '../tasty'

export function SideNav({ state }: { state: boolean }) {
  // const router = useRouter()
  const sections = Object.keys(DocsMap)
  return (
    <TastySideNav display={['initial', 'initial', state ? 'block' : 'none']}>
      <Block>
        {sections.map((section) => {
          return (
            <SectionBlock key={section}>
              <Block padding="8px auto 8px 16px">
                <Text weight={600} style={{ fontFamily: 'SFMono' }}>
                  {section}
                </Text>
              </Block>
              <NavigationSection sectionItems={DocsMap[section]} />
            </SectionBlock>
          )
        })}
      </Block>
    </TastySideNav>
  )
}
