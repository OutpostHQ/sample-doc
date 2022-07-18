import { Block, BreakpointsProvider, Grid, Root } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
import { SideNav } from './SideNav'
import { TableOfContents } from './TableOfContents'
import TOKENS from '../utils/tokens'
import { TopBar } from './TopBar'
import { ScrollableYGrid, StickyBlock, TastySideNavWrapper } from './tasty'
import { useState } from 'react'
import { PageFooter, SiteFooter } from './Footer'
import { PageHeader } from './PageHeader'
export const Layout = ({ children, metaData }) => {
  const Router = useRouter()
  const [sideNavOpen, toggleSideNav] = useState(false)
  return (
    <BreakpointsProvider value={[1200, 640]}>
      <Root
        styles={TOKENS}
        fonts={false}
        router={Router}
        font="SFProDisplay"
        monospaceFont="SFMono"
      >
        <Grid
          gridColumns={[
            '256px 1fr',
            '256px 1fr',
            sideNavOpen ? '1fr 0' : '1fr',
          ]}
          gridRows={['63px 1fr', , sideNavOpen ? '106px 1fr' : '56px 1fr']} // change header length when menu open
          height="100vh"
        >
          <StickyBlock gridColumn="1 / -1" border="bottom">
            <TopBar sideNavOpen={sideNavOpen} setSideNavOpen={toggleSideNav} />
          </StickyBlock>
          <TastySideNavWrapper
            height={[
              'calc(100vh - 63px)',
              ,
              sideNavOpen ? 'calc(100vh - 106px) ' : '0',
            ]}
            display={['initial', , sideNavOpen ? 'initial' : 'none']}
          >
            <SideNav setState={toggleSideNav} />
          </TastySideNavWrapper>
          <ScrollableYGrid
            gridColumns={['1fr 256px', '1fr']}
            gridRows="1fr"
            height={['calc(100vh - 65px)']}
          >
            <Grid gridRows={'1fr 200px'}>
              <Block padding={['50px 32px 0 ', '50px 20px 0 ']}>
                {metaData.header ? <PageHeader {...metaData} /> : null}
                {children}
              </Block>
              <Block padding="1rem 2rem">
                <PageFooter
                  current={metaData.title}
                  editLink={metaData.editlink}
                />
              </Block>
            </Grid>
            <StickyBlock
              height="calc(100vh - 234px)"
              display={['initial', 'none']}
              styles={{
                borderBottom: 'none',
              }}
            >
              <TableOfContents toc={metaData.toc} />
            </StickyBlock>
            <Block gridColumn="1 / -1" border="top">
              <SiteFooter />
            </Block>
          </ScrollableYGrid>
        </Grid>
      </Root>
    </BreakpointsProvider>
  )
}
