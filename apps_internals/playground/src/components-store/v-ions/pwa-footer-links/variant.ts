import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex w-full flex-row flex-wrap items-center justify-center',
    link: 'hover:text-foreground text-foreground-400 transition-colors duration-200'
  },
  variants: {
    layout: {
      desktop: '',
      tablet: '',
      mobile: ''
    },
    gap: {
      normal: '',
      compact: '',
      spaced: ''
    },
    alignment: {
      center: '',
      start: '',
      end: '',
      between: '',
      around: ''
    },
    wrap: {
      wrap: '',
      nowrap: '',
      'wrap-reverse': ''
    }
  },
  compoundVariants: [
    // Layout-specific gap adjustments
    {
      layout: ['mobile', 'tablet'],
      gap: 'normal',
      class: {
        base: 'gap-y-0'
      }
    },
    {
      layout: 'desktop',
      class: {
        base: 'gap-2'
      }
    },
    // Gap size variants
    {
      gap: 'compact',
      class: {
        base: 'gap-2'
      }
    },
    {
      gap: 'spaced',
      class: {
        base: 'gap-8'
      }
    },
    {
      gap: 'normal',
      layout: 'desktop',
      class: {
        base: 'gap-4 sm:gap-6'
      }
    },
    {
      gap: 'normal',
      layout: ['mobile', 'tablet'],
      class: {
        base: 'gap-4'
      }
    },
    // Alignment variants
    {
      alignment: 'center',
      class: {
        base: 'justify-center'
      }
    },
    {
      alignment: 'start',
      class: {
        base: 'justify-start'
      }
    },
    {
      alignment: 'end',
      class: {
        base: 'justify-end'
      }
    },
    {
      alignment: 'between',
      class: {
        base: 'justify-between'
      }
    },
    {
      alignment: 'around',
      class: {
        base: 'justify-around'
      }
    },
    // Wrap behavior variants
    {
      wrap: 'nowrap',
      class: {
        base: 'flex-nowrap overflow-x-auto'
      }
    },
    {
      wrap: 'wrap',
      class: {
        base: 'flex-wrap'
      }
    },
    {
      wrap: 'wrap-reverse',
      class: {
        base: 'flex-wrap-reverse'
      }
    },
    // Mobile-specific adjustments
    {
      layout: 'mobile',
      wrap: 'nowrap',
      class: {
        base: 'scrollbar-hide overflow-x-scroll'
      }
    }
  ],
  defaultVariants: {
    layout: 'desktop',
    gap: 'normal',
    alignment: 'center',
    wrap: 'wrap'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
