import { FooterColumn } from './types'

export const defaultColumns: FooterColumn[] = [
  {
    type: 'logo',
    logo: 'https://static.cdn.vezham.com/images/logo-black.png',
    logoAlt: 'Vezham Logo',
    logoClassName: 'h-16 w-auto',
    socialLinks: [
      { name: 'LinkedIn', href: '#', icon: 'fontisto:linkedin' },
      { name: 'Twitter', href: '#', icon: 'prime:twitter' },
      { name: 'Facebook', href: '#', icon: 'fontisto:facebook' },
      { name: 'Instagram', href: '#', icon: 'fontisto:instagram' },
      { name: 'GitHub', href: '#', icon: 'fontisto:github' }
    ]
  },
  {
    type: 'links',
    title: 'Our Expertise',
    links: [
      { name: 'Cloud Transformation', href: '#' },
      { name: 'Software Development', href: '#' },
      { name: 'Data Analysis & AI', href: '#' },
      { name: 'Cybersecurity', href: '#' }
    ]
  },
  {
    type: 'links',
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Webinars', href: '#' }
    ]
  },
  {
    type: 'links',
    title: 'Company',
    links: [
      { name: 'Our Story', href: '#' },
      { name: 'Why Choose Us', href: '#stats' },
      { name: 'Latest News', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Collaborations', href: '#' },
      { name: 'Contact Us', href: '/contact' }
    ]
  },
  {
    type: 'links',
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'User Agreement', href: '#' }
    ]
  }
]

// Alternative: Icon-based first column
export const iconColumns: FooterColumn[] = [
  {
    type: 'logo',
    icon: 'mdi:rocket-launch',
    title: 'Vezham',
    socialLinks: [
      { name: 'LinkedIn', href: '#', icon: 'fontisto:linkedin' },
      { name: 'Twitter', href: '#', icon: 'prime:twitter' }
    ]
  },
  {
    type: 'links',
    title: 'Our Expertise',
    links: [
      { name: 'Cloud Transformation', href: '#' },
      { name: 'Software Development', href: '#' },
      { name: 'Data Analysis & AI', href: '#' },
      { name: 'Cybersecurity', href: '#' }
    ]
  },
  {
    type: 'links',
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Webinars', href: '#' }
    ]
  },
  {
    type: 'links',
    title: 'Company',
    links: [
      { name: 'Our Story', href: '#' },
      { name: 'Why Choose Us', href: '#stats' },
      { name: 'Latest News', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Collaborations', href: '#' },
      { name: 'Contact Us', href: '/contact' }
    ]
  },
  {
    type: 'links',
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'User Agreement', href: '#' }
    ]
  }
]

// Alternative: Title-only first column
export const titleColumns: FooterColumn[] = [
  {
    type: 'logo',
    title: 'Need help with anything?',

    socialLinks: [
      { name: 'LinkedIn', href: '#', icon: 'fontisto:linkedin' },
      { name: 'Twitter', href: '#', icon: 'prime:twitter' }
    ]
  },
  {
    type: 'links',
    title: 'Home',
    links: [
      { name: 'What is it', href: '#' },
      { name: 'How it works', href: '#' },
      { name: 'Why its important', href: '#' },
      { name: 'Pricing', href: '#' }
    ]
  },
  {
    type: 'links',
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' }
    ]
  },
  {
    type: 'links',
    title: 'Lega;',
    links: [
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy & Policy', href: '#' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  {
    type: 'links',
    title: 'Help',
    links: [{ name: 'FAQs', href: '#' }]
  }
]
