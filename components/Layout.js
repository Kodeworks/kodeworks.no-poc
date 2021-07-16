import {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({backgroundOpacity = 1, children}) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen duration-1000 ease-in bg-kw-gray-500 transition-bg-opacity"
      style={{'--tw-bg-opacity': backgroundOpacity}}
    >
      <Head>
        <title>Kodeworks</title>
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
