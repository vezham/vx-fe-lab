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

type ListStyle = 'square' | 'box' | 'triangle' | 'circle' | 'star'

interface ListItem {
  label: ReactNode
  content?: ReactNode | string
}

const iconMap: Record<ListStyle, string> = {
  square: 'mdi:square',
  box: 'mdi:checkbox-blank-outline',
  triangle: 'mdi:triangle',
  circle: 'mdi:circle',
  star: 'mdi:star'
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  title?: ReactNode
  style?: ListStyle
  items: ListItem[]
  iconMap?: Record<ListStyle, string>
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
    title,
    style = 'circle',
    items,
    iconMap: customIconMap,
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

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getListProps: PropGetter = () => ({
    className: slots.list({ class: classNames?.list })
  })

  const getListItemProps: PropGetter = () => ({
    className: slots.list_item({ class: classNames?.list_item })
  })

  const getIconProps: PropGetter = () => ({
    icon: customIconMap?.[style] || iconMap[style],
    className: slots.icon({ class: classNames?.icon })
  })

  const getLabelProps: PropGetter = () => ({
    className: slots.label({ class: classNames?.label })
  })

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: classNames?.content })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getTitleProps,
    getListProps,
    getListItemProps,
    getIconProps,
    getLabelProps,
    getContentProps,
    items,
    title,
    style
  }
}

export { useProps }
export type { Props, ListItem, ListStyle }
