import { ReactNode, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { ModalWindow } from '@/components/ui/ModalWindow'
import { Typography } from '@/components/ui/Typography'

import s from './Dialog.module.scss'

type ActionDialog = 'removeCard' | 'removeDeck'

export type DialogProps = {
  action: ActionDialog
  buttonTitle: string
  itemName: string
  modalHeaderTitle: string
  onClick: () => void
  trigger: ReactNode
}

export const Dialog = ({
  action,
  buttonTitle,
  itemName,
  modalHeaderTitle,
  onClick,
  trigger,
}: DialogProps): JSX.Element => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  const onButtonClickHandler = () => {
    onClick()
    setOpen(false)
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title={modalHeaderTitle} trigger={trigger}>
      <div className={s.root}>
        <Typography className={s.text} variant={'body1'}>
          {getDialogText(action, itemName)}
        </Typography>
        <div className={s.buttonContainer}>
          <Button onClick={onClose} type={'button'} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={onButtonClickHandler}>{buttonTitle}</Button>
        </div>
      </div>
    </ModalWindow>
  )
}

const getDialogText = (action: ActionDialog, itemName?: string) => {
  const dialogVariants: {
    [key in ActionDialog]: ReactNode
  } = {
    removeCard: (
      <>
        Do you really want to remove this card from deck. <br></br>Card will be deleted.
      </>
    ),
    removeDeck: (
      <>
        Do you really want to remove <b>{itemName}?</b> <br></br> All cards will be deleted.
      </>
    ),
  }

  return dialogVariants[action]
}
