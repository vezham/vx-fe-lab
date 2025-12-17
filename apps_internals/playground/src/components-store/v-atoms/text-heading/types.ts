import { ReactNode } from 'react'

import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends HTMLHeroUIProps<'div'>, tvProps {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  content?: string | ReactNode
}
const useProps = (originalProps: Props) => {
  const { ref, ...restProps } = originalProps

  const [props, variantProps] = mapPropsVariants(restProps, tva.variantKeys)

  const { as, id, children, className, classNames, content, ...otherProps } =
    props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => {
    const baseProps = {
      id,
      ref: domRef,
      className: slots.base({
        class: cn(classNames?.base, className)
      }),
      ...otherProps
    }

    return {
      ...baseProps,
      children: content !== undefined ? content : children
    }
  }

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    // data
    content
  }
}

export { useProps }
export type { Props }
