import { ReactRef, useDOMRef } from '@vezham/react-utils'
import { HTMLHeroUIProps, PropGetter } from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'

import {
  IconProps,
  useProps as useSheetIconProps
} from '../../../components-store/common/sheet-icon/types'

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
    icon = { size: 'sm', hoverEffect: 'glow' },
    handler,
    ...otherProps
  } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)

  const { getBaseProps: getIconBaseProps, getIconProps } =
    useSheetIconProps(icon)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: cn('', className),
    ...otherProps
  })

  return {
    Component,
    domRef,
    children,
    handler,

    // 👇 wrapper
    getBaseProps,

    // 👇 svg
    iconBaseProps: getIconBaseProps(),
    iconProps: getIconProps()
  }
}

export { useProps }
export type { Props }
