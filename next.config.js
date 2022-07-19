const withMarkdoc = require('@markdoc/next.js')
const withPlugins = require('next-compose-plugins')
const fileUtils = require('./scripts/fileUtils')
const { docsmap, docsarray } = fileUtils.getDocPathUtils()
const I18N = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  env: {
    DOCMAP: docsmap,
    DOCARRAY: docsarray,
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
