import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'h-full w-full overflow-x-hidden overflow-y-auto'
  },
  variants: {
    color: {
      transparent: 'bg-transparent',
      default: 'bg-default-100'
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      default: 'rounded-xl'
    },
    padding: {
      none: 'p-0',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8'
    }
  },

  defaultVariants: {
    color: 'transparent',
    radius: 'default',
    padding: 'lg'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
