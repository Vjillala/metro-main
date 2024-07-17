import { Button } from '@/components/ui/Button'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { Dialog } from './Dialog'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
}

export default meta
type Story = StoryObj<typeof meta>

export const DeletePack: Story = {
  args: {
    action: 'removeDeck',
    buttonTitle: 'Delete Pack',
    itemName: 'First Pack',
    modalHeaderTitle: 'Delete Pack',
    onClick: action('Clicked for Delete Pack button'),
    trigger: <Button variant={'secondary'}>Delete Pack</Button>,
  },
}

export const DeleteCard: Story = {
  args: {
    action: 'removeCard',
    buttonTitle: 'Delete Card',
    itemName: 'First Card',
    modalHeaderTitle: 'Delete Card',
    onClick: action('Clicked for Delete Card button'),
    trigger: <Button variant={'secondary'}>Delete Card</Button>,
  },
}
