import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

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

const config: Record<Platform, string> = {
  mail: 'mdi:email',
  phone: 'mdi:phone',
  linkedin: 'mdi:linkedin',
  twitter: 'mdi:twitter',
  x: 'simple-icons:x',
  facebook: 'mdi:facebook',
  instagram: 'mdi:instagram',
  whatsapp: 'mdi:whatsapp',
  threads: 'simple-icons:threads',
  tiktok: 'simple-icons:tiktok',
  mastodon: 'simple-icons:mastodon',
  bluesky: 'simple-icons:bluesky',
  clipboard: 'mdi:clipboard-outline',
  share_link: 'mdi:link-variant'
}

const DEFAULT_ICON = 'mdi:help-circle-outline'

const SocialMediaIcon = forwardRef<'div', Props>((props, ref) => {
  const { getBaseProps, handler } = useProps({
    ...props,
    ref
  })

  const iconName = config[handler.name] || DEFAULT_ICON

  return <Icon width={24} height={24} icon={iconName} {...getBaseProps()} />
})

SocialMediaIcon.displayName = 'SocialMediaIcon'

export { SocialMediaIcon }
