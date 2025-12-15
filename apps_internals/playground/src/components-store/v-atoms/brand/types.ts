import { ReactNode } from 'react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

export type BrandIcon = {
  icon: ReactNode
  label?: string
}
export type BrandUrl = string

export type Logo = BrandIcon | BrandUrl

export interface BrandType {
  logo: Logo
  title?: string
  url?: string
  target?: '_self'
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  brand: BrandType
  divider?: boolean
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
    brand,
    divider = true,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({
      class: cn(classNames?.base, className)
    }),
    ...otherProps
  })

  const getLogoContainerProps: PropGetter = () => ({
    className: slots.logoContainer({
      class: classNames?.logoContainer
    })
  })

  const getLogoImageProps: PropGetter = () => ({
    className: slots.logoImage({
      class: classNames?.logoImage
    })
  })

  const getLogoIconProps: PropGetter = () => ({
    className: slots.logoIcon({
      class: classNames?.logoIcon
    })
  })

  const getLabelProps: PropGetter = () => ({
    className: slots.label({
      class: classNames?.label
    })
  })

  const getDividerProps: PropGetter = () => ({
    className: slots.divider({
      class: classNames?.divider
    })
  })

  const getSubtitleProps: PropGetter = () => ({
    className: slots.subtitle({
      class: classNames?.subtitle
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getLogoContainerProps,
    getLogoImageProps,
    getLogoIconProps,
    getLabelProps,
    getDividerProps,
    getSubtitleProps,

    // otherProps
    brand,
    divider
  }
}

export { useProps }
export type { Props }
