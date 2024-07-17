import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './Avatar.module.scss'

export type AvatarProps = {
  image?: string
  size?: 'large' | 'small'
  userName: string
} & ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, image, size = 'small', userName, ...rest }, ref) => {
    const classNames = {
      fallback: s.fallback,
      image: s.image,
      root: clsx(s.root, s[size], className),
    }

    const initials = userName
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word[0].toUpperCase() ?? '')
      .join(' ')

    return (
      <AvatarPrimitive.Root className={classNames.root} ref={ref} {...rest}>
        {image ? (
          <AvatarPrimitive.Image
            alt={`${userName}'s avatar`}
            className={classNames.image}
            src={image}
          />
        ) : (
          <AvatarPrimitive.Fallback className={classNames.fallback}>
            {initials}
          </AvatarPrimitive.Fallback>
        )}
      </AvatarPrimitive.Root>
    )
  }
)
