import { BreakpointsProvider, Root } from '@cube-dev/ui-kit'
import { useRouter } from 'next/router'

import TOKENS from '../../utils/tokens'
import BlogLayout from './BlogLayout'
import DocsLayout from './DocsLayout'
import GenericLayout from './GenericLayout'

const Layout = ({ children, frontmatter }) => {
  const Router = useRouter()
  return (
    <BreakpointsProvider value={[1200, 640]}>
      <Root
        styles={TOKENS}
        router={Router}
        fonts={false}
        font="SFProDisplay"
        monospaceFont="SFMono"
      >
        {String(frontmatter.type).includes('doc') ? (
          <DocsLayout frontmatter={frontmatter}>{children}</DocsLayout>
        ) : frontmatter.type === 'blog' ? (
          <BlogLayout frontmatter={frontmatter}>{children}</BlogLayout>
        ) : (
          <GenericLayout>{children}</GenericLayout>
        )}{' '}
      </Root>
    </BreakpointsProvider>
  )
}
export default Layout
