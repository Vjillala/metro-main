import { Meta } from '@storybook/react'

import { Spinner } from './Spinner'

export default {
  component: Spinner,
  title: 'Components/Spinner',
} as Meta<typeof Spinner>

export const Default = {
  args: {
    size: 48,
  },
}

export const Small = {
  args: {
    size: 24,
  },
}

export const FullScreen = {
  args: {
    fullScreen: true,
  },
}
