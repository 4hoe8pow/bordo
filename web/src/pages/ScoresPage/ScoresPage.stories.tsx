import type { Meta, StoryObj } from '@storybook/react'

import ScoresPage from './ScoresPage'

const meta: Meta<typeof ScoresPage> = {
  component: ScoresPage,
}

export default meta

type Story = StoryObj<typeof ScoresPage>

export const Primary: Story = {}
