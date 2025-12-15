import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

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

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  handles: SocialMediaHandle[]
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
    handles = [],
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

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    // otherProps
    handles
  }
}

export { useProps }
export type { Props, Platform, SocialMediaHandle }
