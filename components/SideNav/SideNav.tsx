import React from 'react'
import { Block, Card, Text } from '@cube-dev/ui-kit'
import { DocsMap } from '../../utils/DocsMap'
import NavigationSection from './NavigationSection'

export function SideNav() {
  // const router = useRouter()
  const sections = Object.keys(DocsMap)
  return (
    <Card
      styles={{
        backgroundColor: 'var(--secondary-bg)',
        borderColor: 'var(--border-color)',
        color: '--var(--primary-text-color)',
        paddingLeft: '20px',
        overflowY: 'scroll',
      }}
    >
      {sections.map((section) => {
        return (
          <Block flow="column" styles={{ padding: '20px 0 20px 0' }}>
            <Text
              styles={{
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              {section}
            </Text>
            <NavigationSection sectionItems={DocsMap[section]} />
          </Block>
        )
      })}
    </Card>
  )
}
