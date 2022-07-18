const withMarkdoc = require('@markdoc/next.js')
const withPlugins = require('next-compose-plugins')
const I18N = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}
module.exports = withPlugins(
  [
    withMarkdoc({ mode: 'static' })({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    }),
  ],
  I18N
)
