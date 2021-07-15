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
