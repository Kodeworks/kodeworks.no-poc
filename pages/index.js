import Head from 'next/head'
import Layout from '../components/templates/Layout'
import Seismograph from '../components/molecules/Seismograph'
import Logo from '../components/atoms/Logo'
import CardContainer from '../components/molecules/CardContainer'
import Variant from '../components/atoms/Variant'
import LinkButton from '../components/molecules/LinkButton'
import Person from '../components/organisms/Person'
import people from '../data/people'
import PeopleMasonry from '../components/templates/PeopleMasonry'

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <Seismograph></Seismograph>
        <div className="absolute inset-0 flex items-center justify-center px-2">
          <div className="flex-shrink mx-auto mt-12 sm:mt-24 h-28">
              <Logo></Logo>
          </div>
        </div>
      </div>
      <section className="relative my-16">
        <PeopleMasonry></PeopleMasonry>
      </section>
      <section className="relative my-16">
        <CardContainer variant={Variant.BLACK}>
          <div className="md:mr-auto md:w-1/2 md:pr-10">
            <h2 className="mt-2 text-3xl tracking-tight text-white font-regular sm:text-4xl">
              Vi muliggjør ideer!
            </h2>
            <p className="mt-3 text-lg">
              Vi er en gjeng som gjør det mulig for deg å gjennomføre ideer.
              Hvordan du gjør det, bestemmer du helt selv!
            </p>
            <div className="mt-8">
              <LinkButton
                variant={Variant.WHITE}
                linkText="Personalhåndboka"
                url="#"
              ></LinkButton>
            </div>
          </div>
        </CardContainer>
        <div className="relative h-56 bg-transparent sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60"
            alt=""
          />
        </div>
      </section>
      <section className="my-16">
        <CardContainer variant={Variant.BLACK}>
          <div className="md:mr-auto md:w-1/2 md:pr-10">
            <h2 className="mt-2 text-3xl font-normal tracking-tight text-white sm:text-4xl">
              Vil du jobbe med oss?
            </h2>
            <p className="mt-3 text-lg">
              Vi vil bli bedre kjent med deg! Ta gjerne kontakt for en uformell
              prat over en kaffe. Titt innom håndboka vår og se hva vi kan
              tilby.
            </p>
            <div className="mt-8">
              <LinkButton
                variant={Variant.WHITE}
                linkText="Personalhåndboka"
                url="#"
              ></LinkButton>
            </div>
          </div>
        </CardContainer>
      </section>
      <section className="my-16">
        <CardContainer variant={Variant.WHITE}>
          <div className="text-center md:mr-auto md:w-1/2 md:pr-10">
            <h2 className="mt-2 text-3xl font-normal tracking-tight text-black sm:text-4xl">
              Vil du jobbe med oss?
            </h2>
            <p className="mt-3 text-lg">
              Vi vil bli bedre kjent med deg! Ta gjerne kontakt for en uformell
              prat over en kaffe. Titt innom håndboka vår og se hva vi kan
              tilby.
            </p>
            <div className="mt-8">
              <LinkButton
                variant={Variant.BLACK}
                linkText="Personalhåndboka"
                url="#"
              ></LinkButton>
            </div>
          </div>
        </CardContainer>
      </section>
      <section className="my-16">
        <CardContainer className="border border-red-500">
          <div className="text-left md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="mt-2 text-3xl font-normal tracking-tight text-black sm:text-4xl">
              Vil du jobbe med oss?
            </h2>
            <p className="mt-3 text-lg">
              Vi vil bli bedre kjent med deg! Ta gjerne kontakt for en uformell
              prat over en kaffe. Titt innom håndboka vår og se hva vi kan
              tilby.
            </p>
            <div className="mt-8">
              <LinkButton
                variant={Variant.BLACK}
                linkText="Personalhåndboka"
                url="#"
              ></LinkButton>
            </div>
          </div>
        </CardContainer>
      </section>
    </Layout>
  )
}
