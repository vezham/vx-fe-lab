import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: ['flex', 'items-center', 'justify-center', 'rounded-full', 'w-full'],
    illustration: ['']
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
