import { SSRProvider } from '@react-aria/ssr'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/Layout'
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
  let frontmatter = {
    type: null,
    toc: [],
    title: 'Jenga UI',
    description:
      'A fast, reusable, composable, and accessible React components for your React apps.',
    editlink: null,
    pkg: null,
    source: null,
    header: false,
  }
  const { markdoc } = pageProps
  if (markdoc) {
    if (markdoc.frontmatter) {
      for (let i of Object.keys(markdoc.frontmatter)) {
        if (frontmatter.hasOwnProperty(i))
          frontmatter[i] = markdoc.frontmatter[i]
      }
    }
  }

  frontmatter.toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : Array<string>(0)

  return (
    <SSRProvider>
      <Head>
        <title>{frontmatter.title} - Jenga UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={`${frontmatter.title} - Jenga UI`} />
        <meta name="description" content={frontmatter.description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout frontmatter={frontmatter}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
