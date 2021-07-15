import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Kodeworks</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <noscript>
          <link rel="stylesheet" href="styles.css" />
        </noscript>
      </Head>
      <Header></Header>
      <main className="flex-grow w-full xl:mx-auto xl:max-w-screen-xl content">
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
