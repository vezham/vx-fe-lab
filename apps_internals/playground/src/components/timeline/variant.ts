import { VariantProps, tv } from '@vezham/react-utils'

export const tva = tv({
  slots: {
    // Base slots
    base: 'flex flex-col items-center justify-center px-8 pb-24',
    container: 'mx-auto max-w-[52rem]',
    rightWrapper: 'relative w-full',

    // Timeline track & circle
    track: 'absolute left-1/2 hidden w-px -translate-x-1/2 md:block',
    circle:
      'absolute top-0 left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-all duration-300 md:block',

    // Article & layout
    article: '',
    space: 'space-y-16',

    // Content
    heading: 'text-default-foreground text-xl font-semibold',
    prose:
      'prose prose-slate prose-a:relative prose-a:z-10 text-default-500 mb-4 max-w-none',
    continueMainContainer: 'relative',
    continueOverlay:
      'absolute inset-x-0 bottom-0 flex h-32 items-end justify-center bg-gradient-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/90',

    // Author & metadata
    wrapper: 'sticky top-8',
    author: 'flex flex-col md:items-end',
    date: 'text-default-foreground text-sm leading-6 whitespace-nowrap',
    authorText: 'text-default-400 text-sm',
    tagsContainer:
      'mt-3 flex flex-nowrap gap-2 overflow-x-auto md:justify-end md:overflow-visible',

    // Links & rating
    link: 'text-sm',
    rating: 'flex items-center gap-2',

    // Tabs
    tabs: 'flex w-full items-center justify-center py-4',

    // Mobile specific slots
    mobileCard: '',
    mobileCardHeader: 'flex items-center justify-between',
    mobileCardBody: '',
    mobileCardFooter: '',
    mobileTitle: '',
    mobileTagsContainer: 'flex flex-wrap gap-1',
    mobileContent: 'prose prose-slate text-default-500 max-w-none text-sm',
    mobileContinueButton: 'text-xs shadow-sm',
    mobileImage: 'mt-3 rounded-lg',
    mobileReadMore: 'text-xs',
    mobileRating: 'mt-2 gap-1',

    // Image
    image: 'mt-4',

    // Legacy/Unused slots (kept for compatibility)
    timelineCard:
      'bg-content2 dark:bg-content2 absolute inset-x-4 inset-y-2.5 rounded-2xl md:inset-x-6 md:inset-y-4',
    circleLast: 'hidden',
    timelineCardWrapper: 'relative',
    continueWrapper: '',
    chip: 'flex-shrink-0'
  },

  variants: {
    // Main variants
    continueReading: {
      true: {
        prose: 'line-clamp-5 overflow-hidden',
        continueMainContainer: 'min-h-40',
        mobileContent: 'line-clamp-4 overflow-hidden'
      },
      false: {
        prose: '',
        continueMainContainer: '',
        mobileContent: ''
      }
    },

    active: {
      true: {
        circle:
          'border-primary bg-primary shadow-primary/50 scale-125 shadow-lg'
      },
      false: {
        circle: 'border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black'
      }
    },

    tagsCount: {
      single: {
        tagsContainer: 'flex-nowrap',
        mobileTagsContainer: 'flex-wrap gap-1'
      },
      multiple: {
        tagsContainer: 'flex-nowrap',
        mobileTagsContainer: 'flex-wrap gap-1'
      }
    },

    // Device variants
    device: {
      desktop: {
        article: 'lg:grid lg:grid-cols-12 lg:gap-8',
        author: 'lg:col-span-5',
        rightWrapper: 'lg:col-span-7',
        track: 'block',
        circle: 'block'
      },
      tablet: {
        article: 'md:grid md:grid-cols-12 md:gap-8',
        author: 'md:col-span-5',
        rightWrapper: 'md:col-span-7',
        track: 'block',
        circle: 'block'
      },
      mobile: {
        article: 'flex flex-col',
        author: 'w-full',
        rightWrapper: 'mt-4 w-full',
        track: 'hidden',
        circle: 'hidden',
        mobileCard:
          'rounded-2xl p-2 shadow-sm transition-shadow duration-300 hover:shadow-md'
      },
      mobileSmall: {
        article: 'flex flex-col',
        author: 'w-full',
        rightWrapper: 'mt-4 w-full',
        track: 'hidden',
        circle: 'hidden',
        mobileCard:
          'rounded-2xl p-2 shadow-sm transition-shadow duration-300 hover:shadow-md'
      }
    },

    // Direction variants
    direction: {
      ltr: {
        author: 'md:pr-8 md:text-right',
        rightWrapper: 'md:pl-8'
      },
      rtl: {
        author: 'md:pl-8 md:text-left',
        rightWrapper: 'md:pr-8'
      }
    },

    // Style variants
    variant: {
      default: {
        space: 'space-y-16',
        mobileCard: 'rounded-2xl p-2 shadow-sm'
      },
      compact: {
        space: 'space-y-8',
        prose: 'line-clamp-3',
        mobileContent: 'line-clamp-3'
      }
    }
  },

  compoundVariants: [
    {
      continueReading: true,
      variant: 'compact',
      class: {
        prose: 'line-clamp-3'
      }
    },
    {
      active: true,
      class: {
        circle:
          'border-primary bg-primary shadow-primary/50 scale-125 shadow-lg'
      }
    }
  ],

  defaultVariants: {
    continueReading: true,
    active: false,
    tagsCount: 'single',
    device: 'tablet',
    direction: 'ltr',
    variant: 'default'
  }
})

export type tvProps = VariantProps<typeof tva>
export type tvSlots = keyof ReturnType<typeof tva>
