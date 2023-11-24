// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import ThemeChange from './ThemeChange'

const meta: Meta<typeof ThemeChange> = {
  component: ThemeChange,
}

export default meta

type Story = StoryObj<typeof ThemeChange>

export const Primary: Story = {}
