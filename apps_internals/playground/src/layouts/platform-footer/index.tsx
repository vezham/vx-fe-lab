import { forwardRef } from '@vezham/react-utils'

import { Brand } from '../../components-store/v-atoms/brand'
import { FooterLink } from '../../components-store/v-atoms/footer-link'
import { PwaSocialMediaLink } from '../../components-store/v-atoms/pwa-social-media-link'
import { SystemStatus } from '../../components-store/v-atoms/system-status'
import { VezhamCraftedBy } from '../../components/vezham-crafted-by'
import { AutoLayout } from '../v-auto-layout'
import { Props, useProps } from './types'

const PlatformFooter = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    brand,
    category_links,
    social_accounts,
    system_status,
    newsletter,
    getBrandProps,
    getFooterLinkProps,
    getSocialMediaProps,
    getSystemStatusProps,
    getNewsletterContainerProps
  } = useProps({
    ...props,
    ref
  })

  return (
    <AutoLayout
      {...getBaseProps()}
      direction="vertical"
      align="center"
      spacer="xxxl"
      padding="xl">
      <div {...getNewsletterContainerProps()}>{newsletter}</div>
      <Brand brand={brand} {...getBrandProps()} />

      <FooterLink category_links={category_links} {...getFooterLinkProps()} />
      <PwaSocialMediaLink
        handles={social_accounts}
        {...getSocialMediaProps()}
      />
      <SystemStatus {...system_status} {...getSystemStatusProps()} />
      <VezhamCraftedBy />
    </AutoLayout>
  )
})

PlatformFooter.displayName = 'PlatformFooter'

export { PlatformFooter }
