import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tile from '../components/Tile'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tile',
  component: Tile
} as ComponentMeta<typeof Tile>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args}><div>some content</div></Tile>

export const DefaultTile = Template.bind({})

