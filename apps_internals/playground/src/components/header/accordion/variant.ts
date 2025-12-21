import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'w-full',
    item: 'px-2',
    link: 'text-default-400 hover:text-primary transition-colors',
    activeLink: 'text-primary',
    accordion: 'w-full',
    accordionItem: 'px-0',
    accordionTitle: 'py-0',
    accordionHeading: 'p-0',
    accordionTrigger: 'px-0 py-2',
    columnContainer: 'space-y-6',
    column: 'space-y-3',
    columnTitle: 'text-default-700 text-sm font-medium',
    columnList: 'space-y-2',
    subItem: 'hover:bg-default-100 block rounded p-2 transition-colors',
    subItemLabel: 'font-medium',
    subItemDescription: 'text-default-500 mt-0.5 text-xs',
    showMoreContainer: 'border-default-200 mt-2 border-t border-b py-2',
    showMoreLink: 'text-primary hover:text-primary-600 text-sm font-medium',
    showMoreIcon: 'ml-1'
  },
  variants: {
    variant: {
      default: '',
      compact: {
        columnContainer: 'space-y-4',
        column: 'space-y-2',
        subItem: 'p-1.5'
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
