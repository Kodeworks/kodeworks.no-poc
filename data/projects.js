import {tech} from './tech'

export const projectNames = {
  INATUR: 'Inatur',
  VASKEHJELP: 'Vaskehjelp',
  EQUINOR: 'Equinor',
}

const projects = [
  {
    id: '1',
    name: projectNames.INATUR,
    technologies: [tech.JAVA, tech.REACT, tech.WEBPACK, tech.MONGODB],
    illustration: {
      src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80',
      altText:
        'View from a boat on a lake with high mountains in the background',
      tailwindAspectRatio:
        'aspect-w-5 aspect-h-2 md:aspect-w-6 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-1',
    },
    input: [
      'Inatur er Norges største markedsplass for jakt, fiske og hytter i norsk natur.',
      'Nytt avsnitt med mer om utgangspunktet for prosjektet.',
    ],
    output: [
      'Kodeworks videreutvikler og vedlikeholder løsninger for Inatur.',
      'Har gått over til komponentbasert frontend med React.',
    ],
  },
  {
    id: '2',
    name: projectNames.VASKEHJELP,
    technologies: [tech.CSHARP, tech.BLAZOR, tech.TAILWINDCSS],
    illustration: {
      src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      altText: 'Clean kitchen',
      tailwindAspectRatio:
        'aspect-w-5 aspect-h-2 md:aspect-w-6 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-1',
    },
    input: [
      'Vaskehjelp er en markedsplass som kobler vasker og kunder sammen. Vaskehjelps rolle er å tilby plattformen hvor rengjører og kunde kan finne hverandre, samt ta av seg betaling og annet papirarbeid.',
    ],
    output: [
      'Kodeworks har bistått med utvikling av web-, iOS- og Android-applikasjon',
    ],
  },
  {
    id: '3',
    name: projectNames.EQUINOR,
    technologies: [tech.CSHARP, tech.AZURE, tech.MYSQL],
    illustration: {
      src: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80',
      altText: 'Person wearing a VR headset',
      tailwindAspectRatio:
        'aspect-w-5 aspect-h-2 md:aspect-w-6 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-1',
    },
    input: [
      'Equinor supplerer 170 millioner mennesker med energi daglig, og har de siste årene iverksatt en strategisk satsing på bærekraftig energi. Dette er en prosess som krever innovasjon, forretningsforståelse og et stort fokus på kvalitet. ',
      'Nytt avsnitt med mer om utgangspunktet for prosjektet.',
    ],
    output: [
      'Kodeworks støtter Equinors forsknings- og digitaliseringsaktiviteter gjennom analyse, design, programmering og testing. Etiam ut dolor nec tellus pellentesque fringilla id nec orci. Ut eu est tristique, dapibus nibh vel, iaculis nisi.',
    ],
  },
]

export default projects
