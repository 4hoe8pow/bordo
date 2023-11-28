import type { Meta, StoryObj } from '@storybook/react'

import StatsPage from './StatsPage'

const meta: Meta<typeof StatsPage> = {
  component: StatsPage,
}

export default meta

type Story = StoryObj<typeof StatsPage>

export const Primary: Story = {}
