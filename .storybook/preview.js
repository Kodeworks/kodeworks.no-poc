import React from 'react'
import '../styles/tailwind.css'
export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  Story => (
    <div className="font-primary">
      <Story />
    </div>
  ),
]
