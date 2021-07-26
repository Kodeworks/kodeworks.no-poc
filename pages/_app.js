import '../styles/tailwind.css'
import Head from 'next/head'
import {urlPrefix} from '../utils/urlPrefix'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="icon" href={urlPrefix + '/favicon.ico'} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={urlPrefix + '/apple-touch-icon.png'}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={urlPrefix + '/favicon-32x32.png'}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={urlPrefix + '/favicon-16x16.png'}
        />
        <link rel="manifest" href={urlPrefix + '/site.webmanifest'} />
        <link
          rel="mask-icon"
          href={urlPrefix + '/safari-pinned-tab.svg'}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preload"
          href={urlPrefix + '/fonts/non-natural-grotesk-regular.woff2'}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
