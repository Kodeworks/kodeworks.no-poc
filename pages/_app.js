import '../styles/tailwind.css'
import Head from 'next/head'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="icon" href={prefix + '/favicon.ico'} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={prefix + '/apple-touch-icon.png'}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={prefix + '/favicon-32x32.png'}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={prefix + '/favicon-16x16.png'}
        />
        <link rel="manifest" href={prefix + '/site.webmanifest'} />
        <link
          rel="mask-icon"
          href={prefix + '/safari-pinned-tab.svg'}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preload"
          href={prefix + '/fonts/non-natural-grotesk-regular.woff2'}
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
