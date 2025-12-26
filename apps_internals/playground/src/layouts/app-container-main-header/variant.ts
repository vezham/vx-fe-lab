import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'px-2 py-4'
  },
  variants: {
    color: {
      transparent: 'bg-transparent',
      default: 'bg-secondary',
      primary: 'bg-primary-50'
    }
  },
  defaultVariants: {
    color: 'transparent'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
