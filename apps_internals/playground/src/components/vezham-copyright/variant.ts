import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex flex-col items-center text-center',
    wrapper: 'text-default-400 flex items-center',
    logo: 'fill-default',
    link: 'text-default-400 hover:text-default-700 hover:fill-default-700 flex items-center transition-colors'
  },
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
