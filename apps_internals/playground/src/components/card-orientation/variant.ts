import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'mb-10 items-start justify-start',
    wrapper: 'relative w-full',
    card: 'h-full w-full shadow-lg'
  },
  variants: {
    responsiveness: {
      true: '',
      false: ''
    },
    orientation: {
      horizontal: '',
      vertical: ''
    }
  },
  defaultVariants: {
    responsiveness: true,
    orientation: 'vertical'
  },
  compoundVariants: [
    {
      responsiveness: true,
      orientation: 'horizontal',
      class: {
        base: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
        wrapper: 'flex flex-col items-start',
        card: ''
      }
    },
    {
      responsiveness: false,
      orientation: 'horizontal',
      class: {
        base: 'grid grid-cols-1 gap-6',
        wrapper: 'flex flex-col items-start',
        card: ''
      }
    },
    {
      responsiveness: true,
      orientation: 'vertical',
      class: {
        base: '-mx-2 flex gap-6 pb-4 sm:mx-0 sm:gap-6',
        wrapper: 'flex flex-col items-start',
        card: 'row-start-1 w-70 md:w-96'
      }
    },
    {
      responsiveness: false,
      orientation: 'vertical',
      class: {
        base: '-mx-2 flex gap-6 pb-4 sm:mx-0 sm:gap-6',
        wrapper: 'flex flex-col items-start',
        card: 'row-start-1 w-70 md:w-96'
      }
    }
  ]
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
