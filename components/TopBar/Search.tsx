import { DocSearch } from '@docsearch/react'

export default function Search() {
  return (
    <DocSearch
      appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
      apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
      indexName="markdoc"
      placeholder="Search..."
    />
  )
}
