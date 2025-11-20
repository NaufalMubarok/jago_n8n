import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BackToTop from '../components/BackToTop'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <Component {...pageProps} />
      <BackToTop />
    </>
  )
}
