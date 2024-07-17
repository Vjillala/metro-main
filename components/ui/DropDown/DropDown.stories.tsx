import type { Meta, StoryObj } from '@storybook/react'

import EditOutline from '@/assets/icons/EditOutline'
import LogOutOutline from '@/assets/icons/LogOutOutline'
import MoreVerticalOutline from '@/assets/icons/MoreVerticalOutline'
import PersonOutline from '@/assets/icons/PersonOutline'
import PlayCircleOutline from '@/assets/icons/PlayCircleOutline'
import TrashOutline from '@/assets/icons/TrashOutline'
import { Avatar } from '@/components/ui/Avatar'
import { DropDownItem } from '@/components/ui/DropDown/DropDownItem'
import { DropDownMenu } from '@/components/ui/DropDown/DropDownMenu'
import { DropDownSeparator } from '@/components/ui/DropDown/DropDownSeparator'
import { Typography } from '@/components/ui/Typography'

import s from './DropDown.module.scss'

const meta = {
  component: DropDownMenu,
  decorators: [Story => <div style={{ margin: ' 0 auto', maxWidth: '300px' }}>{Story()}</div>],
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

const userData = {
  email: 'frontend-dev@gmail.com',
  name: 'Ramin',
}

export const WithUser: Story = {
  args: {
    children: (
      <>
        <DropDownItem asChild>
          <div className={s.photoAndEmail}>
            <Avatar size={'small'} userName={userData.name} />
            <div>
              <Typography as={'div'} variant={'subtitle2'}>
                {userData.name}
              </Typography>
              <Typography as={'div'} variant={'caption'}>
                {userData.email}
              </Typography>
            </div>
          </div>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <PersonOutline />
            My Profile
          </Typography>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <LogOutOutline />
            Sign Out
          </Typography>
        </DropDownItem>
      </>
    ),
    trigger: <Avatar userName={userData.name} />,
  },
}
export const WithOutUser: Story = {
  args: {
    children: (
      <>
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <PlayCircleOutline />
            Learn
          </Typography>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <EditOutline />
            Edit
          </Typography>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <TrashOutline />
            Delete
          </Typography>
        </DropDownItem>
      </>
    ),
    trigger: <MoreVerticalOutline />,
  },
}
