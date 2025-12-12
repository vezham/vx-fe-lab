// table/variant.ts
import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'w-full',
    wrapper: 'flex flex-col gap-6',
    header: 'flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between',
    subhead: 'mb-4 flex items-center justify-between',
    searchInput: 'w-full sm:max-w-[25%]',
    table: 'w-full',
    pagination: 'flex items-center justify-between px-2 py-2',
    selectedCount: 'text-small text-default-400'
  },
  variants: {
    size: {
      sm: {
        table: 'text-sm [&_td]:text-sm [&_th]:text-sm'
      },
      md: {
        table: 'text-base [&_td]:text-base [&_th]:text-base'
      },
      lg: {
        table: 'text-lg [&_td]:text-lg [&_th]:text-lg'
      }
    },
    striped: {
      true: {
        table:
          '[&_tbody_tr:nth-child(even)]:bg-default-100 dark:[&_tbody_tr:nth-child(even)]:bg-default-900'
      },
      false: {}
    },
    bordered: {
      true: {
        table: 'border-default-100 border'
      },
      false: {}
    },
    compact: {
      true: {
        table: '[&_td]:py-2 [&_th]:py-2'
      },
      false: {
        table: '[&_td]:py-4 [&_th]:py-4'
      }
    },
    shadow: {
      true: {
        base: 'rounded-lg shadow-md'
      },
      false: {}
    }
  },
  defaultVariants: {
    size: 'sm',
    striped: false,
    bordered: false,
    compact: true,
    shadow: false
  },
  compoundVariants: [
    {
      bordered: true,
      shadow: false,
      class: {
        base: 'border-default-200 border-1'
      }
    }
  ]
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
