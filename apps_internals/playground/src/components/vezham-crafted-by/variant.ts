import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex flex-row items-center justify-center gap-2',
    text: 'text-default-400 text-sm',
    logo: 'transition-colors duration-200',
    link: 'transition-all duration-200 hover:opacity-80 active:scale-95'
  },
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
      xl: ''
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      muted: '',
      inverted: ''
    },
    variant: {
      simple: '',
      outlined: '',
      elevated: '',
      subtle: ''
    },
    showText: {
      true: '',
      false: ''
    },
    orientation: {
      horizontal: '',
      vertical: ''
    }
  },
  compoundVariants: [
    // Size variants
    {
      size: 'sm',
      class: {
        base: 'gap-1',
        text: 'text-xs',
        logo: 'h-4 w-4'
      }
    },
    {
      size: 'md',
      class: {
        base: 'gap-2',
        text: 'text-sm',
        logo: 'h-5 w-5'
      }
    },
    {
      size: 'lg',
      class: {
        base: 'gap-3',
        text: 'text-base',
        logo: 'h-6 w-6'
      }
    },
    {
      size: 'xl',
      class: {
        base: 'gap-4',
        text: 'text-lg',
        logo: 'h-8 w-8'
      }
    },
    // Color variants
    {
      color: 'default',
      class: {
        text: 'text-default-400',
        logo: 'text-default-400 hover:text-neutral-900'
      }
    },
    {
      color: 'primary',
      class: {
        text: 'text-primary',
        logo: 'fill-primary hover:!fill-primary-700'
      }
    },
    {
      color: 'secondary',
      class: {
        text: 'text-secondary',
        logo: 'fill-secondary hover:!fill-secondary-700'
      }
    },
    {
      color: 'muted',
      class: {
        text: 'text-default-300',
        logo: 'fill-default-300 hover:!fill-default-500'
      }
    },
    {
      color: 'inverted',
      class: {
        text: 'text-white',
        logo: 'fill-white hover:!fill-white/80'
      }
    },
    // Variant styles
    {
      variant: 'outlined',
      class: {
        base: 'border-divider rounded-full border px-3 py-1.5',
        link: 'hover:border-default-300'
      }
    },
    {
      variant: 'elevated',
      class: {
        base: 'bg-default-100 rounded-full px-3 py-1.5 shadow-sm',
        link: 'hover:shadow-md'
      }
    },
    {
      variant: 'subtle',
      class: {
        base: 'opacity-60 transition-opacity hover:opacity-100',
        link: 'hover:opacity-100'
      }
    },
    // Text visibility
    {
      showText: false,
      class: {
        text: 'hidden'
      }
    },
    {
      showText: true,
      class: {
        text: 'block'
      }
    },
    // Orientation variants
    {
      orientation: 'vertical',
      class: {
        base: 'flex-col',
        text: 'order-2',
        logo: 'order-1'
      }
    },
    {
      orientation: 'horizontal',
      class: {
        base: 'flex-row'
      }
    },
    // Combined variants
    {
      variant: 'subtle',
      color: 'inverted',
      class: {
        base: 'bg-white/10 backdrop-blur-sm'
      }
    },
    {
      variant: 'outlined',
      color: 'inverted',
      class: {
        base: 'border-white/20'
      }
    },
    // Hover effects for all variants
    {
      color: 'default',
      variant: ['simple', 'outlined', 'elevated', 'subtle'],
      class: {
        link: 'hover:[&_svg]:fill-default-700'
      }
    },
    {
      color: 'primary',
      variant: ['simple', 'outlined', 'elevated', 'subtle'],
      class: {
        link: 'hover:[&_svg]:fill-primary-700'
      }
    },
    // Animation variants
    {
      variant: 'simple',
      class: {
        link: 'hover:scale-105 active:scale-95'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'default',
    variant: 'simple',
    showText: true,
    orientation: 'horizontal'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
