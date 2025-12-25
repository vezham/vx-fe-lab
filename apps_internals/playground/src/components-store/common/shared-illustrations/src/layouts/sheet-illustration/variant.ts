import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: ['flex', 'items-center', 'justify-center', 'rounded-full', 'w-full'],
    illustration: ['p-1']
  },
  variants: {
    size: {
      sm: {
        base: 'h-40',
        illustration: 'size-40'
      },
      md: {
        base: 'h-60',
        illustration: 'size-60'
      },
      lg: {
        base: 'h-96',
        illustration: 'size-96'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tvProps, tvSlots, tva }
