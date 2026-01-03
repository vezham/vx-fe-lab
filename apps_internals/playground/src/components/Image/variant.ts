import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'w-full px-6',
    image: 'h-auto object-cover'
  },
  variants: {
    rounded: {
      none: '',
      sm: {
        base: 'overflow-hidden rounded-sm',
        image: 'rounded-sm'
      },
      md: {
        base: 'overflow-hidden rounded-md',
        image: 'rounded-md'
      },
      lg: {
        base: 'overflow-hidden rounded-lg',
        image: 'rounded-lg'
      },
      xl: {
        base: 'overflow-hidden rounded-xl',
        image: 'rounded-xl'
      },
      '2xl': {
        base: 'overflow-hidden rounded-2xl',
        image: 'rounded-2xl'
      },
      '3xl': {
        base: 'overflow-hidden rounded-3xl',
        image: 'rounded-3xl'
      },
      full: {
        base: 'overflow-hidden rounded-full',
        image: 'rounded-full'
      }
    },
    size: {
      xs: {
        image: 'w-32'
      },
      sm: {
        image: 'w-48'
      },
      md: {
        image: 'w-64 md:w-full'
      },
      lg: {
        image: 'w-96 md:w-full'
      },
      xl: {
        image: 'w-[500px] md:w-full'
      },
      '2xl': {
        image: 'w-[700px] md:w-full'
      },
      full: {
        image: 'w-full'
      }
    },
    shadow: {
      none: '',
      sm: {
        base: 'shadow-sm'
      },
      md: {
        base: 'shadow-md'
      },
      lg: {
        base: 'shadow-lg'
      },
      xl: {
        base: 'shadow-xl'
      }
    },
    padding: {
      none: 'px-0',
      sm: 'px-3',
      md: 'px-6',
      lg: 'px-9',
      xl: 'px-12'
    }
  },
  compoundVariants: [
    // Responsive width for different sizes
    {
      size: ['md', 'lg', 'xl', '2xl'],
      class: {
        image: 'md:w-full'
      }
    }
  ],
  defaultVariants: {
    rounded: '3xl',
    size: '2xl',
    shadow: 'none',
    padding: 'md'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
