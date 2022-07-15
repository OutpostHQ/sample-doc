import { BreakpointsProvider, Button, Card, Grid, Root } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
import { SideNav } from './SideNav'
import { TableOfContents } from './TableOfContents'
import TOKENS from '../utils/tokens'
import { TopBar } from './TopBar'
import { ScrollableYGrid, StickyCard } from './tasty'
import { useState } from 'react'
import { PageFooter, SiteFooter } from './Footer'
export const Layout = ({ children, toc }) => {
  const Router = useRouter()
  const [sideNavOpen, toggleSideNav] = useState(false)
  return (
    <BreakpointsProvider value={[1200, 640]}>
      <Root styles={TOKENS} fonts={false} router={Router}>
        <Grid
          gridColumns={[
            '256px 1fr',
            '256px 1fr',
            sideNavOpen ? '1fr 0' : '1fr',
          ]}
          gridRows={['63px 1fr', , sideNavOpen ? '106px 1fr' : '56px 1fr']} // change header length when menu open
          height="100vh"
        >
          <StickyCard gridColumn="1 / -1" padding="0">
            <TopBar sideNavOpen={sideNavOpen} setSideNavOpen={toggleSideNav} />
          </StickyCard>
          <SideNav state={sideNavOpen} />
          <ScrollableYGrid
            gridColumns={['1fr 256px', '1fr']}
            gridRows="1fr"
            height="calc(100vh - 65px)"
          >
            <Grid gridRows={'1fr 200px'}>
              <Card>{children}</Card>
              <Card gridColumn="1 / -1">Footer</Card>
            </Grid>
            <StickyCard
              height="calc(100vh - 130px)"
              display={['initial', 'none']}
              styles={{
                borderBottom: 'none',
              }}
            >
              <TableOfContents toc={toc} />
            </StickyCard>
            <Card gridColumn="1 / -1" styles={{ borderTop: 'none' }}>
              <SiteFooter />
            </Card>
          </ScrollableYGrid>
        </Grid>
      </Root>
    </BreakpointsProvider>
  )
}
