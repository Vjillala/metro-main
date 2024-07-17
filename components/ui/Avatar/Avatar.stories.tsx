import { Avatar } from '@/components/ui/Avatar'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  argTypes: {
    image: {
      control: 'text',
      description: 'URL of the avatar image',
    },
    size: {
      control: 'select',
      description: 'Size of the avatar',
      options: ['small', 'large'],
    },
    userName: { description: 'User name for the avatar', type: 'string' },
  },
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userName: 'Ramin',
  },
}

export const DefaultWithPhoto: Story = {
  args: {
    image: 'https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg',
    userName: 'Ramin',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    userName: 'Ramin',
  },
}
