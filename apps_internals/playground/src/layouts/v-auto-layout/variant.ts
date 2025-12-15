import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'w-full'
  },
  variants: {
    direction: {
      vertical: 'flex flex-col flex-wrap',
      horizontal: 'flex flex-row flex-wrap'
    },
    align: {
      center: 'items-center justify-center',
      left: 'justify-start',
      right: 'justify-end',
      space_evenly: 'justify-evenly',
      space_btw: 'justify-between'
    },
    spacer: {
      none: 'gap-0',
      xxs: 'gap-0.5',
      xs: 'gap-1',
      sm: 'gap-1.5',
      md: 'gap-2',
      lg: 'gap-2.5',
      xl: 'gap-3',
      xxl: 'gap-3.5',
      xxxl: 'gap-4'
    },
    padding: {
      none: 'p-0',
      xxs: 'p-1',
      xs: 'p-2',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-5',
      xl: 'p-6',
      xxl: 'p-7',
      xxxl: 'p-8'
    },
    border: {
      none: 'border-0',
      default: 'border',
      top: 'border-t',
      bottom: 'border-b',
      left: 'border-l',
      right: 'border-r'
    },
    shadow: {
      none: 'shadow-none',
      xs: 'shadow-sm',
      sm: 'shadow',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      xxl: 'shadow-2xl'
    },
    blur: {
      none: 'blur-none',
      sm: 'blur-sm',
      md: 'blur-md',
      lg: 'blur-lg',
      xl: 'blur-xl',
      xxl: 'blur-2xl',
      xxxl: 'blur-3xl'
    },
    radius: {
      none: 'rounded-none',
      xs: 'rounded-sm',
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      xxl: 'rounded-2xl',
      xxxl: 'rounded-3xl',
      full: 'rounded-full',
      top: 'rounded-t-sm',
      bottom: 'rounded-b-sm',
      left: 'rounded-l-sm',
      right: 'rounded-r-sm',
      tl: 'rounded-tl-sm',
      tr: 'rounded-tr-sm',
      bl: 'rounded-bl-sm',
      br: 'rounded-br-sm'
    }
  },
  defaultVariants: {
    direction: 'horizontal',
    align: 'left',
    spacer: 'none',
    padding: 'sm',
    border: 'none',
    shadow: 'none',
    blur: 'none',
    radius: 'none'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
