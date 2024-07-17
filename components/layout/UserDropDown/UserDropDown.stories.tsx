import type { Meta, StoryObj } from '@storybook/react'

import { Link, MemoryRouter } from 'react-router-dom'

import LogOutOutline from '@/assets/icons/LogOutOutline'
import PersonOutline from '@/assets/icons/PersonOutline'
import { UserDropDown } from '@/components/layout/UserDropDown/UserDropDown'
import { Avatar } from '@/components/ui/Avatar'
import { DropDownItem, DropDownMenu, DropDownSeparator } from '@/components/ui/DropDown'
import { Typography } from '@/components/ui/Typography'

import s from './UserDropDown.module.scss'

const meta: Meta<typeof UserDropDown> = {
  component: UserDropDown,
  decorators: [
    Story => (
      <MemoryRouter>
        <div style={{ margin: '0 auto', maxWidth: '300px' }}>{Story()}</div>
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UserDropDown',
} satisfies Meta<typeof UserDropDown>

export default meta
type Story = StoryObj<typeof meta>

const userData = {
  email: 'frontend-dev@gmail.com',
  logout: () => {},
  name: 'Ramin',
}

export const Default: Story = {
  render: () => (
    <DropDownMenu trigger={<Avatar userName={userData.name} />}>
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
        <Link className={s.link} to={'/profile'}>
          <PersonOutline />
          <Typography as={'div'} variant={'caption'}>
            My Profile
          </Typography>
        </Link>
      </DropDownItem>
      <DropDownSeparator />
      <DropDownItem asChild>
        <Link className={s.link} onClick={userData.logout} to={'/login'}>
          <LogOutOutline />
          <Typography as={'div'} variant={'caption'}>
            Sign Out
          </Typography>
        </Link>
      </DropDownItem>
    </DropDownMenu>
  ),
}
