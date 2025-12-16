import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'my-2 flex flex-row flex-wrap items-center justify-center gap-2',
    logoContainer: 'flex items-center gap-2',
    logoImage: 'max-h-8 object-contain',
    logoIcon: 'flex items-center',
    label: 'text-default-400 font-bold',
    divider: 'border-divider h-[2rem] w-px border-l border-neutral-700',
    subtitle: 'text-default-400 my-1 text-sm lg:text-base'
  },
  variants: {
    layout: {
      horizontal: '',
      vertical: '',
      'logo-only': '',
      'logo-text': ''
    },
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
    spacing: {
      tight: '',
      normal: '',
      loose: ''
    },
    showDivider: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    // Layout variants
    {
      layout: 'horizontal',
      class: {
        base: 'flex-row'
      }
    },
    {
      layout: 'vertical',
      class: {
        base: 'flex-col',
        logoContainer: 'flex-col'
      }
    },
    {
      layout: 'logo-only',
      class: {
        label: 'hidden',
        subtitle: 'hidden'
      }
    },
    {
      layout: 'logo-text',
      class: {
        divider: 'hidden',
        subtitle: 'hidden'
      }
    },
    // Size variants
    {
      size: 'sm',
      class: {
        base: 'gap-1',
        logoImage: 'max-h-6',
        label: 'text-xs',
        subtitle: 'text-xs',
        divider: 'h-4'
      }
    },
    {
      size: 'md',
      class: {
        base: 'gap-2',
        logoImage: 'max-h-8',
        label: 'text-sm',
        subtitle: 'text-sm lg:text-base',
        divider: 'h-[1.563rem]'
      }
    },
    {
      size: 'lg',
      class: {
        base: 'gap-3',
        logoImage: 'max-h-10',
        label: 'text-base',
        subtitle: 'text-base lg:text-lg',
        divider: 'h-8'
      }
    },
    {
      size: 'xl',
      class: {
        base: 'gap-4',
        logoImage: 'max-h-12',
        label: 'text-lg',
        subtitle: 'text-lg lg:text-xl',
        divider: 'h-10'
      }
    },
    // Color variants
    {
      color: 'primary',
      class: {
        label: 'text-primary',
        subtitle: 'text-primary'
      }
    },
    {
      color: 'secondary',
      class: {
        label: 'text-secondary',
        subtitle: 'text-secondary'
      }
    },
    {
      color: 'muted',
      class: {
        label: 'text-default-300',
        subtitle: 'text-default-300'
      }
    },
    {
      color: 'inverted',
      class: {
        label: 'text-white',
        subtitle: 'text-white',
        divider: 'border-white/20'
      }
    },
    // Spacing variants
    {
      spacing: 'tight',
      class: {
        base: 'gap-1',
        logoContainer: 'gap-1'
      }
    },
    {
      spacing: 'normal',
      class: {
        base: 'gap-2',
        logoContainer: 'gap-2'
      }
    },
    {
      spacing: 'loose',
      class: {
        base: 'gap-4',
        logoContainer: 'gap-4'
      }
    },
    // Divider visibility
    {
      showDivider: false,
      class: {
        divider: 'hidden'
      }
    },
    {
      showDivider: true,
      layout: 'horizontal',
      class: {
        divider: 'block'
      }
    },
    // Responsive adjustments
    {
      layout: 'vertical',
      size: ['sm', 'md'],
      class: {
        divider: 'w-8 border-t border-l-0'
      }
    },
    // Mobile adjustments
    {
      layout: 'horizontal',
      class: {
        base: 'flex-wrap'
      }
    }
  ],
  defaultVariants: {
    layout: 'horizontal',
    size: 'lg',
    color: 'default',
    spacing: 'loose',
    showDivider: true
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
