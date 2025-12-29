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
  panel: ReactNode
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
    menu,
    panel,
    scrollShadowProps = {},
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva({
    ...variantProps
  })

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
    className: slots.content({ class: classNames?.content })
  })

  const getPanelProps: PropGetter = () => ({
    className: slots.panel({ class: classNames?.panel })
  })

  const getMenuWrapperProps: PropGetter = () => ({
    className: slots.menu_wrapper({ class: classNames?.menu_wrapper })
  })

  const getMenuProps: PropGetter = () => ({
    className: slots.menu({ class: classNames?.menu })
  })

  const getMenuLabelProps = (className = '') => ({
    className: slots.menu_label({
      class: cn(classNames?.menu_label, className)
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
    getContentProps,
    getPanelProps,
    getMenuWrapperProps,
    getMenuProps,
    getMenuLabelProps,
    header,
    footer,
    menu,
    panel,
    scrollShadowProps
  }
}

export { useProps }
export type { Props }
