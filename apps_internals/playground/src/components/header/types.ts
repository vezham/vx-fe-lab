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

export interface HeaderNavBaseItem {
  id: string
  label: string
  icon?: ReactNode
  description?: string
}

export interface HeaderNavLinkItem extends HeaderNavBaseItem {
  type: 'link'
  href: string
}

export interface HeaderNavGridColumn {
  id: string
  title?: string
  items: HeaderNavLinkItem[]
  showMoreLink?: {
    label: string
    href: string
  }
}

export interface HeaderNavGridItem extends HeaderNavBaseItem {
  type: 'grid'
  columns?: number
  items: HeaderNavGridColumn[]
}

export type HeaderNavItem = HeaderNavLinkItem | HeaderNavGridItem

export interface HeaderBrandProps {
  logo?: ReactNode | string
  name?: string
  href?: string
}

export interface HeaderActionItem {
  id: string
  label: string
  href?: string
  onClick?: () => void
}

export type HeaderPosition = 'left' | 'right'
export type HeaderOrientation = 'horizontal' | 'vertical'
export type HeaderPlacement = 'top' | 'bottom'
export type HeaderItems = 3 | 4 | 5

interface HeaderProps extends Omit<HTMLHeroUIProps<'nav'>, 'content'>, tvProps {
  ref?: ReactRef<HTMLElement | null>
  brand?: HeaderBrandProps
  nav?: HeaderNavItem[]
  actions?: HeaderActionItem[]
  items: HeaderItems
  orientation?: HeaderOrientation
  position?: HeaderPosition
  placement?: HeaderPlacement
  classNames?: SlotsToClasses<tvSlots>
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    className,
    classNames,
    brand,
    nav,
    actions,
    ...otherProps
  } = props

  const Component = as || 'nav'
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

  const getBrandProps: PropGetter = () => ({
    className: slots.brand({ class: classNames?.brand })
  })

  const getNavItemProps: PropGetter = () => ({
    className: slots.nav({ class: classNames?.nav })
  })

  const getActionsProps: PropGetter = () => ({
    className: slots.actions({ class: classNames?.actions })
  })
  return {
    Component,
    slots,
    classNames,
    brand,
    nav,
    actions,
    variantProps,
    getBaseProps,
    getBrandProps,
    getNavItemProps,
    getActionsProps
  }
}

export { useProps }
export type { HeaderProps }
