import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'px-2 py-16 lg:px-6',
    card: 'relative p-2',
    card_header: 'flex flex-col items-center gap-3',
    card_body: 'items-center gap-6',
    card_footer: '',
    divider: '',
    price_container: 'flex items-end gap-1',
    price_text: 'text-5xl font-bold',
    price_suffix: 'pb-1 text-sm',
    feature_list: 'space-y-3',
    feature_item: 'flex items-center gap-2',
    button: '',
    tabs: ''
  },
  variants: {
    variant: {
      default: {
        base: 'bg-background',
        card: 'bg-card shadow-lg'
      },
      minimal: {
        base: 'bg-transparent',
        card: 'border bg-transparent'
      },
      gradient: {
        base: 'from-background to-secondary/20 bg-gradient-to-b',
        card: 'bg-card/80 backdrop-blur-sm'
      }
    },
    spacing: {
      compact: {
        base: 'py-8',
        card: 'p-4'
      },
      normal: {
        base: 'py-16',
        card: 'p-6'
      },
      spacious: {
        base: 'py-24',
        card: 'p-8'
      }
    },
    layout: {
      grid: {
        base: 'gris-cols-1 md:gris-cols-2 grid items-center justify-center gap-8 lg:grid-cols-3 lg:gap-2'
      },
      flex: {
        base: 'flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-2'
      }
    }
  },

  defaultVariants: {
    variant: 'minimal',
    spacing: 'normal',
    layout: 'flex'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
