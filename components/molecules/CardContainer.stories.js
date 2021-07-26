import React from 'react'
import Variant from '../atoms/Variant'

import CardContainer from './CardContainer'

export default {
  title: 'Molecules/CardContainer',
  component: CardContainer,
  argTypes: {
    variant: {
      options: [Variant.MAIN_GRAY, Variant.BLACK, Variant.WHITE],
      control: {type: 'select'},
    },
  },
}

const Template = args => {
  return (
    <CardContainer {...args}>
      <div className="md:mr-auto md:w-1/2 md:pr-10">
        <h2 className="mt-2 text-3xl font-normal tracking-tight sm:text-4xl">
          Tittel
        </h2>
        <p className="mt-3 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          mi massa, aliquam at scelerisque id, ultrices in odio.
        </p>
        <div className="mt-8"></div>
      </div>
    </CardContainer>
  )
}

export const MainGray = Template.bind({})
MainGray.args = {
  variant: Variant.MAIN_GRAY,
}

export const Black = Template.bind({})
Black.args = {
  variant: Variant.BLACK,
}

export const White = Template.bind({})
White.args = {
  variant: Variant.WHITE,
}
