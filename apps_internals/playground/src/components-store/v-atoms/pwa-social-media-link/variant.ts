import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'text-default-400 my-4 flex flex-row flex-wrap items-center justify-center gap-6'
  },
  variants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
