import {projectNames} from './projects'
import {urlPrefix} from '../utils/urlPrefix'

const people = [
  {
    id: '1',
    portrait: {
      src: urlPrefix + '/portraits/silouette.png',
      tailwindAspectRatio: 'aspect-w-1 aspect-h-1',
    },
    name: 'Ola Nordmann',
    projects: [projectNames.INATUR, projectNames.EQUINOR],
  },
  {
    id: '2',
    portrait: {
      src: 'https://images.unsplash.com/photo-1441892765303-b30bb974b590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      tailwindAspectRatio: 'aspect-w-2 aspect-h-3',
    },
    name: 'Kari Nordmann',
    projects: [projectNames.INATUR],
  },
  {
    id: '4',
    portrait: {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      tailwindAspectRatio: 'aspect-w-1 aspect-h-2',
    },
    name: 'Ola Nordmann',
    projects: [projectNames.INATUR],
  },
  {
    id: '5',
    portrait: {
      src: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      tailwindAspectRatio: 'aspect-w-5 aspect-h-7',
    },
    name: 'Kari Nordmann',
    projects: [projectNames.INATUR],
  },
  {
    id: '3',
    portrait: {
      src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      tailwindAspectRatio: 'aspect-w-4 aspect-h-3',
    },
    name: 'Henning Olsen',
    projects: [projectNames.INATUR],
  },
  {
    id: '6',
    portrait: {
      src: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      tailwindAspectRatio: 'aspect-w-1 aspect-h-2',
    },
    name: 'Henning Olsen',
    projects: [projectNames.INATUR],
  },
]

export default people
