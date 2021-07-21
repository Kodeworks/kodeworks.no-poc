import {useState, useEffect, Component} from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({backgroundOpacity = 1, children}) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen duration-1000 ease-in bg-main-gray-500 transition-bg-opacity"
      style={{'--tw-bg-opacity': backgroundOpacity}}
    >
      <Head>
        <title>Kodeworks</title>
        <noscript>
          <link rel="stylesheet" href="styles.css" />
        </noscript>
      </Head>
      <Header></Header>
      <main className="flex-grow w-full px-2 xl:mx-auto xl:max-w-screen-xl content sm:px-4 md:px-8 lg:px-16">
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
