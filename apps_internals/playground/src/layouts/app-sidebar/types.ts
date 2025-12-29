import { ReactNode } from 'react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'
import { ScrollShadowProps } from '@vezham/react/v2'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  header?: ReactNode
  footer?: ReactNode
  content: ReactNode
  scrollShadowProps?: Partial<ScrollShadowProps>
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
    header,
    footer,
    content,
    scrollShadowProps = {},
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getFooterProps: PropGetter = () => ({
    className: slots.footer({ class: classNames?.footer })
  })

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: classNames?.content }),
    ...scrollShadowProps
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getHeaderProps,
    getFooterProps,
    getContentProps,
    header,
    footer,
    content
  }
}

export { useProps }
export type { Props }
