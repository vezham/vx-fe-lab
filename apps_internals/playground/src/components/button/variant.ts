import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'focus-visible:ring-primary relative inline-flex cursor-pointer items-center justify-center font-medium whitespace-nowrap transition-all duration-200 ease-in-out outline-none select-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50'
  },
  variants: {
    size: {
      sm: {
        base: 'h-8 gap-1.5 px-3 text-xs'
      },
      md: {
        base: 'h-10 gap-2 px-4 text-sm'
      },
      lg: {
        base: 'h-12 gap-2.5 px-6 text-base'
      }
    },
    radius: {
      none: {
        base: 'rounded-none'
      },
      sm: {
        base: 'rounded-sm'
      },
      md: {
        base: 'rounded-md'
      },
      lg: {
        base: 'rounded-lg'
      },
      full: {
        base: 'rounded-full'
      }
    },
    color: {
      default: {
        base: 'bg-default text-default-foreground'
      },
      primary: {
        base: 'bg-primary text-primary-foreground'
      },
      secondary: {
        base: 'bg-secondary text-secondary-foreground'
      },
      success: {
        base: 'bg-success text-success-foreground'
      },
      warning: {
        base: 'bg-warning text-warning-foreground'
      },
      danger: {
        base: 'bg-danger text-danger-foreground'
      }
    },
    variant: {
      solid: {
        base: ''
      },
      faded: {
        base: 'bg-opacity-20 hover:bg-opacity-30'
      },
      bordered: {
        base: 'border-2 bg-transparent'
      },
      light: {
        base: 'hover:bg-opacity-10 bg-transparent'
      },
      flat: {
        base: 'shadow-none hover:shadow-sm'
      },
      ghost: {
        base: 'border-none bg-transparent shadow-none'
      },
      shadow: {
        base: 'shadow-md hover:shadow-lg'
      }
    },
    fullWidth: {
      true: {
        base: 'w-full'
      }
    },
    isDisabled: {
      true: {
        base: 'pointer-events-none cursor-not-allowed opacity-50'
      }
    },
    isIconOnly: {
      true: {
        base: 'aspect-square p-0'
      }
    }
  },
  compoundVariants: [
    // Bordered variant color combinations
    {
      variant: 'bordered',
      color: 'default',
      class: {
        base: 'border-default text-default'
      }
    },
    {
      variant: 'bordered',
      color: 'primary',
      class: {
        base: 'border-primary text-primary'
      }
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: {
        base: 'border-secondary text-secondary'
      }
    },
    {
      variant: 'bordered',
      color: 'success',
      class: {
        base: 'border-success text-success'
      }
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: {
        base: 'border-warning text-warning'
      }
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: {
        base: 'border-danger text-danger'
      }
    },
    // Light variant color combinations
    {
      variant: 'light',
      color: 'default',
      class: {
        base: 'text-default hover:bg-default/10'
      }
    },
    {
      variant: 'light',
      color: 'primary',
      class: {
        base: 'text-primary hover:bg-primary/10'
      }
    },
    {
      variant: 'light',
      color: 'secondary',
      class: {
        base: 'text-secondary hover:bg-secondary/10'
      }
    },
    {
      variant: 'light',
      color: 'success',
      class: {
        base: 'text-success hover:bg-success/10'
      }
    },
    {
      variant: 'light',
      color: 'warning',
      class: {
        base: 'text-warning hover:bg-warning/10'
      }
    },
    {
      variant: 'light',
      color: 'danger',
      class: {
        base: 'text-danger hover:bg-danger/10'
      }
    },
    // Ghost variant color combinations
    {
      variant: 'ghost',
      color: 'default',
      class: {
        base: 'text-default hover:bg-default/10'
      }
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        base: 'text-primary hover:bg-primary/10'
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        base: 'text-secondary hover:bg-secondary/10'
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        base: 'text-success hover:bg-success/10'
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        base: 'text-warning hover:bg-warning/10'
      }
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: {
        base: 'text-danger hover:bg-danger/10'
      }
    },
    // Flat variant color combinations
    {
      variant: 'flat',
      color: 'default',
      class: {
        base: 'bg-default/20 text-default hover:bg-default/30'
      }
    },
    {
      variant: 'flat',
      color: 'primary',
      class: {
        base: 'bg-primary/20 text-primary hover:bg-primary/30'
      }
    },
    {
      variant: 'flat',
      color: 'secondary',
      class: {
        base: 'bg-secondary/20 text-secondary hover:bg-secondary/30'
      }
    },
    {
      variant: 'flat',
      color: 'success',
      class: {
        base: 'bg-success/20 text-success hover:bg-success/30'
      }
    },
    {
      variant: 'flat',
      color: 'warning',
      class: {
        base: 'bg-warning/20 text-warning hover:bg-warning/30'
      }
    },
    {
      variant: 'flat',
      color: 'danger',
      class: {
        base: 'bg-danger/20 text-danger hover:bg-danger/30'
      }
    },
    // Faded variant color combinations
    {
      variant: 'faded',
      color: 'default',
      class: {
        base: 'bg-default/10 text-default hover:bg-default/20'
      }
    },
    {
      variant: 'faded',
      color: 'primary',
      class: {
        base: 'bg-primary/10 text-primary hover:bg-primary/20'
      }
    },
    {
      variant: 'faded',
      color: 'secondary',
      class: {
        base: 'bg-secondary/10 text-secondary hover:bg-secondary/20'
      }
    },
    {
      variant: 'faded',
      color: 'success',
      class: {
        base: 'bg-success/10 text-success hover:bg-success/20'
      }
    },
    {
      variant: 'faded',
      color: 'warning',
      class: {
        base: 'bg-warning/10 text-warning hover:bg-warning/20'
      }
    },
    {
      variant: 'faded',
      color: 'danger',
      class: {
        base: 'bg-danger/10 text-danger hover:bg-danger/20'
      }
    }
  ],
  defaultVariants: {
    size: 'sm',
    radius: 'md',
    fullWidth: false,
    isDisabled: false,
    isIconOnly: false
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
