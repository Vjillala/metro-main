import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/Input'

type ControlledInputProps<T extends FieldValues> = Omit<InputProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <Input {...field} {...restProps} errorMessage={error?.message} />
}
