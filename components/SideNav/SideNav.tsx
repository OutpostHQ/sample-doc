import React from 'react'
import { Block, Text } from '@cube-dev/ui-kit'
import DocsMap from '../../utils/DocsMap'
import NavigationSection from './NavigationSection'
import { SectionBlock, TastySideNav } from '../tasty'
import { useRouter } from 'next/router'
import { PathContext } from './PathContext'
import SectionTitle from './SectionTitle'
export function SideNav({ state }: { state: boolean }) {
  const router = useRouter()
  const sections = Object.keys(DocsMap)
  return (
    <TastySideNav display={['initial', 'initial', state ? 'block' : 'none']}>
      <PathContext.Provider value={router.pathname}>
        <Block>
          {sections.map((section) => {
            return (
              <SectionBlock key={section}>
                <SectionTitle>{section}</SectionTitle>
                <NavigationSection sectionItems={DocsMap[section]} />
              </SectionBlock>
            )
          })}
        </Block>
      </PathContext.Provider>
    </TastySideNav>
  )
}
