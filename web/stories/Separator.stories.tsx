import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Separator from '../components/Separator'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Separator',
  component: Separator
} as ComponentMeta<typeof Separator>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Separator> = (args) => <Separator {...args}><span>OR</span></Separator>

export const DefaultSeparator = Template.bind({})

