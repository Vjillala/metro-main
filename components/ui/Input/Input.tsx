import { ChangeEvent, ComponentPropsWithoutRef, KeyboardEvent, forwardRef, useState } from 'react'

import CloseOutline from '@/assets/icons/CloseOutline'
import EyeOffOutline from '@/assets/icons/EyeOffOutline'
import EyeOutline from '@/assets/icons/EyeOutline'
import SearchOutline from '@/assets/icons/SearchOutline'
import { useGetId } from '@/components/ui/Input/useGetId'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  onChangeValue?: (value: string) => void
  onClearClick?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      errorMessage,
      id,
      label,
      onChange,
      onChangeValue,
      onClearClick,
      onEnter,
      onKeyDown,
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isPasswordType = type === 'password'
    const isSearchType = type === 'search'
    const isShowClear = isSearchType && value?.length! > 0

    const inputType = isPasswordType && !showPassword ? 'password' : 'text'
    const inputId = useGetId(id)

    const toggleShowPassword = () => setShowPassword(prev => !prev)

    const classNames = {
      input: clsx(s.input, isSearchType && s.search, errorMessage && s.error),
      label: clsx(s.label, rest.disabled && s.disabled),
      root: clsx(s.root, className),
      searchIcon: s.searchIcon,
    }

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.target.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Enter') {
        onEnter?.(e)
      }
      onKeyDown?.(e)
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography as={'label'} className={classNames.label} htmlFor={inputId} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.container}>
          <input
            {...rest}
            className={classNames.input}
            id={inputId}
            onChange={onChangeValueHandler}
            onKeyDown={onKeyPressHandler}
            ref={ref}
            type={inputType}
            value={value}
          />
          {isPasswordType && (
            <button className={s.button} disabled={rest.disabled} onClick={toggleShowPassword}>
              {showPassword ? <EyeOffOutline /> : <EyeOutline />}
            </button>
          )}
          {isShowClear && (
            <button className={s.button} onClick={onClearClick}>
              <CloseOutline />
            </button>
          )}
          {isSearchType && (
            <SearchOutline
              className={classNames.searchIcon}
              color={rest.disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'}
            />
          )}
        </div>
        {errorMessage && (
          <Typography className={s.errorMessage} variant={'caption'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
