/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextFieldBlock from '../components/TextFieldBlock'
import { withRHF } from './utils/withRHF'
import { useFormContext } from 'react-hook-form'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextFieldBlock',
  component: TextFieldBlock,
  decorators: [withRHF()]
} as ComponentMeta<typeof TextFieldBlock>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextFieldBlock> = (args) => {
  const { register } = useFormContext()
  return <TextFieldBlock register={register} {...args} />
}

export const DefaultTextFieldBlock = Template.bind({})
DefaultTextFieldBlock.args = {
  label: 'Email Address',
  className: ''
}
