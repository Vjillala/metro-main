import { memo } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/assets/icons/Logo'
import { UserDropDown } from '@/components/layout/UserDropDown'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'

import s from './Header.module.scss'

export type HeaderProps = {
  email: string
  isLoggedIn: boolean
  onLogout: () => void
  userName: string
}

export const Header = memo(({ email, isLoggedIn, onLogout, userName }: HeaderProps) => {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <Link className={s.logo} to={'/'}>
          <Logo />
        </Link>
        {isLoggedIn && (
          <div className={s.userInHeader}>
            <Typography className={s.headerUserName} variant={'subtitle1'}>
              {userName}
            </Typography>
            <UserDropDown email={email} logout={onLogout} name={userName} />
          </div>
        )}
        {!isLoggedIn && (
          <Button as={Link} to={'/sign-in'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
})
