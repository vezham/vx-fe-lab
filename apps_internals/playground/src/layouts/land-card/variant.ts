import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'mx-2 my-6 sm:mx-6 md:my-12'
  },
  variants: {
    columns: {
      1: '',
      2: '',
      3: '',
      4: ''
    },
    orientation: {
      horizontal: '',
      vertical: '',
      none: ''
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8'
    },
    padding: {
      none: '',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8'
    }
  },
  compoundVariants: [
    // Grid layout for column-based cards
    {
      orientation: 'none',
      columns: 1,
      class: {
        base: 'grid grid-cols-1'
      }
    },
    {
      orientation: 'none',
      columns: 2,
      class: {
        base: 'grid grid-cols-1 md:grid-cols-2'
      }
    },
    {
      orientation: 'none',
      columns: 3,
      class: {
        base: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }
    },
    {
      orientation: 'none',
      columns: 4,
      class: {
        base: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      }
    },
    // Flex layout for orientation-based cards
    {
      orientation: 'horizontal',
      class: {
        base: 'flex flex-row'
      }
    },
    {
      orientation: 'vertical',
      class: {
        base: 'flex flex-col'
      }
    }
  ],
  defaultVariants: {
    columns: 3,
    orientation: 'none',
    gap: 'md',
    padding: 'none'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
