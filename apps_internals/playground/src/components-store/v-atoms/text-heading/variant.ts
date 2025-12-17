import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'text-foreground my-1 leading-6 font-bold' // 1.5rem line-height
  },
  variants: {
    color: {
      none: '',
      default: 'text-default-400',
      primary: 'text-primary-foreground',
      success: 'text-success-foreground',
      warning: 'text-warning-foreground',
      danger: 'text-danger-foreground',
      info: 'text-info-foreground'
    },
    vc: {
      none: '',
      black: 'text-black',
      white: 'text-white',
      secondary: 'text-default-100',
      mode: 'text-black dark:text-white'
    },
    size: {
      xs: 'text-lg lg:text-xl', // Base mobile size with desktop override
      sm: 'text-xl lg:text-2xl',
      md: 'text-2xl lg:text-3xl',
      lg: 'text-3xl lg:text-4xl',
      xl: 'text-4xl lg:text-5xl',
      xxl: 'text-5xl lg:text-6xl'
    },
    align: {
      center: 'text-center',
      left: 'text-left rtl:text-right',
      right: 'text-right rtl:text-left'
    },
    disabled: {
      true: 'text-default-500',
      false: ''
    },
    // Device-specific responsive variants
    device: {
      mobile: '', // Base styles are mobile-first
      desktop: '' // Desktop overrides are handled through size variants with lg: prefix
    }
  },
  compoundVariants: [
    // Mobile-specific sizes (small screens)
    {
      device: 'mobile',
      size: 'xs',
      class: 'text-2xl'
    },
    {
      device: 'mobile',
      size: 'sm',
      class: 'text-3xl'
    },
    {
      device: 'mobile',
      size: 'md',
      class: 'text-4xl'
    },
    {
      device: 'mobile',
      size: 'lg',
      class: 'text-5xl'
    },
    {
      device: 'mobile',
      size: 'xl',
      class: 'text-6xl'
    },
    {
      device: 'mobile',
      size: 'xxl',
      class: 'text-7xl'
    },
    // Desktop-specific sizes (laptop and desktop)
    {
      device: 'desktop',
      size: 'xs',
      class: 'text-4xl'
    },
    {
      device: 'desktop',
      size: 'sm',
      class: 'text-5xl'
    },
    {
      device: 'desktop',
      size: 'md',
      class: 'text-6xl'
    },
    {
      device: 'desktop',
      size: 'lg',
      class: 'text-7xl'
    },
    {
      device: 'desktop',
      size: 'xl',
      class: 'text-8xl'
    },
    {
      device: 'desktop',
      size: 'xxl',
      class: 'text-9xl'
    },
    // Disabled state
    {
      disabled: true,
      color: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
      class: 'text-default-500'
    },
    {
      disabled: true,
      vc: ['black', 'white', 'secondary', 'mode'],
      class: 'text-default-500'
    }
  ],
  defaultVariants: {
    color: 'default',
    vc: 'none',
    size: 'lg',
    align: 'right',
    disabled: false,
    device: 'mobile' // Mobile-first approach
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
