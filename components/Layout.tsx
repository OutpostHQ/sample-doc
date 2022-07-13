import { Card, Grid, Root } from '@cube-dev/ui-kit'
import { SideNav } from './SideNav'
import { TableOfContents } from './TableOfContents'
import { TOKENS } from './tokens'
export const Layout = ({ children, toc }) => {
  return (
    <Root styles={TOKENS}>
      <Grid
        gridColumns="256px 1fr 256px"
        gridRows="60px 1fr 60px"
        height="min 100vh"
      >
        <Card gridColumn="1 / -1">TopBar</Card>
        <Card>
          <SideNav />
        </Card>
        <Card>{children}</Card>
        <Card>
          <TableOfContents toc={toc} />
        </Card>
        <Card gridColumn="1 / -1">Footer</Card>
      </Grid>
    </Root>
  )
}
