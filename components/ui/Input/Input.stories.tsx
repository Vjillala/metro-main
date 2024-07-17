import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Input } from '@/components/ui/Input/Input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <Input
        label={'Input'}
        name={'email'}
        onChange={e => setState(e.target.value)}
        placeholder={'Placeholder'}
        value={state}
      />
    )
  },
}

export const Password = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <Input
        label={'Input'}
        onChange={e => setState(e.target.value)}
        placeholder={'Placeholder'}
        type={'password'}
        value={state}
      />
    )
  },
}

export const Search = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <Input
        label={'Input search'}
        onChange={e => setState(e.target.value)}
        onClearClick={() => {
          setState('')
        }}
        placeholder={'Input search'}
        type={'search'}
        value={state}
      />
    )
  },
}

export const InputWithError: Story = {
  args: {
    errorMessage: 'Error!',
    placeholder: 'Error',
  },
}

export const InputWithoutLabel: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'text',
  },
}

export const DisabledPassword: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Placeholder',
    type: 'password',
  },
}

export const DisabledSearch: Story = {
  args: {
    disabled: true,
    label: 'Input search',
    placeholder: 'Placeholder',
    type: 'search',
  },
}
