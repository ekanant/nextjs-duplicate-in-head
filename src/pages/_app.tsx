import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="canonical" key="canonical" href="This is from _app.tsx" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
