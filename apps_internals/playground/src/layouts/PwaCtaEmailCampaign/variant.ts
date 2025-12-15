import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'rounded-medium bg-primary-500/60 flex flex-col p-4 backdrop-blur-md sm:flex-row sm:p-8',
    wrapperTitle: 'text-small font-semibold text-white',
    wrapperDescription: 'text-small text-default-300 mt-2',
    wrapperCta:
      'flex items-center justify-center gap-4 sm:mt-6 sm:max-w-md sm:gap-0',
    wrapperButton: 'sm:mt-0 sm:ml-4 sm:flex-shrink-0 rtl:sm:mr-4'
  },
  variants: {
    layout: {
      responsive: '',
      desktop: '',
      tablet: '',
      mobile: ''
    },
    fullWidth: {
      true: '',
      false: ''
    },
    alignment: {
      center: '',
      left: '',
      right: ''
    }
  },
  compoundVariants: [
    // Desktop & Laptop layout
    {
      layout: ['desktop', 'responsive'],
      class: {
        base: 'flex items-center gap-6 sm:gap-24',
        wrapperTitle: 'sm:w-3/5',
        wrapperCta: 'mt-0 sm:w-2/5'
      }
    },
    // Tablet layout
    {
      layout: 'tablet',
      class: {
        base: 'flex flex-col items-center justify-center gap-10',
        wrapperCta: 'flex items-center justify-center'
      }
    },
    // Mobile layout
    {
      layout: 'mobile',
      class: {
        base: 'flex flex-col gap-10',
        wrapperCta: 'flex flex-col items-start space-x-0'
      }
    },
    // Full width variants
    {
      fullWidth: true,
      class: {
        base: 'mx-6 my-4 lg:mx-8 xl:mx-auto xl:w-full xl:max-w-7xl'
      }
    },
    {
      fullWidth: false,
      class: {
        base: 'my-2'
      }
    },
    // Alignment variants
    {
      alignment: 'center',
      class: {
        base: 'text-center',
        wrapperTitle: 'text-center',
        wrapperDescription: 'text-center',
        wrapperCta: 'justify-center'
      }
    },
    {
      alignment: 'left',
      class: {
        base: 'text-left rtl:text-right',
        wrapperTitle: 'text-left rtl:text-right',
        wrapperDescription: 'text-left rtl:text-right',
        wrapperCta: 'justify-start'
      }
    },
    {
      alignment: 'right',
      class: {
        base: 'text-right rtl:text-left',
        wrapperTitle: 'text-right rtl:text-left',
        wrapperDescription: 'text-right rtl:text-left',
        wrapperCta: 'justify-end'
      }
    }
  ],
  defaultVariants: {
    layout: 'responsive',
    fullWidth: false,
    alignment: 'left'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
