import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'my-4',
    title: 'mb-1 text-base',
    list: 'space-y-3',
    list_item: 'flex items-start gap-3 pl-5',
    icon: 'mt-1 shrink-0 text-base',
    label: 'font-medium',
    content: 'text-sm text-gray-500'
  },
  variants: {
    variant: {
      default: {
        base: '',
        icon: 'text-foreground'
      },
      primary: {
        base: '',
        icon: 'text-primary'
      },
      muted: {
        base: 'text-muted-foreground',
        content: 'text-muted-foreground/80'
      },
      card: {
        base: 'bg-card rounded-lg p-4 shadow-sm',
        list: 'space-y-4'
      }
    },
    size: {
      sm: {
        title: 'mb-2 text-sm',
        label: 'text-sm',
        content: 'text-xs',
        icon: 'mt-0.5 text-xs'
      },
      md: {
        title: 'mb-3 text-base',
        label: 'text-base',
        content: 'text-sm',
        icon: 'mt-1 text-sm'
      },
      lg: {
        title: 'mb-4 text-lg',
        label: 'text-lg',
        content: 'text-base',
        icon: 'text-md mt-1'
      }
    },
    spacing: {
      compact: {
        list: 'space-y-2',
        list_item: 'gap-2'
      },
      normal: {
        list: 'space-y-3',
        list_item: 'gap-3'
      },
      spacious: {
        list: 'space-y-4',
        list_item: 'gap-4'
      }
    },
    iconPosition: {
      left: {
        list_item: 'flex items-start gap-3'
      },
      top: {
        list_item: 'flex-col items-start gap-2'
      },
      center: {
        list_item: 'flex items-center gap-3',
        icon: 'mt-0'
      }
    },
    iconSize: {
      sm: {
        icon: 'text-xs'
      },
      md: {
        icon: 'text-sm'
      },
      lg: {
        icon: 'text-md'
      },
      xl: {
        icon: 'text-lg'
      }
    }
  },
  compoundVariants: [
    // Icon color based on style
    {
      variant: 'primary',
      class: {
        icon: 'text-primary'
      }
    },
    // Icon position adjustments
    {
      iconPosition: 'top',
      class: {
        icon: 'mt-0'
      }
    },
    // Card variant spacing
    {
      variant: 'card',
      spacing: 'normal',
      class: {
        list: 'space-y-3'
      }
    }
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    spacing: 'normal',
    iconPosition: 'left',
    iconSize: 'sm'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
