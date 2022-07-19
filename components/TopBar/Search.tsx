import { DocSearch } from '@docsearch/react'

export default function Search() {
  return (
    <DocSearch
      appId="R2IYF7ETH7" //{process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
      apiKey="599cec31baffa4868cae4e79f180729b" //{process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
      indexName="docsearch" //"markdoc"
      placeholder="Search The Docs"
      disableUserPersonalization
    />
  )
}
