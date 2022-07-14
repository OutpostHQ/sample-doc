const withMarkdoc = require('@markdoc/next.js')
const withPlugins = require('next-compose-plugins')
const I18N = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}
module.exports = withPlugins(
  [
    withMarkdoc(/* config: https://markdoc.io/docs/nextjs#options */)({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    }),
  ],
  I18N
)
