import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex items-center justify-center transition-all duration-200',
    icon: 'transition-all duration-200'
  },
  variants: {
    color: {
      default: {
        icon: 'fill-default-400'
      },
      primary: {
        icon: 'fill-primary'
      },
      success: {
        icon: 'fill-success'
      },
      warning: {
        icon: 'fill-warning'
      },
      danger: {
        icon: 'fill-danger'
      },
      info: {
        icon: 'fill-info'
      }
    },
    foreground: {
      true: '',
      false: ''
    },
    vc: {
      none: '',
      black: {
        icon: '!fill-black'
      },
      white: {
        icon: '!fill-white'
      },
      secondary: {
        icon: '!fill-default-400'
      },
      mode: {
        icon: '!fill-black dark:!fill-white'
      }
    },
    size: {
      xxs: {
        base: 'size-2',
        icon: 'size-2'
      },
      xs: {
        base: 'size-4',
        icon: 'size-4'
      },
      sm: {
        base: 'size-6',
        icon: 'size-6'
      },
      md: {
        base: 'size-8',
        icon: 'size-8'
      },
      lg: {
        base: 'size-10',
        icon: 'size-10'
      },
      xl: {
        base: 'size-12',
        icon: 'size-12'
      },
      xxl: {
        base: 'size-14',
        icon: 'size-14'
      },
      xxxl: {
        base: 'size-16',
        icon: 'size-16'
      }
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full'
    },
    hoverEffect: {
      solid: '',
      glow: '',
      none: ''
    },
    bgVariant: {
      default: '',
      sidebar: ''
    },
    cursor: {
      true: 'cursor-pointer',
      false: 'cursor-none'
    }
  },
  compoundVariants: [
    // Foreground variants
    {
      foreground: true,
      color: 'default',
      class: {
        icon: '!fill-default-foreground'
      }
    },
    {
      foreground: true,
      color: 'primary',
      class: {
        icon: '!fill-primary-foreground'
      }
    },
    {
      foreground: true,
      color: 'success',
      class: {
        icon: '!fill-success-foreground'
      }
    },
    {
      foreground: true,
      color: 'warning',
      class: {
        icon: '!fill-warning-foreground'
      }
    },
    {
      foreground: true,
      color: 'danger',
      class: {
        icon: '!fill-danger-foreground'
      }
    },
    {
      foreground: true,
      color: 'info',
      class: {
        icon: '!fill-info-foreground'
      }
    },
    // Glow hover effects
    {
      hoverEffect: 'glow',
      cursor: true,
      class: {
        base: 'hover:scale-105 hover:text-neutral-800'
      }
    },
    {
      hoverEffect: 'glow',
      color: 'default',
      class: {
        icon: 'hover:!fill-default-900'
      }
    },
    {
      hoverEffect: 'glow',
      color: 'success',
      class: {
        icon: 'hover:!fill-success-700 dark:hover:!fill-success-400/50'
      }
    },
    {
      hoverEffect: 'glow',
      color: 'warning',
      class: {
        icon: 'hover:!fill-warning-700 dark:hover:!fill-warning-400/50'
      }
    },
    {
      hoverEffect: 'glow',
      color: 'danger',
      class: {
        icon: 'hover:!fill-danger-700 dark:hover:!fill-danger-400/50'
      }
    },
    {
      hoverEffect: 'glow',
      color: 'info',
      class: {
        icon: 'hover:!fill-info-700 dark:hover:!fill-info-400/50'
      }
    },
    {
      hoverEffect: 'glow',
      color: 'primary',
      class: {
        icon: 'hover:!fill-primary-700 dark:hover:!fill-primary/50'
      }
    },
    // Sidebar specific success variant
    {
      bgVariant: 'sidebar',
      color: 'success',
      class: {
        icon: 'fill-success-500 dark:fill-success-400'
      }
    },
    // Solid hover effects
    {
      hoverEffect: 'solid',
      color: 'default',
      class: {
        base: 'hover:bg-default/60 dark:hover:bg-default'
      }
    },
    {
      hoverEffect: 'solid',
      color: 'default',
      bgVariant: 'sidebar',
      class: {
        base: 'hover:bg-default/75 dark:hover:bg-default/75'
      }
    },
    {
      hoverEffect: 'solid',
      color: 'default',
      class: {
        icon: 'hover:!fill-default-900'
      }
    },
    // Success solid hover
    {
      hoverEffect: 'solid',
      color: 'success',
      class: {
        base: 'hover:bg-success/20',
        icon: 'hover:!fill-success-600 dark:hover:!fill-success'
      }
    },
    // Warning solid hover
    {
      hoverEffect: 'solid',
      color: 'warning',
      class: {
        base: 'hover:bg-warning/20 dark:hover:bg-warning-100'
      }
    },
    {
      hoverEffect: 'solid',
      color: 'warning',
      bgVariant: 'sidebar',
      class: {
        base: 'dark:hover:bg-warning/20'
      }
    },
    // Danger solid hover
    {
      hoverEffect: 'solid',
      color: 'danger',
      class: {
        base: 'hover:bg-danger/20 dark:hover:bg-danger-100'
      }
    },
    {
      hoverEffect: 'solid',
      color: 'danger',
      bgVariant: 'sidebar',
      class: {
        base: 'dark:hover:bg-danger/20'
      }
    },
    // Info solid hover
    {
      hoverEffect: 'solid',
      color: 'info',
      class: {
        base: 'hover:bg-info/20 dark:hover:bg-info-100'
      }
    },
    {
      hoverEffect: 'solid',
      color: 'info',
      bgVariant: 'sidebar',
      class: {
        base: 'dark:hover:bg-info/20'
      }
    },
    // Primary solid hover
    {
      hoverEffect: 'solid',
      color: 'primary',
      class: {
        base: 'hover:bg-primary/20 dark:hover:bg-primary-100'
      }
    },
    {
      hoverEffect: 'solid',
      color: 'primary',
      bgVariant: 'sidebar',
      class: {
        base: 'dark:hover:bg-primary/20'
      }
    },
    // Purple theme override (commented out in original, included for reference)
    // {
    //   hoverEffect: 'solid',
    //   color: 'primary',
    //   class: 'vcolor-purple',
    //   style: {
    //     base: 'hover:bg-primary/20 dark:hover:bg-primary-100'
    //   }
    // },
    // {
    //   hoverEffect: 'solid',
    //   color: 'primary',
    //   bgVariant: 'sidebar',
    //   class: 'vcolor-purple',
    //   style: {
    //     base: 'dark:hover:bg-primary/20'
    //   }
    // },
    // Interactive states
    {
      cursor: true,
      hoverEffect: ['solid', 'glow'],
      class: {
        base: 'active:scale-95'
      }
    }
  ],
  defaultVariants: {
    color: 'default',
    foreground: false,
    vc: 'none',
    size: 'sm',
    radius: 'full',
    bgVariant: 'default',
    cursor: true
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
