import { Avatar } from '@vezham/react/v2'

import { PwaCtaEmailCampaign } from '../../layouts/PwaCtaEmailCampaign'
import { PlatformFooter } from '../../layouts/platform-footer'
import { usePersonalize } from '../../store/usePersonalize'

const Footer = ({ brand_icon = true, ...props }: any) => {
  const { data: personal } = usePersonalize.list({})

  const data_logo_url = personal?.brand?.avatar
  const data_logo_icon = {
    icon: <Avatar src={personal?.brand?.avatar?.url} radius="none" />,
    label: personal?.brand?.label
  }

  const data = {
    brand: {
      logo: brand_icon ? data_logo_icon : data_logo_url,
      title: "What's New",
      url: 'https://vezham.com',
      target: '_self'
    },
    category_links: personal?.footer?.links,
    social_accounts: personal?.social_accounts,
    newsletter: (
      <PwaCtaEmailCampaign
        {...personal?.cards?.newsletter}
        bg_effect="gallery"
        dir_effect="right"
        full_width
      />
    ),
    system_status: personal?.system_status
  }

  return (
    <PlatformFooter
      {...props}
      {...data}
      backdrop={personal?.footer?.backdrop}
    />
  )
}

export { Footer }
