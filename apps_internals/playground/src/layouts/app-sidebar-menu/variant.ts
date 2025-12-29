import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'p-2',
    header: '',
    footer: '',
    menu_wrapper: '',
    menu: '',
    menu_label: ''
  },
  variants: {
    empty_menu: {
      true: '',
      false: ''
    },
    is_active: {
      true: '',
      false: ''
    },
    device: {
      desktop: '',
      laptop: '',
      tabletLarge: '',
      tablet: '',
      mobileXLarge: '',
      mobileLarge: '',
      mobile: '',
      mobileSmall: ''
    }
  },
  compoundVariants: [
    {
      device: ['desktop', 'tablet', 'mobile'],
      class: {
        base: 'flex h-screen w-auto flex-col items-center gap-2',
        header: 'flex w-full items-start',
        menu: 'flex flex-col items-center',
        menu_wrapper:
          'relative flex h-dvh max-h-dvh w-full flex-col items-center justify-center gap-2',
        footer: 'flex w-full items-start justify-start'
      }
    },
    {
      empty_menu: true,
      class: {
        base: 'flex h-screen w-auto flex-col items-center justify-between gap-2',
        header: 'flex w-full items-start',
        footer: 'flex w-full items-start',

        menu_wrapper: 'hidden'
      }
    },
    {
      is_active: true,
      class: {
        menu: [
          'cursor-pointer',
          '[&_.vsidebar-text]:text-primary',
          '[&_.vsheet-icon_svg]:fill-primary',
          '[&_.vsheet-icon_svg]:!cursor-pointer'
        ],
        menu_label: 'text-primary'
      }
    },
    {
      is_active: false,
      class: {
        menu: [
          'transition-all duration-200',
          'hover:[&_.vsidebar-text]:text-default-900',
          'hover:[&_.vsidebar-text]:break-words',
          'hover:[&_.vsidebar-text]:whitespace-normal',
          'hover:[&_.vsheet-icon_svg]:fill-default-900',
          'hover:[&_.vsheet-icon_svg]:!cursor-pointer'
        ],
        menu_label: 'text-default-400'
      }
    }
  ],
  defaultVariants: {
    empty_menu: false,
    is_active: false,
    device: 'desktop'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
