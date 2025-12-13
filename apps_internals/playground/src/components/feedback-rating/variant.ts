import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: ['vrating', 'relative', 'flex', 'items-center', 'gap-3'],
    title: ['text-default-400', 'text-sm', 'font-medium'],
    rating: ['flex', 'gap-1']
  },
  variants: {
    spacer: {
      none: {
        base: ''
      },
      sm: {
        base: 'py-5'
      },
      md: {
        base: 'py-10'
      },
      lg: {
        base: 'py-16'
      }
    },
    // Add responsive variants for mobile
    device: {
      mobile: {},
      desktop: {}
    }
  },
  compoundVariants: [
    // Mobile responsive styles for vdevice-mob-sm
    {
      device: 'mobile',
      class: {
        base: ['flex-col', 'items-start', 'gap-2']
      }
    },
    // Mobile responsive styles for specific counts
    {
      spacer: { sm: true, md: true, lg: true },
      device: 'mobile',
      class: {
        title: 'text-sm'
      }
    }
  ],
  defaultVariants: {
    spacer: 'none',
    device: 'desktop'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
