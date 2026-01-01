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

export type Align = 'left' | 'center' | 'right'
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface CardIcon {
  name: string
  size?: number
  color?: string
}

export interface CardImage {
  src: string
  alt?: string
}

export interface CardLogo {
  src: string
  alt?: string
  width?: number
  height?: number
}

export interface CardAction {
  id?: string
  label: string
  href?: string
  onClick?: () => void
  disabled?: boolean
  variant?: 'solid' | 'bordered' | 'light' | 'ghost'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

interface Props extends tvProps, HTMLHeroUIProps<'div', 'content'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>

  // Card content
  icon?: CardIcon
  logo?: CardLogo
  image?: CardImage

  title?: string | ReactNode
  subtitle?: string | ReactNode
  description?: string | string[] | ReactNode

  actions?: CardAction[]

  // Explicit props (overrides variants)
  align?: Align
  size?: SizeVariant

  // Image background
  imageAsBackground?: boolean

  // Event handlers
  onClick?: () => void
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

    // Card content
    icon,
    logo,
    image,
    title,
    subtitle,
    description,
    actions,

    // Explicit props
    align,
    size,

    // Image
    imageAsBackground,

    // Events
    onClick,

    ...otherProps
  } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)

  // Determine layout based on props
  const layout = imageAsBackground
    ? 'imageBackground'
    : image
      ? 'image'
      : logo || icon
        ? logo && title
          ? 'header'
          : 'default'
        : 'default'

  const slots = tva({
    ...variantProps,
    layout,
    hasImage: !!image,
    imageBackground: !!imageAsBackground,
    align: align || variantProps.align,
    size: size || variantProps.size
  })

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({
      class: cn(classNames?.base, className)
    }),
    onClick,
    ...otherProps
  })

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getLogoProps: PropGetter = () => ({
    className: slots.logo({ class: classNames?.logo })
  })

  const getIconProps: PropGetter = () => ({
    className: slots.icon({ class: classNames?.icon })
  })

  const getImageWrapperProps: PropGetter = () => ({
    className: slots.imageWrapper({ class: classNames?.imageWrapper })
  })

  const getImageProps: PropGetter = () => ({
    className: slots.image({ class: classNames?.image })
  })

  const getLogoImageProps: PropGetter = () => ({
    className: slots.logoimage({ class: classNames?.logoimage })
  })

  const getBodyProps: PropGetter = () => ({
    className: slots.body({ class: classNames?.body })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getSubtitleProps: PropGetter = () => ({
    className: slots.subtitle({ class: classNames?.subtitle })
  })

  const getDescriptionProps: PropGetter = () => ({
    className: slots.description({ class: classNames?.description })
  })

  const getFooterProps: PropGetter = () => ({
    className: slots.footer({ class: classNames?.footer })
  })

  const getActionProps: PropGetter = (action: CardAction) => ({
    className: slots.action({ class: classNames?.action }),
    onClick: action.onClick,
    href: action.href,
    disabled: action.disabled
  })

  return {
    Component,
    domRef,
    slots,
    classNames,

    // Props
    icon,
    logo,
    image,
    title,
    subtitle,
    description,
    actions,
    imageAsBackground,

    // Prop getters
    getBaseProps,
    getHeaderProps,
    getLogoProps,
    getIconProps,
    getImageWrapperProps,
    getImageProps,
    getLogoImageProps,
    getBodyProps,
    getTitleProps,
    getSubtitleProps,
    getDescriptionProps,
    getFooterProps,
    getActionProps,

    // Other
    children,
    ...otherProps
  }
}

export { useProps }
export type { Props }
