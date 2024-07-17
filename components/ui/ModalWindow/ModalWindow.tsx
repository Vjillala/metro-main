import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import CloseOutline from '@/assets/icons/CloseOutline'
import { Card } from '@/components/ui/Card'
import { modalAnimations } from '@/components/ui/ModalWindow/modalWindowAnimations'
import { Typography } from '@/components/ui/Typography'
import * as ModalPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './ModalWindow.module.scss'

export type ModalWindowProps = {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const ModalWindow = forwardRef<ElementRef<'div'>, ModalWindowProps>(
  ({ children, className, open, setOpen, title, trigger, ...restProps }, ref): JSX.Element => {
    const classNames = {
      closeButton: s.closeButton,
      content: clsx(s.content, className),
      header: s.header,
      overlay: s.overlay,
    }

    return (
      <ModalPrimitive.Root onOpenChange={setOpen} open={open}>
        <ModalPrimitive.Trigger asChild>{trigger}</ModalPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <ModalPrimitive.Portal forceMount>
              <motion.div {...modalAnimations.overlay}>
                <ModalPrimitive.Overlay className={classNames.overlay} forceMount />
              </motion.div>
              <div className={classNames.content} ref={ref} {...restProps}>
                <ModalPrimitive.Content asChild forceMount>
                  <motion.div {...modalAnimations.window}>
                    <Card>
                      <header className={classNames.header}>
                        <Typography as={'h2'} variant={'h2'}>
                          {title}
                        </Typography>
                        <ModalPrimitive.Close asChild className={classNames.closeButton}>
                          <CloseOutline />
                        </ModalPrimitive.Close>
                      </header>
                      <div>{children}</div>
                    </Card>
                  </motion.div>
                </ModalPrimitive.Content>
              </div>
            </ModalPrimitive.Portal>
          )}
        </AnimatePresence>
      </ModalPrimitive.Root>
    )
  }
)
