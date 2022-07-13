import { Root } from '@cube-dev/ui-kit'
import type { AppProps } from 'next/app'
import { TopNav } from '../components'
import { TOKENS } from '../components/tokens'
import '../public/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root style={TOKENS}>
      <TopNav />
      <Component {...pageProps} />
    </Root>
  )
}
