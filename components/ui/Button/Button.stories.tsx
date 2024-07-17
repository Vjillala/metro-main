import type { Meta, StoryObj } from '@storybook/react'

import CloseOutline from '@/assets/icons/CloseOutline'
import LogOutOutline from '@/assets/icons/LogOutOutline'
import TrashOutline from '@/assets/icons/TrashOutline'
import { Button } from '@/components/ui/Button/Button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button Primary',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryIcon: Story = {
  args: {
    children: (
      <>
        <LogOutOutline />
        Button Primary Icon
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryDeleteIcon: Story = {
  args: {
    children: (
      <>
        <TrashOutline />
        Button Primary Delete Icon
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    children: 'Button Primary Disabled',
    disabled: true,
    variant: 'primary',
  },
}

export const PrimaryAsLink: Story = {
  args: {
    as: 'a',
    children: 'Button Primary as Link',
    href: '/',
    variant: 'primary',
  },
}

export const PrimaryFullWidth: Story = {
  args: {
    children: 'Button Primary Full Width',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryIcon: Story = {
  args: {
    children: (
      <>
        <LogOutOutline />
        Button Secondary Icon
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryCloseIcon: Story = {
  args: {
    children: (
      <>
        <CloseOutline />
        Button Secondary Icon
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    children: 'Button Secondary Disabled',
    disabled: true,
    variant: 'secondary',
  },
}

export const SecondaryAsLink: Story = {
  args: {
    as: 'a',
    children: 'Button Secondary as Link',
    href: '/',
    variant: 'secondary',
  },
}

export const SecondaryFullWidth: Story = {
  args: {
    children: 'Button Secondary Full Width',
    disabled: false,
    fullWidth: true,
    variant: 'secondary',
  },
}
