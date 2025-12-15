import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'bg-default-100 border-divider [&_.text]:text-default-400 h-auto w-full backdrop-blur-3xl dark:bg-neutral-900',
    newsletterContainer: '',
    brand: '',
    footerLink: '',
    socialMedia: '',
    systemStatus: ''
  },
  variants: {
    backdrop: {
      transparent: '',
      opaque: '',
      blurred: ''
    },
    variant: {
      default: '',
      elevated: '',
      subtle: '',
      bordered: ''
    },
    layout: {
      desktop: '',
      tablet: '',
      mobile: '',
      'mobile-sm': ''
    },
    fullWidth: {
      true: '',
      false: ''
    },
    sticky: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    // Backdrop variants
    {
      backdrop: 'transparent',
      class: {
        base: 'opacity-100'
      }
    },
    {
      backdrop: 'opaque',
      class: {
        base: 'opacity-50 transition-opacity duration-200 hover:opacity-100'
      }
    },
    {
      backdrop: 'blurred',
      class: {
        base: 'bg-container-secondary/80 backdrop-blur-3xl'
      }
    },
    // Variant styles
    {
      variant: 'elevated',
      class: {
        base: 'border-none shadow-lg'
      }
    },
    {
      variant: 'subtle',
      class: {
        base: 'border-none bg-transparent'
      }
    },
    {
      variant: 'bordered',
      class: {
        base: 'border-divider border bg-transparent'
      }
    },
    // Layout-specific adjustments
    {
      layout: 'mobile-sm',
      class: {
        brand: '[&_.brand-label]:hidden'
      }
    },
    {
      layout: 'mobile',
      class: {
        base: 'px-4 py-6',
        brand: 'flex-col gap-4',
        footerLink: 'justify-start'
      }
    },
    {
      layout: 'tablet',
      class: {
        base: 'px-6 py-8',
        brand: 'gap-4',
        footerLink: 'justify-start'
      }
    },
    {
      layout: 'desktop',
      class: {
        base: 'px-8 py-10',
        brand: 'gap-6',
        footerLink: 'justify-center'
      }
    },
    // Full width variants
    {
      fullWidth: true,
      class: {
        base: ''
      }
    },
    {
      fullWidth: false,
      class: {
        base: 'mx-auto max-w-7xl rounded-xl'
      }
    },
    // Sticky footer
    {
      sticky: true,
      class: {
        base: 'sticky bottom-0 z-50'
      }
    },
    // Text color variants based on backdrop
    {
      backdrop: 'opaque',
      class: {
        base: '[&_.text]:text-default-400'
      }
    },
    {
      backdrop: 'transparent',
      class: {
        base: '[&_.text]:text-default-500'
      }
    },
    {
      backdrop: 'blurred',
      class: {
        base: '[&_.text]:text-default-foreground'
      }
    },
    // Icon color variants
    {
      backdrop: 'opaque',
      class: {
        base: '[&_.sheet-icon_svg]:fill-default-400'
      }
    },
    {
      backdrop: 'transparent',
      class: {
        base: '[&_.sheet-icon_svg]:fill-default-500'
      }
    },
    {
      backdrop: 'blurred',
      class: {
        base: '[&_.sheet-icon_svg]:fill-default-foreground'
      }
    },
    // Responsive spacing
    {
      layout: ['mobile', 'mobile-sm'],
      fullWidth: false,
      class: {
        base: 'mx-4 my-4'
      }
    },
    {
      layout: 'tablet',
      fullWidth: false,
      class: {
        base: 'mx-6 my-6'
      }
    },
    {
      layout: 'desktop',
      fullWidth: false,
      class: {
        base: 'mx-8 my-8'
      }
    },
    {
      layout: ['mobile', 'mobile-sm', 'tablet', 'desktop'],
      fullWidth: true,
      class: {
        base: 'w-full'
      }
    }
  ],
  defaultVariants: {
    backdrop: 'opaque',
    variant: 'default',

    fullWidth: true,
    sticky: false
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
