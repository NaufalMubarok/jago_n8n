import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BackToTop from '../components/BackToTop'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <BackToTop />
    </>
  )
}
