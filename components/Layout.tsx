import { Card, Grid } from '@cube-dev/ui-kit'
import { TableOfContents } from './TableOfContents'

export const Layout = ({ children, toc }) => {
  return (
    <Grid gridColumns="200px 1fr" gridRows="60px 1fr" height="500px">
      <Card gridColumn="1 / -1">Jenga-UI/Docs</Card>
      <Card>
        <TableOfContents toc={toc} />
      </Card>
      <Card>{children}</Card>
    </Grid>
  )
}
