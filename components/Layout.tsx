import { Card, Grid, Root } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
import { SideNav } from './SideNav'
import { TableOfContents } from './TableOfContents'
import { TOKENS } from '../utils/tokens'
import { TopBar } from './TopBar'
export const Layout = ({ children, toc }) => {
  const Router = useRouter()
  return (
    <Root styles={TOKENS} fonts={false} router={Router}>
      <Grid gridColumns="256px 1fr" gridRows="65px 1fr" height="100vh">
        <Card gridColumn="1 / -1" padding="8px" styles={{ position: 'sticky' }}>
          <TopBar />
        </Card>
        <SideNav />
        <Grid
          gridColumns="1fr 256px"
          gridRows="1fr"
          height="calc(100vh - 65px)"
          styles={{ overflowY: 'scroll' }}
        >
          <Grid gridRows="1fr 200px">
            <Card>{children}</Card>
            <Card gridColumn="1 / -1">Footer</Card>
          </Grid>
          <Card
            styles={{ position: 'sticky', top: 0 }}
            height="calc(100vh - 65px)"
          >
            <TableOfContents toc={toc} />
          </Card>
        </Grid>
      </Grid>
    </Root>
  )
}
