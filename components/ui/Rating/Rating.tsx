import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { RatingEmptyIcon } from '@/assets/icons/RatingEmptyIcon'
import { RatingFilledIcon } from '@/assets/icons/RatingFilledIcon'
import { clsx } from 'clsx'

import s from './Rating.module.scss'

type Props = {
  className?: string
  maxRating?: number
  rating: number
  size?: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = forwardRef<ElementRef<'div'>, Props>(
  ({ className, maxRating = 5, rating, size = 1.6, ...restProps }, ref): JSX.Element => {
    const stars = [...Array(maxRating)].map((_, index) => index + 1)

    const ratingClasses = clsx(s.root, className)

    return (
      <div className={ratingClasses} ref={ref} {...restProps}>
        {stars.map((star, index) => {
          return rating >= star ? (
            <RatingFilledIcon color={'var(--color-warning-300)'} key={index} size={size} />
          ) : (
            <RatingEmptyIcon color={'var(--color-warning-300)'} key={index} size={size} />
          )
        })}
      </div>
    )
  }
)
