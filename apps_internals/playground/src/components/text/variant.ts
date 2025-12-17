import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: ''
  },
  variants: {
    variant: {
      title: 'text-foreground my-1 text-base font-bold lg:text-xl',
      title1: 'text-foreground my-1 text-base font-medium lg:text-lg',
      subtitle: 'text-default-200 my-1 text-sm font-semibold lg:text-base',
      label: 'my-1 text-sm',
      paragraph: 'text-foreground my-1 text-xs',
      disable: 'text-default-300 my-1 text-sm',
      error: 'text-danger-500 my-1 text-sm'
    },
    color: {
      none: '',
      default: 'text-default-foreground',
      primary: 'text-primary-foreground',
      success: 'text-success-foreground',
      warning: 'text-warning-foreground',
      danger: 'text-danger-foreground',
      info: 'text-info-foreground'
    },
    vc: {
      none: '',
      black: 'text-black',
      white: 'text-white',
      secondary: 'text-default-400',
      mode: 'text-black dark:!text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg'
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
    size: 'md',
    align: 'left'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
