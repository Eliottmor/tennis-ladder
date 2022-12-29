import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../components/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Action = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Action.args = {
  label: 'Button',
  type: 'action'
}


export const Flat = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flat.args = {
  label: 'Button',
  type: 'flat'
}

export const Outline = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outline.args = {
  label: 'Button',
  type: 'outline'
}