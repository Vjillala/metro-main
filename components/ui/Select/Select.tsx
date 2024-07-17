import React, { ComponentPropsWithoutRef, ReactNode, RefAttributes, useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

type Item = {
  text: string
  value: string
}

export type SelectProps = {
  ariaLabel?: string
  disabled?: boolean
  items: Item[]
  placeholder?: string
  small?: boolean
  title?: string
  value: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

type SelectItemProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  small?: boolean
  value: string
}

export const Select = (props: SelectProps) => {
  const { ariaLabel, disabled, items, onValueChange, placeholder, small, title, value } = props
  const [open, setOpen] = useState(false)

  const classNames = {
    item: clsx(s.selectItem, small && s.small),
    trigger: clsx(s.selectTrigger, { [s.selectTriggerOpen]: open }, small && s.small),
    viewport: clsx(s.selectViewport, { [s.selectViewportOpen]: open }, small && s.small),
  }

  return (
    <>
      <div className={s.selectTitle}>{title}</div>
      <SelectRadix.Root
        onOpenChange={() => {
          setOpen(!open)
        }}
        onValueChange={onValueChange}
        value={value}
      >
        <SelectRadix.Trigger
          aria-label={ariaLabel}
          className={classNames.trigger}
          disabled={disabled}
        >
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon className={s.selectIcon}>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.selectContent} position={'popper'}>
            <SelectRadix.Viewport className={classNames.viewport}>
              <SelectRadix.Group>
                {items.map(i => (
                  <SelectItem key={i.value} value={i.value}>
                    {i.text}
                  </SelectItem>
                ))}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </>
  )
}
const SelectItem = React.forwardRef(
  (
    { children, className, small, ...props }: RefAttributes<HTMLDivElement> & SelectItemProps,
    forwardedRef: React.LegacyRef<HTMLDivElement> | undefined
  ) => {
    const classNames = {
      item: clsx(s.selectItem, { [s.small]: small }),
    }

    return (
      <SelectRadix.Item className={classNames.item} {...props} ref={forwardedRef}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
