import { BreakpointsProvider, Button, Card, Grid, Root } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
import { SideNav } from './SideNav'
import { TableOfContents } from './TableOfContents'
import TOKENS from '../utils/tokens'
import { TopBar } from './TopBar'
import { ScrollableYGrid, StickyCard } from './tasty'
import { useState } from 'react'
export const Layout = ({ children, toc }) => {
  const Router = useRouter()
  const [sideNavOpen, toggleSideNav] = useState(true)
  return (
    <BreakpointsProvider value={[1200, 768]}>
      <Root styles={TOKENS} fonts={false} router={Router}>
        <Grid
          gridColumns={[
            '256px 1fr',
            '256px 1fr',
            sideNavOpen ? '1fr 0' : '1fr',
          ]}
          gridRows={['65px 1fr', '65px 1fr', '100px 1fr']} // change header length when menu open
          height="100vh"
        >
          <StickyCard gridColumn="1 / -1" padding="8px">
            <TopBar />
          </StickyCard>
          <SideNav state={sideNavOpen} />
          <ScrollableYGrid
            gridColumns={['1fr 256px', '1fr']}
            gridRows="1fr"
            height="calc(100vh - 65px)"
          >
            <Grid gridRows={'1fr 200px'}>
              <Card>
                {' '}
                <Button
                  onClick={() => {
                    toggleSideNav(!sideNavOpen)
                  }}
                >
                  Change
                </Button>
                {children}
              </Card>
              <Card gridColumn="1 / -1">Footer</Card>
            </Grid>
            <StickyCard
              height="calc(100vh - 65px)"
              display={['initial', 'none']}
            >
              <TableOfContents toc={toc} />
            </StickyCard>
          </ScrollableYGrid>
        </Grid>
      </Root>
    </BreakpointsProvider>
  )
}
