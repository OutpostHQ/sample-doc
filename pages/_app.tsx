import { SSRProvider } from '@react-aria/ssr'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import '../styles/globals.css'
const TITLE = 'Markdoc'
const DESCRIPTION = 'A powerful, flexible, Markdown-based authoring framework'
const GITHUBLINK = 'https://github.com/OutpostHQ/sample-doc'

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
  const { markdoc } = pageProps
  let title = TITLE
  let description = DESCRIPTION
  let githublink = GITHUBLINK
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description
    }
    if (markdoc.frontmatter.githublink) {
      githublink = markdoc.frontmatter.githublink
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <SSRProvider>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout toc={toc} githublink={githublink}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
