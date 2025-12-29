import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'relative h-screen w-full',
    themeLayout: ''
  },

  variants: {
    theme: {
      default: {
        themeLayout: 'h-full w-full'
      },
      theme1: {
        themeLayout: 'absolute top-0 h-screen w-screen'
      },
      theme2: {
        themeLayout: 'absolute inset-0 h-full w-full'
      },
      theme3: {
        themeLayout: 'absolute inset-0 h-full w-full bg-[size:14px_24px]'
      },
      theme4: {
        themeLayout:
          'absolute inset-0 h-full w-full [background-size:16px_16px]'
      },
      theme5: {
        themeLayout: 'absolute inset-0 h-full w-full bg-[size:6rem_4rem]'
      }
    },

    /** ✅ ADD MODE VARIANT */
    mode: {
      light: {},
      dark: {}
    }
  },

  compoundVariants: [
    {
      theme: 'default',
      mode: 'light',
      class: {
        themeLayout:
          'bg-[linear-gradient(180deg,rgb(234,234,234)20%,rgb(255,255,255))]'
      }
    },
    {
      theme: 'default',
      mode: 'dark',
      class: {
        themeLayout: 'bg-[linear-gradient(180deg,rgb(33,36,40)20%,rgb(0,0,0))]'
      }
    },
    {
      theme: 'theme1',
      mode: 'light',
      class: {
        themeLayout:
          'bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'
      }
    },
    {
      theme: 'theme1',
      mode: 'dark',
      class: {
        themeLayout:
          'bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(120,119,198,0.3)_100%)]'
      }
    },
    {
      theme: 'theme2',
      mode: 'light',
      class: {
        themeLayout:
          'bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]'
      }
    },
    {
      theme: 'theme2',
      mode: 'dark',
      class: {
        themeLayout:
          '[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'
      }
    },
    {
      theme: 'theme3',
      mode: 'light',
      class: {
        themeLayout:
          'bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]'
      }
    },
    {
      theme: 'theme3',
      mode: 'dark',
      class: {
        themeLayout:
          'bg-[linear-gradient(to_right,#ffffff26_1px,transparent_1px),linear-gradient(to_bottom,#ffffff26_1px,transparent_1px)]'
      }
    },
    {
      theme: 'theme4',
      mode: 'light',
      class: {
        themeLayout:
          'bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]'
      }
    },
    {
      theme: 'theme4',
      mode: 'dark',
      class: {
        themeLayout: 'bg-[radial-gradient(#626262_1px,transparent_1px)]'
      }
    },
    {
      theme: 'theme5',
      mode: 'light',
      class: {
        themeLayout:
          'bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]'
      }
    },
    {
      theme: 'theme5',
      mode: 'dark',
      class: {
        themeLayout:
          'bg-[linear-gradient(to_right,#ffffff26_1px,transparent_1px),linear-gradient(to_bottom,#ffffff26_1px,transparent_1px)]'
      }
    }
  ],

  /** ✅ DEFAULT VARIANTS NOW WORK */
  defaultVariants: {
    theme: 'theme1',
    mode: 'dark'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
