import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/ControlledCheckbox/ControlledCheckbox'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export type FormFields = z.infer<typeof loginSchema>

export const SignIn = () => {
  const { control, handleSubmit, register } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormFields) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.h1} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*<DevTool control={control} />*/}
        <Input className={s.input} label={'Email'} {...register('email', { minLength: 8 })} />
        <Input className={s.input} label={'Password'} {...register('password')} type={'password'} />
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <div className={s.forgotLink}>
          <Typography as={'a'} href={'/recover-password'} variant={'body2'}>
            Forgot password?
          </Typography>
        </div>
        <Button fullWidth type={'submit'}>
          Sign in
        </Button>
        <Typography className={s.account} variant={'body2'}>
          Don`t have an account?
        </Typography>
        <Typography as={'a'} className={s.signupLink} href={'/sign-up'} variant={'body2'}>
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
