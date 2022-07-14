import { Block } from '@cube-dev/ui-kit'
import { DocSearch } from '@docsearch/react'

export default function Search() {
  return (
    <Block width="0 300px 400px" height="42px" flex="row">
      <DocSearch
        appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
        apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
        indexName="markdoc"
        placeholder="Search..."
      />
    </Block>
  )
}
