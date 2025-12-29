import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'relative flex w-full overflow-hidden rounded-lg shadow-md',
    sidebar: 'h-auto max-h-screen p-4'
  },
  variants: {
    device: {
      desktop: '',
      laptop: '',
      tablet: '',
      tabletLarge: '',
      mobileLarge: '',
      mobile: '',
      mobileSmall: ''
    },
    sidebarWidth: {
      auto: '',
      sm: 'w-40',
      md: 'w-60',
      lg: 'w-80',
      xl: 'w-96'
    }
  },
  compoundVariants: [
    {
      device: ['desktop'],
      sidebarWidth: 'auto',
      class: {
        sidebar: 'lg:w-96 xl:w-96'
      }
    },
    {
      device: ['tablet'],
      sidebarWidth: 'auto',
      class: {
        sidebar: 'md:w-80 lg:w-80'
      }
    },
    {
      device: 'mobileLarge',
      sidebarWidth: 'auto',
      class: {
        sidebar: 'sm:w-60 md:w-60'
      }
    },
    {
      device: ['mobile'],
      sidebarWidth: 'auto',
      class: {
        sidebar: 'w-40 sm:w-40'
      }
    }
  ],
  defaultVariants: {
    device: 'mobile',
    sidebarWidth: 'auto'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
