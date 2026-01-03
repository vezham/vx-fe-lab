import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'relative mx-auto w-full',
    desktop_container: 'hidden md:block',
    mobile_container: 'grid snap-x snap-mandatory md:hidden',
    image_wrapper: 'absolute transition-all duration-500 ease-out',
    indicators_container: 'flex hidden justify-center gap-2 md:flex',
    indicator: 'h-2 w-10 rounded-full transition-all duration-300'
  },
  variants: {
    variant: {
      default: '',
      compact: {
        base: 'mx-auto max-w-4xl',
        image_wrapper: 'transition-all duration-300',
        indicator: 'h-0.5 w-8'
      },
      fullscreen: {
        base: '-mx-4 w-screen md:-mx-8',
        desktop_container: 'h-[400px] md:h-[500px]',
        indicator: 'h-1.5 w-12'
      }
    },

    /* ✅ ADD THIS */
    is_active: {
      true: {
        indicator: 'bg-primary'
      },
      false: {
        indicator: 'bg-default-300'
      }
    }
  },

  defaultVariants: {
    variant: 'default',
    is_active: false
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
