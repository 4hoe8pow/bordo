import type { Meta, StoryObj } from '@storybook/react'

import StandingsPage from './StandingsPage'

const meta: Meta<typeof StandingsPage> = {
  component: StandingsPage,
}

export default meta

type Story = StoryObj<typeof StandingsPage>

export const Primary: Story = {}
