import { Meta, StoryObj } from '@storybook/react'

import { Rating } from './Rating'

const meta: Meta<typeof Rating> = {
  argTypes: {
    rating: Number,
  },
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
}

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    rating: 5,
  },
}

export const Empty: Story = {
  args: {
    rating: 0,
  },
}

export const Mixed: Story = {
  args: {
    maxRating: 5,
    rating: 3,
  },
}
