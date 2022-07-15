import { Block, BreakpointsProvider, Grid, Root } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
import { SideNav } from './SideNav'
import { TableOfContents } from './TableOfContents'
import TOKENS from '../utils/tokens'
import { TopBar } from './TopBar'
import { ScrollableYGrid, StickyBlock } from './tasty'
import { useState } from 'react'
import { PageFooter, SiteFooter } from './Footer'
export const Layout = ({ children, toc,githublink }) => {
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
          <StickyBlock gridColumn="1 / -1" padding="0" border="bottom">
            <TopBar sideNavOpen={sideNavOpen} setSideNavOpen={toggleSideNav} />
          </StickyBlock>
          <SideNav state={sideNavOpen} />
          <ScrollableYGrid
            gridColumns={['1fr 256px', '1fr']}
            gridRows="1fr"
            height="calc(100vh - 65px)"
          >
            <Grid gridRows={'1fr 200px'}>
              <Block padding="1rem 2rem">{children}</Block>
              <Block padding="1rem 2rem">
                <PageFooter githublink={githublink}/>
              </Block>
              {/* <Block gridColumn="1 / -1">Footer</Block> */}
            </Grid>
            <StickyBlock
              height="calc(100vh - 234px)"
              display={['initial', 'none']}
              styles={{
                borderBottom: 'none',
              }}
            >
              <TableOfContents toc={toc} />
            </StickyBlock>
            <Block gridColumn="1 / -1" styles={{ borderTop: 'none' }}>
              <SiteFooter />
            </Block>
          </ScrollableYGrid>
        </Grid>
      </Root>
    </BreakpointsProvider>
  )
}
