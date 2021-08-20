import {render, screen} from '@testing-library/react'
import Home from 'pages/index'

test('renders page', async () => {
  render(<Home />)
})

test('failing test', async () => {
  expect(true).toEqual(false)
})

test('h1 with SVG as title should contain screen-reader friendly title', async () => {
  const {container} = render(<Home />)
  const screenReaderTitle = screen.getByText('Kodeworks')

  expect(screenReaderTitle.tagName).toEqual('SPAN')
  expect(screenReaderTitle.classList.contains('sr-only')).toBe(true)
  expect(screenReaderTitle.parentElement.tagName).toEqual('H1')
  expect(screenReaderTitle.nextSibling.tagName).toEqual('svg')
})
