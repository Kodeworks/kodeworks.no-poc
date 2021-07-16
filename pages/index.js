import Head from 'next/head'
import Layout from '../components/Layout'
import Seismograph from '../components/Seismograph'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <Seismograph>
          <div className="absolute inset-x-0 bottom-0 flex px-2">
            <div className="flex flex-shrink mx-auto w-96">
              <Logo></Logo>
            </div>
          </div>
        </Seismograph>
        <h1>Hvem er vi?</h1>
      </main>
    </Layout>
  )
}
