import { Link } from 'react-router-dom'

import LogOutOutline from '@/assets/icons/LogOutOutline'
import PersonOutline from '@/assets/icons/PersonOutline'
import { Avatar } from '@/components/ui/Avatar'
import { DropDownItem } from '@/components/ui/DropDown/DropDownItem'
import { DropDownMenu } from '@/components/ui/DropDown/DropDownMenu'
import { DropDownSeparator } from '@/components/ui/DropDown/DropDownSeparator'
import { Typography } from '@/components/ui/Typography'

import s from './UserDropDown.module.scss'

export type UserDropDownProps = {
  email: string
  logout: () => void
  name: string
}

export const UserDropDown = ({ email, logout, name }: UserDropDownProps) => {
  return (
    <DropDownMenu trigger={<Avatar userName={name} />}>
      <DropDownItem asChild>
        <div className={s.photoAndEmail}>
          <Avatar size={'small'} userName={name} />
          <div>
            <Typography as={'div'} variant={'subtitle2'}>
              {name}
            </Typography>
            <Typography as={'div'} variant={'caption'}>
              {email}
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
        <Link className={s.link} onClick={logout} to={'/login'}>
          <LogOutOutline />
          <Typography as={'div'} variant={'caption'}>
            Sign Out
          </Typography>
        </Link>
      </DropDownItem>
    </DropDownMenu>
  )
}
