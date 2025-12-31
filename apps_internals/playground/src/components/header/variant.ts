import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'z-100 w-full',
    navbarBase: 'max-w-none',
    navbarWrapper: 'max-w-none',
    brand: 'flex items-center gap-2 pl-2',
    brandImage: 'h-5 w-auto',
    brandIcon: 'h-6 w-6',
    brandName: 'text-default-800 dark:text-default-400 text-xl font-bold',
    nav: 'items-center gap-6',
    navLink: 'transition-colors duration-200',
    navGridItem: 'relative',
    navGridTrigger:
      'flex cursor-pointer items-center gap-1 rounded-lg py-2 transition-colors duration-200',
    navGridIcon: 'text-sm',
    actions: 'flex items-center gap-3',
    actionLink: '',
    actionButton: '',
    mobileToggle:
      '!data-[justify=start]:!flex-grow-0 !data-[justify=start]:!basis-auto !data-[justify=end]:!flex-grow-0 !data-[justify=end]:!basis-auto flex h-full !flex-grow-0 !basis-auto gap-4',
    menu: 'gap-4 px-2 pt-6'
  },
  variants: {
    orientation: {
      horizontal: { base: 'flex flex-row items-center' },
      vertical: { base: 'flex flex-col' }
    },
    items: {
      3: {
        nav: 'hidden sm:flex',
        actions: 'hidden sm:flex',
        mobileToggle: 'block sm:flex'
      },
      4: {
        nav: 'hidden md:flex',
        actions: 'hidden md:flex',
        mobileToggle: 'block md:flex'
      },
      5: {
        nav: 'hidden lg:flex',
        actions: 'hidden lg:flex',
        mobileToggle: 'block lg:flex'
      }
    },
    variant: {
      default: {
        navbarWrapper: 'bg-background/80 backdrop-blur-md'
      },
      inherit: { navbarWrapper: 'bg-inherit' },
      current: { navbarWrapper: 'bg-current' },
      black: { navbarWrapper: 'bg-black' },
      white: { navbarWrapper: 'bg-white' },
      primary: { navbarWrapper: 'bg-primary' },
      secondary: { navbarWrapper: 'bg-secondary' },
      success: { navbarWrapper: 'bg-success' },
      warning: { navbarWrapper: 'bg-warning' }
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
    },
    {
      items: 3,
      class: {
        nav: 'hidden sm:flex',
        actions: 'hidden sm:flex',
        mobileToggle: 'block sm:hidden'
      }
    },

    {
      items: 4,
      class: {
        nav: 'hidden md:flex',
        actions: 'hidden md:flex',
        mobileToggle: 'block md:hidden'
      }
    },

    {
      items: 5,
      class: {
        nav: 'hidden lg:flex',
        actions: 'hidden lg:flex',
        mobileToggle: 'block lg:hidden'
      }
    }
  ],
  defaultVariants: {
    orientation: 'horizontal',
    position: 'right',
    placement: 'top',
    variant: 'white',
    items: 3
  }
})
type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>
export { tva }
export type { tvProps, tvSlots }
