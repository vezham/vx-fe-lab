import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'w-full bg-blue-950',
    container: 'px-4 pt-8 pb-24 sm:px-6 lg:px-8',
    grid_wrapper: 'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12',

    logo_column: 'col-span-full sm:col-span-2 lg:col-span-4',

    list_column: 'col-span-1 col-span-full lg:col-span-2',

    logo_wrapper: 'flex flex-col items-start space-y-4',
    tagline: 'text-default-500 max-w-xs text-sm',
    social_wrapper: 'mt-4 flex gap-4',
    list_title_wrapper: '',
    list_title: 'mb-4 text-sm font-semibold text-white',
    list_ul: 'space-y-2',
    list_item: '',
    list_link: 'text-default-400 hover:text-primary-500 text-sm'
  },

  defaultVariants: {
    variant: 'default'
  }
})

export type tvProps = VariantProps<typeof tva>
export type tvSlots = keyof ReturnType<typeof tva>
export { tva }
