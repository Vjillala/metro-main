import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/Card/Card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    style: {
      height: '350px',
      padding: '24px',
      width: '280px',
    },
  },
}
