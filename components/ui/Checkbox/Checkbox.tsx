import { ComponentPropsWithoutRef, ElementRef, ForwardRefRenderFunction, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

const CheckboxComponent: ForwardRefRenderFunction<
  ElementRef<typeof CheckboxRadix.Root>,
  CheckboxProps
> = (props, ref) => {
  const {
    checked = false,
    disabled,
    errorMessage,
    id,
    label,
    name,
    onCheckedChange,
    ...rest
  } = props

  return (
    <form>
      <div className={s.root}>
        <CheckboxRadix.Root
          className={disabled ? `${s.checkboxRoot} ${s.borderDisabled}` : s.checkboxRoot}
          defaultChecked={checked}
          disabled={disabled}
          id={name}
          name={name}
          onCheckedChange={onCheckedChange}
          ref={ref}
          {...rest}
        >
          <CheckboxRadix.Indicator
            className={
              disabled ? `${s.checkboxIndicator} ${s.indicatorDisabled}` : s.checkboxIndicator
            }
          >
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <Typography
          as={'label'}
          className={disabled ? `${s.label} ${s.labelDisabled}` : s.label}
          htmlFor={name}
          variant={'body2'}
        >
          {label}
        </Typography>
        {errorMessage && <Typography variant={'caption'}>{errorMessage}</Typography>}
      </div>
    </form>
  )
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  CheckboxComponent
)
