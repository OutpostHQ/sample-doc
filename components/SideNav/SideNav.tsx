import { Dispatch, SetStateAction } from 'react'
import { Block } from '@cube-dev/ui-kit'
import DocsMap from '../../utils/DocsMap'
import NavigationSection from './NavigationSection'
import { SectionBlock } from '../tasty'
import { useRouter } from 'next/router'
import { PathContext } from './PathContext'
import SectionTitle from './SectionTitle'
import { NavStateContext } from './NavStateContext'
export function SideNav({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>
}) {
  const router = useRouter()
  const sections = Object.keys(DocsMap)
  return (
    <PathContext.Provider value={router.pathname}>
      <NavStateContext.Provider
        value={() => {
          setState(false)
        }}
      >
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
      </NavStateContext.Provider>
    </PathContext.Provider>
  )
}
