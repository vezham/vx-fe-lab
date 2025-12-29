import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'p-2',
    header: 'z-10',
    footer: '',
    content: '',
    panel: 'bg-default flex flex-col gap-2 rounded-xl p-4 shadow-md',
    menu_wrapper: '',
    menu: 'flex flex-col items-center justify-center gap-2',
    menu_label: 'text-default-400 !text-center'
  },
  variants: {
    empty_menu: {
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
    },
    sidebarHidden: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    // Desktop, Laptop, TabletLarge - Normal layout
    {
      device: ['desktop', 'tablet', 'mobile'],
      class: {
        base: 'relative flex h-screen w-auto flex-col items-center gap-2',
        header: 'flex w-full items-start',
        footer: 'flex w-full items-start justify-start',
        content: 'relative flex h-dvh max-h-dvh w-full gap-2',
        menu_wrapper:
          'flex h-full w-24 flex-col items-center justify-center gap-2'
      }
    },

    {
      empty_menu: true,
      class: {
        menu_wrapper: 'hidden'
      }
    },
    {
      sidebarHidden: true,
      class: {
        panel: 'hidden'
      }
    },

    {
      class: {
        menu: [
          'cursor-pointer transition-all duration-200',
          'hover:[&_.vsidebar-text]:break-words',
          'hover:[&_.vsidebar-text]:whitespace-normal',
          'hover:[&_.vsidebar-text]:overflow-wrap-break-word'
        ]
      }
    },
    {
      class: {
        panel: [
          'bg-default/95',
          'dark:bg-default/95',
          'shadow-md',
          'backdrop-blur-sm'
        ]
      }
    }
  ],
  defaultVariants: {
    empty_menu: false,
    device: 'desktop',
    sidebarHidden: false,
    layout: 'normal'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
