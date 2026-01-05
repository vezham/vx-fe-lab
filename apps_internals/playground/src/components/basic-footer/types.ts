import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

type FooterLink = {
  name: string
  href: string
}

type SocialItem = {
  name: string
  href: string
  icon?: string
}

interface FooterColumn {
  type: 'logo' | 'links'
  title?: string
  logo?: string
  logoAlt?: string
  logoClassName?: string
  icon?: string
  links?: FooterLink[]
  socialLinks?: SocialItem[]
}

interface Props extends tvProps, HTMLHeroUIProps<'footer'> {
  ref?: ReactRef<HTMLElement | null>
  classNames?: SlotsToClasses<tvSlots>
  columns: FooterColumn[]
  logo?: string
  tagline?: string
  showSocialIcons?: boolean
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
    columns = [],
    logo = 'https://static.cdn.vezham.com/images/logo-black.png',
    tagline = '',
    showSocialIcons = true,
    ...otherProps
  } = props

  const Component = as || 'footer'
  const domRef = useDOMRef(ref)
  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getContainerProps: PropGetter = () => ({
    className: slots.container({ class: classNames?.container })
  })

  const getGridWrapperProps: PropGetter = () => ({
    className: slots.grid_wrapper({ class: classNames?.grid_wrapper })
  })

  const getColumnProps: PropGetter = () => ({
    className: slots.column({ class: classNames?.column })
  })

  const getLogoColumnProps: PropGetter = () => ({
    className: slots.logo_column({ class: classNames?.logo_column })
  })

  const getLogoWrapperProps: PropGetter = () => ({
    className: slots.logo_wrapper({ class: classNames?.logo_wrapper })
  })

  const getTaglineProps: PropGetter = () => ({
    className: slots.tagline({ class: classNames?.tagline })
  })

  const getSocialWrapperProps: PropGetter = () => ({
    className: slots.social_wrapper({ class: classNames?.social_wrapper })
  })

  const getListColumnProps: PropGetter = () => ({
    className: slots.list_column({ class: classNames?.list_column })
  })

  const getListTitleWrapperProps: PropGetter = () => ({
    className: slots.list_title_wrapper({
      class: classNames?.list_title_wrapper
    })
  })

  const getListTitleProps: PropGetter = () => ({
    className: slots.list_title({ class: classNames?.list_title })
  })

  const getListUlProps: PropGetter = () => ({
    className: slots.list_ul({ class: classNames?.list_ul })
  })

  const getListItemProps: PropGetter = () => ({
    className: slots.list_item({ class: classNames?.list_item })
  })

  const getListLinkProps: PropGetter = () => ({
    className: slots.list_link({ class: classNames?.list_link })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getContainerProps,
    getGridWrapperProps,
    getColumnProps,
    getLogoColumnProps,
    getLogoWrapperProps,
    getTaglineProps,
    getSocialWrapperProps,
    getListColumnProps,
    getListTitleWrapperProps,
    getListTitleProps,
    getListUlProps,
    getListItemProps,
    getListLinkProps,
    columns,
    logo,
    tagline,
    showSocialIcons
  }
}

export { useProps }
export type { Props, FooterColumn, FooterLink, SocialItem }
