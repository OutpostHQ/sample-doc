import { Card, Grid, Root } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'
import { SideNav } from './SideNav'
import { TableOfContents } from './TableOfContents'
import { TOKENS } from './tokens'
import { StyledCard } from './styled'
import { lightTheme } from './theme/light'
import { ThemeProvider } from 'styled-components'
import { TopNav } from './TopNav'
export const Layout = ({ children, toc }) => {
  const Router = useRouter()
  return (
    <Root styles={TOKENS} fonts={false} router={Router}>
      <ThemeProvider theme={lightTheme}>
        <Grid gridColumns="256px 1fr" gridRows="65px 1fr" height="min 100vh">
          <Card gridColumn="1 / -1" padding="8px">
            <TopNav />
          </Card>
          <Card className="SideBar">
            <SideNav />
          </Card>
          <Grid gridColumns="1fr 256px" gridRows="1fr 200px">
            <Card>{children}</Card>
            <Card>
              <TableOfContents toc={toc} />
            </Card>
            <Card gridColumn="1 / -1">Footer</Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Root>
  )
}
