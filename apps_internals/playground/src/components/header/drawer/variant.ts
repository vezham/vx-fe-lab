import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    drawer: 'hidden sm:block',
    drawerContent: '',
    drawerBody: 'p-6',
    drawerTitle: 'mb-6 text-xl font-semibold',
    drawerGrid:
      'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    column: 'space-y-4',
    columnTitle: 'text-default-700 text-base font-medium',
    columnList: 'space-y-1',
    subItem:
      'hover:bg-default-100 flex flex-col items-start rounded-lg p-3 transition-colors',
    subItemLabel: 'font-medium',
    subItemDescription: 'text-default-500 mt-0.5 text-xs',
    showMoreContainer: 'border-default-200 mt-3 border-t p-3',
    showMoreLink:
      'text-primary hover:text-primary-600 inline-flex items-center text-sm font-medium',
    showMoreIcon: 'ml-1'
  },
  variants: {
    placement: {
      top: '',
      bottom: ''
    },
    size: {
      sm: '',
      md: '',
      lg: ''
    }
  },
  defaultVariants: {
    placement: 'bottom',
    size: 'sm'
  }
})
type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>
export { tva }
export type { tvProps, tvSlots }
