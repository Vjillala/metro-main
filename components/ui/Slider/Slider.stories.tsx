import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components/ui/Slider/Slider'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderOne: Story = {
  args: {
    max: 10,
    min: 0,
    minStepsBetweenThumbs: 1,
    value: [2, 10],
  },
}
export const SliderTwo: Story = {
  args: {
    max: 20,
    min: 5,
    minStepsBetweenThumbs: 1,
    value: [0, 30],
  },
}
