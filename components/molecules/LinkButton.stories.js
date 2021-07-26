import React from 'react'
import Variant from '../atoms/Variant'

import LinkButton from './LinkButton'

export default {
  title: 'Molecules/LinkButton',
  component: LinkButton,
  argTypes: {
    variant: {
      options: [Variant.MAIN_GRAY, Variant.BLACK, Variant.WHITE],
      control: {type: 'select'},
    },
  },
}

const Template = args => <LinkButton {...args} />

export const MainGray = Template.bind({})
MainGray.args = {
  variant: Variant.MAIN_GRAY,
  url: '#',
  linkText: 'Link text',
}

export const Black = Template.bind({})
Black.args = {
  variant: Variant.BLACK,
  url: '#',
  linkText: 'Link text',
}

export const White = Template.bind({})
White.args = {
  variant: Variant.WHITE,
  url: '#',
  linkText: 'Link text',
}
