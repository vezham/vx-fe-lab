import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex w-full flex-col items-center justify-center gap-2',
    heading: 'text-default-400 my-2.5',
    paragraph: 'text-default-400 mb-2 pt-3 text-center',
    button: ''
  },
  variants: {
    fullHeight: {
      true: 'h-screen'
    },
    fullWidth: {
      true: 'w-screen'
    },
    centered: {
      true: 'absolute inset-0'
    }
  },
  compoundVariants: [
    {
      fullHeight: true,
      fullWidth: true,
      class: {
        base: 'fixed inset-0'
      }
    }
  ],
  defaultVariants: {
    fullHeight: true,
    fullWidth: true,
    centered: true
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
