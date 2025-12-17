import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'w-full bg-transparent',
    left: 'flex flex-col px-2',
    right: 'flex flex-col',
    content: 'line-clamp-2 text-ellipsis',
    right_footer: 'flex items-center gap-2 p-0'
  },
  variants: {
    orientation: {
      horizontal: {
        base: ''
      },
      vertical: {
        base: ''
      }
    },
    size: {
      sm: {
        base: 'h-40 gap-2 p-2'
      },
      md: {
        base: 'h-48 gap-2 p-4'
      },
      lg: {
        base: 'h-56 gap-3 p-6'
      }
    },
    device: {
      mobile: {
        base: 'w-60'
      },
      tablet: {
        base: 'w-72'
      },
      desktop: {
        base: 'w-78'
      }
    }
  },
  compoundVariants: [
    {
      orientation: 'vertical',

      class: {
        base: 'flex h-auto w-full flex-row'
      }
    },

    {
      orientation: 'horizontal',

      class: {
        base: 'flex flex-row'
      }
    }
  ],
  defaultVariants: {
    orientation: 'horizontal',
    size: 'sm',
    device: 'desktop'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
