import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { ResizablePanelProps } from '../../components-store/v-ions/resizable'
import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  is_resizable?: boolean
  resizable?: ResizablePanelProps
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    is_resizable = true,
    resizable,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: cn(
      slots.base({ class: cn(classNames?.base, className) }),
      slots.global({ class: cn(classNames?.global, className) })
    ),
    ...otherProps
  })

  const getPanelProps = () => ({
    className: slots.global({ class: cn(classNames?.global, className) })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    // otherProps
    is_resizable,
    resizable,
    getPanelProps
  }
}

export { useProps }
export type { Props }
