import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center rounded-lg border border-b-4 border-newYellow-500 p-2 text-xl text-newYellow-500 opacity-100 hover:border-newOrange-500 disabled:cursor-default disabled:border-white disabled:opacity-50 disabled:drop-shadow-none',
  variants: {
    size: {
      default: '',
      md: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export type IButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button>

export default function Button({ className, size, ...props }: IButtonProps) {
  return (
    <button className={button({ size, className })} {...props}>
      {props.children}
    </button>
  )
}
