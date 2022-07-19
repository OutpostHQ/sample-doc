import { Dispatch, SetStateAction } from 'react'
import { Block } from '@cube-dev/ui-kit'
import NavigationSection from './NavigationSection'
import { SectionBlock } from '../tasty'
import { useRouter } from 'next/router'
import SectionTitle from './SectionTitle'
import { NavStateContext, PathContext } from './NavContexts'
export function SideNav({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>
}) {
  const DocsMap = JSON.parse(process.env.DOCMAP) || {}
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
                {section !== 'MAIN' ? (
                  <SectionTitle>{section}</SectionTitle>
                ) : null}
                <NavigationSection sectionItems={DocsMap[section]} />
              </SectionBlock>
            )
          })}
        </Block>
      </NavStateContext.Provider>
    </PathContext.Provider>
  )
}
