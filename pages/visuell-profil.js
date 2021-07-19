import Head from 'next/head'
import Layout from '../components/templates/Layout'
import TailwindPalette from '../components/molecules/TailwindPalette'
import useScrollBasedOpacity from '../hooks/useScrollBasedOpacity'
import Logo from '../components/atoms/Logo'

export default function VisualProfile() {
  const backgroundOpacity = useScrollBasedOpacity({
    sensitivity: 2,
    minOpacity: 0.25,
  })

  return (
    <Layout backgroundOpacity={backgroundOpacity}>
      <div className="mb-4">
        <h1 className="flex items-center justify-center h-screen font-medium text-8xl">
          Visuell profil
        </h1>
        <h2>Farger</h2>
        <p>Bruken av farger skal følge krav til universell utforming</p>
        <h3>Fargepalett</h3>
        <TailwindPalette />
        <TailwindPalette tailwindColor="kw-green-2" />
        <TailwindPalette tailwindColor="kw-green-3" />
        <div className="h-24 w-25 bg-kw-green-complimentary"></div>
        <div className="h-24 w-25 bg-kw-green-analogous"></div>
        <TailwindPalette tailwindColor="kw-green-4" />
        <TailwindPalette tailwindColor="kw-green-5" />
        <TailwindPalette tailwindColor="kw-red" />
        <TailwindPalette tailwindColor="main-gray" />
        <h3>Fargekombinasjoner</h3>
        <p>Ikke alle fargekombinasjoner oppfyller krav til kontrast</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex rounded ring-1 ring-black ring-opacity-50">
            <div className="w-1/2 h-24 rounded-l bg-kw-green-500"></div>
            <div className="w-1/2 h-24 rounded-r bg-main-gray-500"></div>
          </div>
          <div className="flex rounded ring-1 ring-black ring-opacity-50">
            <div className="w-1/2 h-24 rounded-l bg-kw-green-500"></div>
            <div className="w-1/2 h-24 bg-white rounded-r"></div>
          </div>
        </div>
        <h2>Typografi</h2>
        <h3>Logo</h3>
        <div>
          Som SVG:{' '}
          <div className="text-black w-72">
            <Logo></Logo>
          </div>
        </div>
      </div>
    </Layout>
  )
}
