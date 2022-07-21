import { SSRProvider } from '@react-aria/ssr'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layouts'
import CompDetails from '../utils/ComponentDetails'
import '../styles/globals.css'
import '../styles/fonts.css'

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        })
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections)
      }
    }
  }

  return sections
}

export default function MyApp({ Component, pageProps }: AppProps) {
  let frontmatter: {
    type: 'generic' | 'doc' | 'doc-component' | 'blog'
    toc: any[]
    id?: number
    scope?: 'usage' | 'props' | 'design'
    title?: string
    description?: string
  } = {
    type: 'generic',
    toc: [],
    title: '404',
    description: 'None',
  }

  const { markdoc } = pageProps
  if (markdoc) {
    if (markdoc.frontmatter) {
      const isComponent = markdoc.frontmatter.type === 'doc-component'
      for (let i of Object.keys(markdoc.frontmatter)) {
        frontmatter[i] = markdoc.frontmatter[i]
      }
      if (isComponent) {
        const customFront = CompDetails.get(frontmatter.id)
        for (let i of Object.keys(customFront)) {
          frontmatter[i] = customFront[i]
        }
      }
    }
    frontmatter.toc = pageProps.markdoc?.content
      ? collectHeadings(pageProps.markdoc.content)
      : Array<string>(0)
  }
  console.log(markdoc)
  return (
    <SSRProvider>
      <Head>
        <title>{frontmatter.title + ' - Jenga UI'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta
          name="title"
          content={`${frontmatter.title + ' - ' || ''}Jenga UI`}
        />
        <meta name="description" content={frontmatter.description || ''} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout frontmatter={frontmatter}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
