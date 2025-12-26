import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex w-full flex-col gap-2',
    global: 'rounded-lg'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
