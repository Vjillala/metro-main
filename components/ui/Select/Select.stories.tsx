import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/components/ui/Select/Select'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const selectExampleArray = [
  { text: 'First select value', value: 'first' },
  { text: 'Second select value', value: 'second' },
  { text: 'Third select value', value: 'third' },
  { text: 'Fourth select value', value: 'fourth' },
  { text: 'Fifth select value', value: 'fifth' },
]

export const SelectBoxEnabled: Story = {
  args: {
    items: selectExampleArray,
    placeholder: 'Select-box',
    title: 'Select-box-title',
    value: 'first',
  },
}

export const SelectBoxDisabled: Story = {
  args: {
    disabled: true,
    items: selectExampleArray,
    placeholder: 'Select-box',
    title: 'Select-box-title',
    value: 'first',
  },
}
