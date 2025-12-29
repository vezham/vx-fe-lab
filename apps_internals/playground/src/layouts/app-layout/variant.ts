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
          'bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]'
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
    theme: 'light'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
