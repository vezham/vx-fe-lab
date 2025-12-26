import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'text-foreground relative flex h-full w-full overflow-hidden'
  },
  variants: {
    theme: {
      light: '',
      dark: ''
    }
  },
  compoundVariants: [
    {
      theme: 'light',
      class: {
        base: [
          'bg-gradient-to-b',
          'from-[rgb(234,234,234)]/20',
          'to-[rgb(255,255,255)]',
          'dark:from-[rgb(234,234,234)]/5',
          'dark:to-[rgb(255,255,255)]/95'
        ]
      }
    },
    {
      theme: 'dark',
      class: {
        base: [
          'bg-gradient-to-b',
          'from-[rgb(33,36,40)]/20',
          'to-[rgb(0,0,0)]',
          'dark:from-[rgb(33,36,40)]/20',
          'dark:to-[rgb(0,0,0)]'
        ]
      }
    }
  ],
  defaultVariants: {
    theme: 'dark'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
