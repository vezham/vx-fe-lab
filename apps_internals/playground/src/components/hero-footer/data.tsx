// components/footer/footer.data.ts
import { Icon } from '@iconify/react'

import type { FooterNavigation, SocialIconProps } from './types'

export const footerNavigation: FooterNavigation = {
  services: [
    { name: 'Cloud Transformation', href: '#' },
    { name: 'Software Development', href: '#' },
    { name: 'Data Analysis & AI', href: '#' },
    { name: 'Cybersecurity', href: '#' }
  ],

  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Webinars', href: '#' }
  ],

  aboutUs: [
    { name: 'Our Story', href: '#' },
    { name: 'Why Choose Us', href: '#stats' },
    { name: 'Latest News', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Collaborations', href: '#' },
    { name: 'Contact Us', href: '/contact' }
  ],

  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'GDPR', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'User Agreement', href: '#' }
  ],

  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:linkedin" />
      )
    },
    {
      name: 'X',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="prime:twitter" />
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:facebook" />
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:instagram" />
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:github" />
      )
    }
  ]
}
