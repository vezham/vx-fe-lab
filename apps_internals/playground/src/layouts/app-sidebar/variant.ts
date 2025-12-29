import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'relative flex h-full w-full flex-col',
    header: 'shrink-0',
    footer: 'shrink-0',
    content: 'min-h-0 flex-1 overflow-hidden'
  },

  variants: {
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
    direction: {
      ltr: '',
      rtl: ''
    },
    sidebarHidden: {
      true: '',
      false: ''
    },
    layout: {
      normal: '',
      compact: ''
    }
  },

  compoundVariants: [
    // Desktop / Laptop / TabletLarge - Normal
    {
      device: ['desktop'],
      sidebarHidden: false,

      layout: 'normal',
      class: {
        base: 'gap-2 p-2',
        content: 'flex flex-col gap-1'
      }
    },

    {
      device: ['desktop'],
      sidebarHidden: true,
      layout: 'normal',
      class: {
        base: 'gap-2 p-2',
        content: 'hidden'
      }
    },

    {
      device: ['tablet'],
      sidebarHidden: true,
      layout: 'normal',
      class: {
        base: 'gap-2 p-2',

        content: 'hidden'
      }
    },

    {
      device: ['tablet'],
      direction: 'ltr',
      layout: 'normal',
      sidebarHidden: false,
      class: {
        header: 'absolute top-4 left-4',
        footer: 'absolute top-4 right-4',
        content: 'grid gap-2 px-4 pt-20'
      }
    },

    {
      device: ['tablet'],
      direction: 'rtl',
      layout: 'normal',
      sidebarHidden: false,
      class: {
        header: 'absolute top-4 right-4',
        footer: 'absolute top-4 left-4',
        content: 'grid gap-2 px-4 pt-20'
      }
    },

    {
      layout: 'compact',
      class: {
        base: 'gap-2 p-2',
        content: 'grid min-h-0 flex-1 gap-2',
        header: 'bg-background sticky top-0 z-20',
        footer: 'bg-background sticky bottom-0 z-20'
      }
    }
  ],

  defaultVariants: {
    device: 'desktop',
    direction: 'ltr',
    sidebarHidden: true,
    layout: 'normal'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
