import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './Slider.module.scss'

import { Typography } from '../Typography'

type SliderProps = {
  max?: number
  min?: number
  minStepsBetweenThumbs?: number
  onValueChange?: (values: number[]) => void
  value: Array<number>
}
export const Slider = (props: SliderProps) => {
  const { max, min, minStepsBetweenThumbs, onValueChange, value } = props

  return (
    <div className={s.container}>
      <Typography as={'span'} className={s.valueBox} variant={'body1'}>
        {value[0]}
      </Typography>
      <SliderPrimitive.Root
        className={s.slider}
        max={max}
        min={min}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={onValueChange}
        value={value}
      >
        <SliderPrimitive.Track className={s.sliderTrack}>
          <SliderPrimitive.Range className={s.sliderRange} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={s.sliderThumb} />
        <SliderPrimitive.Thumb className={s.sliderThumb} />
      </SliderPrimitive.Root>
      <Typography as={'span'} className={s.valueBox} variant={'body1'}>
        {value[1]}
      </Typography>
    </div>
  )
}
