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

interface Menu {
  id?: string
  className?: string
  icon: ReactNode
  label: string
  onClick?: () => void
}

interface MenuProps {
  selected?: string
  data: Menu[]
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  header?: ReactNode
  footer?: ReactNode
  menu: MenuProps
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
    menu,
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

  const getMenuWrapperProps: PropGetter = () => ({
    className: slots.menu_wrapper({ class: classNames?.menu_wrapper })
  })

  const getMenuProps = (is_active = false) => ({
    className: slots.menu({ class: classNames?.menu, is_active })
  })

  const getMenuLabelProps = (className = '', is_active = false) => ({
    className: slots.menu_label({
      class: cn(classNames?.menu_label, className),
      is_active
    })
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
    getMenuWrapperProps,
    getMenuProps,
    getMenuLabelProps,
    header,
    footer,
    menu
  }
}

export { useProps }
export type { Props }
