import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex h-screen w-full flex-col items-center justify-center gap-2 p-6',
    heading: 'text-default-400 my-2.5',
    paragraph: 'text-default-400 mb-2 pt-3 text-center',
    button: ''
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
