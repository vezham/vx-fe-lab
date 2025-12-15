import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'my-6 flex flex-row flex-wrap items-center justify-center gap-6'
  },
  variants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
