import {useState, useEffect, Component} from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import SeismographSmall from '../molecules/SeismographSmall'

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
      <main className="relative flex-grow w-full">
        <div className="absolute hidden w-16 sm:block sm:top-0 sm:w-28 md:w-40 right-1 sm:right-24 md:right-28">
          <SeismographSmall />
        </div>
        {children}
      </main>
    </div>
  )
}

export default Layout
