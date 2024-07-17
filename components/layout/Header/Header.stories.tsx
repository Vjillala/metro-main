import { BrowserRouter } from 'react-router-dom'

import { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Header',
}

export default meta
type Story = StoryObj<typeof meta>

export const SingIn: Story = {
  args: {
    isLoggedIn: false,
  },
}

export const LoggedIn: Story = {
  args: {
    email: 'mamedov@gmail.com',
    isLoggedIn: true,
    onLogout: () => {},
    userName: 'Ramin',
  },
}
