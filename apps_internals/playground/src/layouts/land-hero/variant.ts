import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex min-h-screen flex-col items-center md:flex-row',
    content: 'flex w-full flex-col',
    imageWrapper: 'flex w-full justify-center',
    image: 'h-auto w-full object-cover',
    actions: 'flex flex-col gap-2 sm:flex-row',
    actionsize: 'w-full md:w-auto',
    title: 'text-default-600',
    subtitle: '',
    description: ''
  },
  variants: {
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
        base: 'gap-2 px-2 py-3',
        content: 'gap-3',
        title: 'text-2xl',
        subtitle: 'text-2xl font-bold',
        description: 'text-base',
        actions: 'gap-2'
      },
      md: {
        base: 'gap-3 px-4 py-5',
        content: 'gap-3 md:gap-4',
        title: 'text-3xl sm:text-3xl',
        subtitle: 'text-2xl font-bold sm:text-3xl',
        description: 'text-base',
        actions: 'gap-3'
      },
      lg: {
        base: 'gap-4 px-5 py-8',
        content: 'gap-3 lg:gap-5',
        title: 'text-3xl sm:text-3xl lg:text-4xl',
        subtitle: 'text-2xl text-4xl font-bold sm:text-3xl',
        description: 'text-lg',
        actions: 'gap-4'
      },
      xl: {
        base: 'gap-4 px-5 py-12',
        content: 'gap-3 lg:gap-6',
        title: 'text-3xl sm:text-4xl lg:text-5xl',
        subtitle: 'text-2xl font-bold sm:text-4xl lg:text-5xl',
        description: 'text-xl',
        actions: 'gap-5'
      }
    }
  },

  defaultVariants: {
    align: 'left',
    size: 'xl'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
