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
      src: 'https://images.unsplash.com/photo-1548795179-8bfc5c1ebb24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      altText: 'Cabin with a fjord and high mountains in the background',
      tailwindAspectRatio: 'aspect-w-2 aspect-h-1',
    },
    input: [
      'Inatur er Norges største markedsplass for jakt, fiske og hytter i norsk natur.',
      'Nytt avsnitt med mer om utgangspunktet for prosjektet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate lectus eu maximus tristique. Etiam ut dolor nec tellus pellentesque fringilla id nec orci. Ut eu est tristique, dapibus nibh vel, iaculis nisi. Nam ac pharetra ligula. Sed convallis, mi a efficitur lacinia, velit elit tincidunt enim, vitae scelerisque odio tortor mollis mauris. Nam dignissim, nibh eu suscipit molestie, ex lorem egestas est, eu ultricies nibh leo nec nulla. Donec in nisi nunc. Proin vel turpis id lorem tristique pharetra vel et quam. Pellentesque a tellus sit amet ligula aliquet feugiat at in erat. Cras convallis, urna sed molestie scelerisque, velit dolor dapibus tellus, nec fringilla nunc felis tempus mauris. Duis at tempus sem. In hac habitasse platea dictumst. Donec vitae leo fringilla, efficitur sem ut, congue magna. Etiam in finibus orci. Aliquam euismod sodales erat sit amet porttitor. Nam a accumsan turpis.',
    ],
    output: [
      'Kodeworks videreutvikler og vedlikeholder løsninger for Inatur.',
      'Har gått over til komponentbasert frontend med React.',
    ],
  },
  {
    id: '2',
    name: projectNames.VASKEHJELP,
  },
  {
    id: '3',
    name: projectNames.EQUINOR,
    technologies: [tech.CSHARP, tech.AZURE, tech.MYSQL],
    illustration: {
      src: 'https://images.unsplash.com/photo-1503427315916-2ba435dee667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      altText: 'Cabin with a fjord and high mountains in the background',
      tailwindAspectRatio: 'aspect-w-9 aspect-h-7 md:aspect-w-2 md:aspect-h-3',
    },
    input: [
      'Equinor supplerer 170 millioner mennesker med energi daglig, og har de siste årene iverksatt en strategisk satsing på bærekraftig energi. Dette er en prosess som krever innovasjon, forretningsforståelse og et stort fokus på kvalitet. ',
      'Nytt avsnitt med mer om utgangspunktet for prosjektet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate lectus eu maximus tristique. Etiam ut dolor nec tellus pellentesque fringilla id nec orci. Ut eu est tristique, dapibus nibh vel, iaculis nisi. Nam ac pharetra ligula. Sed convallis, mi a efficitur lacinia, velit elit tincidunt enim, vitae scelerisque odio tortor mollis mauris. Nam dignissim, nibh eu suscipit molestie, ex lorem egestas est, eu ultricies nibh leo nec nulla. Donec in nisi nunc. Proin vel turpis id lorem tristique pharetra vel et quam. Pellentesque a tellus sit amet ligula aliquet feugiat at in erat. Cras convallis, urna sed molestie scelerisque, velit dolor dapibus tellus, nec fringilla nunc felis tempus mauris. Duis at tempus sem. In hac habitasse platea dictumst. Donec vitae leo fringilla, efficitur sem ut, congue magna. Etiam in finibus orci. Aliquam euismod sodales erat sit amet porttitor. Nam a accumsan turpis.',
    ],
    output: [
      'Kodeworks støtter Equinors forsknings- og digitaliseringsaktiviteter gjennom analyse, design, programmering og testing.',
    ],
  },
]

export default projects
