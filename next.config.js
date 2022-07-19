const withMarkdoc = require('@markdoc/next.js')
const withPlugins = require('next-compose-plugins')
const fileMaps = require('./scripts/fileMaps')
const I18N = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  env: {
    docmap: fileMaps.getDocMap(),
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
