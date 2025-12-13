import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: [
      'vsheet-icon',
      'flex',
      'items-center',
      'justify-center',
      // Default styles for vsheet-icon
      '[&>svg]:fill-default-400'
    ],
    icon: ['p-2']
  },
  variants: {
    bg_variant: {
      sidebar: {
        base: [
          'vbg-sidebar',
          // Styles from .vbg-sidebar in LESS
          'bg-sidebar-background',
          'text-sidebar-foreground'
        ]
      },
      default: ''
    },
    foreground: {
      true: ''
    },
    cursor: {
      true: 'cursor-pointer',
      false: 'cursor-auto'
    },
    color: {
      default: {
        base: 'vicon-default [&>svg]:fill-default-400'
      },
      primary: {
        base: 'vicon-primary [&>svg]:fill-primary'
      },
      success: {
        base: 'vicon-success [&>svg]:fill-success'
      },
      warning: {
        base: 'vicon-warning [&>svg]:fill-warning'
      },
      danger: {
        base: 'vicon-danger [&>svg]:fill-danger'
      },
      info: {
        base: 'vicon-info [&>svg]:fill-info'
      }
    },
    vc: {
      none: '',
      black: { icon: '!fill-black' },
      white: { icon: '!fill-white' },
      secondary: { icon: '!fill-default-400' },
      mode: { icon: '!fill-black dark:!fill-white' }
    },
    size: {
      xxs: {
        base: 'size-6',
        icon: 'size-6'
      },
      xs: {
        base: 'size-8',
        icon: 'size-8'
      },
      sm: {
        base: 'size-10',
        icon: 'size-10'
      },
      md: {
        base: 'size-12',
        icon: 'size-12'
      },
      lg: {
        base: 'size-14',
        icon: 'size-14'
      },
      xl: {
        base: 'size-16',
        icon: 'size-16'
      },
      xxl: {
        base: 'size-20',
        icon: 'size-20'
      },
      xxxl: {
        base: 'size-24',
        icon: 'size-24'
      }
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full'
    },
    hover_effect: {
      solid: {
        base: [
          'vicon-effect-solid',
          'cursor-pointer',
          // Default hover effect
          'hover:bg-default/60 dark:hover:bg-default',
          'hover:[&>svg]:fill-default-900'
        ]
      },
      glow: {
        base: 'group cursor-pointer',
        icon: 'vicon-effect-glow'
      },
      none: ''
    }
  },
  compoundVariants: [
    // Foreground compound variants
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

    // SEMANTIC color success with sidebar background
    {
      color: 'success',
      bg_variant: 'sidebar',
      class: {
        base: '[&>svg]:fill-success-500 dark:[&>svg]:fill-success-400'
      }
    },

    // SEMANTIC color hover_effect:GLOW
    {
      color: 'default',
      hover_effect: 'glow',
      class: {
        base: 'hover:[&_.vicon-effect-glow]:fill-default-900'
      }
    },
    {
      color: 'success',
      hover_effect: 'glow',
      class: {
        base: 'hover:[&_.vicon-effect-glow]:fill-success-700 dark:hover:[&_.vicon-effect-glow]:fill-success-400/50'
      }
    },
    {
      color: 'warning',
      hover_effect: 'glow',
      class: {
        base: 'hover:[&_.vicon-effect-glow]:fill-warning-700 dark:hover:[&_.vicon-effect-glow]:fill-warning-400/50'
      }
    },
    {
      color: 'danger',
      hover_effect: 'glow',
      class: {
        base: 'hover:[&_.vicon-effect-glow]:fill-danger-700 dark:hover:[&_.vicon-effect-glow]:fill-danger-400/50'
      }
    },
    {
      color: 'info',
      hover_effect: 'glow',
      class: {
        base: 'hover:[&_.vicon-effect-glow]:fill-info-700 dark:hover:[&_.vicon-effect-glow]:fill-info-400/50'
      }
    },

    // THEME color primary hover_effect:GLOW
    {
      color: 'primary',
      hover_effect: 'glow',
      class: {
        base: 'hover:[&_.vicon-effect-glow]:fill-primary-700 dark:hover:[&_.vicon-effect-glow]:fill-primary/50'
      }
    },

    // SEMANTIC color hover_effect:SOLID
    {
      color: 'success',
      hover_effect: 'solid',
      class: {
        base: [
          'hover:bg-success/20',
          'hover:[&>svg]:fill-success-600 dark:hover:[&>svg]:fill-success'
        ]
      }
    },
    {
      color: 'warning',
      hover_effect: 'solid',
      class: {
        base: 'hover:bg-warning/20 dark:hover:bg-warning-100'
      }
    },
    {
      color: 'danger',
      hover_effect: 'solid',
      class: {
        base: 'hover:bg-danger/20 dark:hover:bg-danger-100'
      }
    },
    {
      color: 'info',
      hover_effect: 'solid',
      class: {
        base: 'hover:bg-info/20 dark:hover:bg-info-100'
      }
    },

    // THEME color primary hover_effect:SOLID
    {
      color: 'primary',
      hover_effect: 'solid',
      class: {
        base: 'hover:bg-primary/20 dark:hover:bg-primary-100'
      }
    },

    // SEMANTIC color hover_effect:SOLID with sidebar background
    {
      color: 'default',
      bg_variant: 'sidebar',
      hover_effect: 'solid',
      class: {
        base: 'hover:bg-default/75 dark:hover:bg-default/75'
      }
    },
    {
      color: 'warning',
      bg_variant: 'sidebar',
      hover_effect: 'solid',
      class: {
        base: 'dark:hover:bg-warning/20'
      }
    },
    {
      color: 'danger',
      bg_variant: 'sidebar',
      hover_effect: 'solid',
      class: {
        base: 'dark:hover:bg-danger/20'
      }
    },
    {
      color: 'info',
      bg_variant: 'sidebar',
      hover_effect: 'solid',
      class: {
        base: 'dark:hover:bg-info/20'
      }
    },

    // THEME color primary hover_effect:SOLID with sidebar background
    {
      color: 'primary',
      bg_variant: 'sidebar',
      hover_effect: 'solid',
      class: {
        base: 'dark:hover:bg-primary/20'
      }
    }
  ],
  defaultVariants: {
    vc: 'none',
    bg_variant: 'default',
    foreground: false,
    cursor: false,
    color: 'default',
    size: 'sm',
    radius: 'full',
    hover_effect: 'none'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
