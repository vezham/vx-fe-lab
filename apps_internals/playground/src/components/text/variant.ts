import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: ''
  },
  variants: {
    variant: {
      title: 'text-foreground my-1 font-bold',
      title1: 'text-foreground my-1 font-medium',
      subtitle: 'text-default-200 my-1 font-semibold',
      label: 'my-1 text-sm',
      paragraph: 'text-foreground my-1 text-sm',
      disable: 'text-default-300 my-1 text-sm',
      error: 'text-danger-500 my-1 text-sm'
    },
    color: {
      none: '',
      default: 'text-default-400',
      primary: 'text-primary',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
      info: 'text-info'
    },
    vc: {
      none: '',
      black: 'text-black',
      white: 'text-white',
      secondary: 'text-default-400',
      mode: 'text-black dark:!text-white'
    },
    size: {
      sm: 'text-2xl md:text-3xl',
      md: 'text-2xl md:text-4xl',
      lg: 'text-2xl md:text-4xl lg:text-5xl'
    },
    align: {
      center: 'text-center',
      left: 'text-left rtl:text-right',
      right: 'text-right rtl:text-left'
    }
  },
  defaultVariants: {
    variant: 'paragraph',
    vc: 'none',
    color: 'none',
    align: 'left'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
