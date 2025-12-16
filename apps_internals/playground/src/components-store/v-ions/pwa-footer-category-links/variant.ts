import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'grid w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:max-w-6xl',
    categoryContainer: 'flex flex-col py-2',
    list: 'list-none',
    listItem: 'm-1 md:m-2 lg:m-2',
    link: 'transition-colors duration-200'
  },
  variants: {
    layout: {
      desktop: '',
      tablet: '',
      mobile: ''
    },
    columns: {
      4: '',
      5: '',
      3: '',
      2: ''
    },
    alignment: {
      center: '',
      start: '',
      end: ''
    }
  },
  compoundVariants: [
    // Desktop layout
    {
      layout: 'desktop',
      class: {
        list: 'mt-4',
        base: 'justify-items-center'
      }
    },
    // Tablet & Mobile layout
    {
      layout: ['tablet', 'mobile'],
      class: {
        list: 'flex flex-row flex-wrap gap-1',
        base: 'justify-items-start'
      }
    },
    // Mobile (small) layout
    {
      layout: 'mobile',
      columns: [2, 3, 4, 5],
      class: {
        base: '!justify-items-start'
      }
    },
    // Column count variants
    {
      columns: 4,
      class: {
        base: 'lg:grid-cols-4'
      }
    },
    {
      columns: 5,
      class: {
        base: 'lg:grid-cols-5'
      }
    },
    {
      columns: 3,
      class: {
        base: 'lg:grid-cols-3'
      }
    },
    {
      columns: 2,
      class: {
        base: 'lg:grid-cols-2'
      }
    },
    // Alignment variants
    {
      alignment: 'center',
      class: {
        base: 'justify-items-center text-center',
        categoryContainer: 'items-center',
        list: 'justify-center'
      }
    },
    {
      alignment: 'start',
      class: {
        base: 'justify-items-start text-left',
        categoryContainer: 'items-start',
        list: 'justify-start'
      }
    },
    {
      alignment: 'end',
      class: {
        base: 'justify-items-end text-right',
        categoryContainer: 'items-end',
        list: 'justify-end'
      }
    },
    // Responsive column adjustments
    {
      columns: [4, 5],
      layout: ['tablet', 'mobile'],
      class: {
        base: 'sm:grid-cols-2'
      }
    }
  ],
  defaultVariants: {
    layout: 'desktop',
    columns: 4,
    alignment: 'center'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
