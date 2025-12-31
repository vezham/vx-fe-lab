import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex h-screen items-center',
    content: 'flex w-full flex-col',
    imageWrapper: 'flex w-full justify-center',
    image: 'h-auto w-full object-cover',
    actions: 'flex flex-wrap gap-2',
    actionsize: 'w-full sm:w-auto',
    title: 'text-default-600',
    subtitle: '',
    description: ''
  },
  variants: {
    orientation: {
      horizontal: '',
      vertical: ''
    },
    align: {
      left: {
        content: 'text-left',
        actions: 'justify-start'
      },
      center: {
        content: 'text-center',
        actions: 'justify-center'
      },
      right: {
        content: 'text-right',
        actions: 'justify-end'
      }
    },
    size: {
      sm: {
        base: 'gap-2 px-2 py-6',
        content: 'gap-3',
        title: 'text-2xl',
        subtitle: 'text-2xl font-bold',
        description: 'text-base',
        actions: 'gap-2'
      },
      md: {
        base: 'gap-3 px-4 py-8',
        content: 'gap-3 md:gap-4',
        title: 'text-2xl sm:text-3xl',
        subtitle: 'text-2xl font-bold sm:text-3xl',
        description: 'text-base',
        actions: 'gap-3'
      },
      lg: {
        base: 'gap-4 px-5 py-12',
        content: 'gap-3 lg:gap-5',
        title: 'text-2xl sm:text-3xl lg:text-4xl',
        subtitle: 'text-2xl text-4xl font-bold sm:text-3xl',
        description: 'text-lg',
        actions: 'gap-4'
      },
      xl: {
        base: 'gap-4 px-5 py-16',
        content: 'gap-3 lg:gap-6',
        title: 'text-2xl sm:text-4xl lg:text-5xl',
        subtitle: 'text-2xl font-bold sm:text-4xl lg:text-5xl',
        description: 'text-xl',
        actions: 'gap-5'
      }
    },
    direction: {
      ltr: '',
      rtl: ''
    }
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      class: {
        base: 'flex-col md:flex-row'
      }
    },
    {
      orientation: 'vertical',
      class: {
        base: 'flex-col'
      }
    },

    {
      orientation: 'horizontal',
      direction: 'rtl',
      class: {
        base: 'flex-col-reverse md:flex-row-reverse'
      }
    },
    {
      orientation: 'vertical',
      direction: 'rtl',
      class: {
        base: 'flex-col-reverse'
      }
    }
  ],
  defaultVariants: {
    orientation: 'horizontal',
    align: 'left',
    size: 'xl',
    direction: 'ltr'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
