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

type BrandIcon = {
  icon: ReactNode
  label?: string
}
type BrandUrl = string

type Logo = BrandIcon | BrandUrl

interface Brand {
  logo: Logo
  title?: string
  url?: string
  target?: '_self'
}

interface Link {
  __type?: 'link' | 'button'
  id?: string
  className?: string
  label?: string
  url?: string
  target?: string
  onClick?: () => void
}

interface CategoryLink {
  label: string
  links?: Link[]
}

type Platform =
  | 'clipboard'
  | 'share_link'
  | 'mail'
  | 'phone'
  | 'linkedin'
  | 'twitter'
  | 'x'
  | 'facebook'
  | 'instagram'
  | 'threads'
  | 'whatsapp'
  | 'tiktok'
  | 'mastodon'
  | 'bluesky'
  | string

type SocialMediaHandle = {
  name: Platform
  handle?: string
  target?: '_self'
}

interface SysStatus {
  status?: 'none' | 'success' | 'warning' | 'danger'
  label?: string
  url?: string
  // target?: '_self' | '_blank'
}

type SystemStatusProps = SysStatus

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  brand: Brand
  category_links?: CategoryLink[]
  social_accounts?: SocialMediaHandle[]
  newsletter: ReactNode
  system_status?: SystemStatusProps
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
    category_links = [],
    social_accounts = [],
    newsletter,
    system_status,
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

  const getNewsletterContainerProps: PropGetter = () => ({
    className: slots.newsletterContainer({
      class: classNames?.newsletterContainer
    })
  })

  const getBrandProps: PropGetter = () => ({
    className: slots.brand({
      class: classNames?.brand
    })
  })

  const getFooterLinkProps: PropGetter = () => ({
    className: slots.footerLink({
      class: classNames?.footerLink
    })
  })

  const getSocialMediaProps: PropGetter = () => ({
    className: slots.socialMedia({
      class: classNames?.socialMedia
    })
  })

  const getSystemStatusProps: PropGetter = () => ({
    className: slots.systemStatus({
      class: classNames?.systemStatus
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getNewsletterContainerProps,
    getBrandProps,
    getFooterLinkProps,
    getSocialMediaProps,
    getSystemStatusProps,

    // otherProps
    brand,
    category_links,
    social_accounts,
    newsletter,
    system_status
  }
}

export { useProps }
export type { Props }
