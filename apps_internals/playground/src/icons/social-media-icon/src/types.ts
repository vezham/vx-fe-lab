import { IconProps } from '@iconify/react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import { HTMLHeroUIProps, PropGetter } from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'

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

interface Props extends HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  icon?: IconProps
  handler: SocialMediaHandle
}

const useProps = (props: Props) => {
  const {
    as,
    id,
    ref,
    children,
    className,
    icon = { size: 'sm', hover_effect: 'glow' },
    handler,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: cn('vicon-sm', className),
    ...icon,
    ...otherProps
  })

  return {
    Component,
    domRef,
    children,
    getBaseProps,

    // otherProps
    handler
  }
}

export { useProps }
export type { Props }
