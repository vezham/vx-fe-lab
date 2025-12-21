import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'z-50 w-full',
    navbarBase: 'max-w-none',
    navbarWrapper: 'max-w-none',
    brand: 'flex items-center gap-2',
    brandImage: 'h-8 w-auto',
    brandIcon: 'h-6 w-6',
    brandName: 'text-xl font-bold',
    nav: 'hidden items-center gap-6 sm:flex',
    navLink: 'transition-colors duration-200',
    navGridItem: 'relative',
    navGridTrigger:
      'flex cursor-pointer items-center gap-1 rounded-lg py-2 transition-colors duration-200',
    navGridIcon: 'text-sm',
    actions: 'flex items-center gap-3',
    actionLink: 'text-default-600 hover:text-default-900 transition-colors',
    actionButton: '',
    mobileToggle:
      '!data-[justify=start]:!flex-grow-0 !data-[justify=start]:!basis-auto !data-[justify=end]:!flex-grow-0 !data-[justify=end]:!basis-auto flex h-full !flex-grow-0 !basis-auto gap-4 sm:hidden',
    menu: 'gap-4 px-2 pt-6'
  },
  variants: {
    orientation: {
      horizontal: { base: 'flex flex-row items-center' },
      vertical: { base: 'flex flex-col' }
    },
    variant: {
      default: {
        base: 'bg-background/80 border-divider border-b backdrop-blur-md'
      },
      inherit: { base: 'bg-inherit' },
      current: { base: 'bg-current' },
      black: { base: 'bg-black' },
      white: { base: 'bg-white' },
      primary: { base: 'bg-primary' },
      secondary: { base: 'bg-secondary' },
      success: { base: 'bg-success' },
      warning: { base: 'bg-warning' }
    },
    placement: {
      top: { base: 'fixed top-0 right-0 left-0' },
      bottom: { base: 'fixed right-0 bottom-0 left-0' }
    },
    position: {
      left: { base: 'justify-between' },
      right: { base: 'justify-between' }
    },
    // Added a logic variant to handle state colors via slots
    isNavItemActive: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      position: 'right',
      class: {
        brand: 'order-3 ml-auto',
        nav: 'order-2 mx-auto',
        actions: 'order-1 mr-auto'
      }
    },
    {
      orientation: 'horizontal',
      position: 'left',
      class: {
        brand: 'order-1 mr-auto',
        nav: 'order-2 mx-auto',
        actions: 'order-3 ml-auto'
      }
    }
  ],
  defaultVariants: {
    orientation: 'horizontal',
    position: 'right',
    placement: 'top',
    variant: 'default'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
