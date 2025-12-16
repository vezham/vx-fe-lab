import { Personalize } from './types'

export const personalizationsData: Personalize[] = [
  {
    footer: {
      backdrop: 'opaque',
      links: [
        {
          label: 'Home',
          links: [
            {
              __type: 'link',
              id: 'home',
              label: 'Home',
              url: 'https://v.corp',
              target: '_blank'
            },
            {
              __type: 'link',
              id: 'about',
              label: 'About',
              url: 'https://v.corp/about',
              target: '_blank'
            },
            {
              __type: 'link',
              id: 'products',
              label: 'Products',
              url: 'https://v.corp/products',
              target: '_blank'
            },
            {
              __type: 'link',
              id: 'solutions',
              label: 'Solutions',
              url: 'https://v.corp/solutions',
              target: '_blank'
            },
            {
              __type: 'link',
              id: 'contact-us',
              label: 'Contact US',
              url: 'https://v.corp/contact-us',
              target: '_blank'
            },
            {
              __type: 'link',
              id: 'blogs',
              label: 'Blogs',
              url: 'https://v.corp/blogs',
              target: '_blank'
            },
            {
              __type: 'link',
              id: 'careers',
              label: 'Careers',
              url: 'https://v.corp/careers',
              target: '_blank'
            },
            {
              __type: 'link',
              id: 'policy-center',
              label: 'Policy Center',
              url: 'https://v.corp/policy-center',
              target: '_blank'
            }
          ]
        }
      ]
    },
    default_locale: 'en',
    available_locales: ['ar', 'en', 'fr', 'el'],
    brand: {
      __type: 'brand',
      name: 'V Corp',
      label: 'Accounts',
      avatar: {
        __type: 'avatar',
        url: 'https://images.unsplash.com/photo-1713707706933-64acbd795e24?q=80'
      }
    },
    social_accounts: [
      {
        name: 'linkedin',
        handle: 'vcorp'
      },
      {
        name: 'x',
        handle: 'vcorp'
      },
      {
        name: 'facebook',
        handle: 'vcorp'
      },
      {
        name: 'instagram',
        handle: 'vcorp'
      },
      {
        name: 'whatsapp',
        handle: '+1123456789'
      },
      {
        name: 'mail',
        handle: 'support@v.corp'
      }
    ],
    system_status: {
      __type: 'system_status',
      status: 'success',
      label: 'All systems operational 🎉',
      url: 'https://status.v.corp',
      target: '_blank'
    },
    actions: [
      {
        __type: 'link',
        id: 'home',
        label: 'Home',
        url: 'https://v.corp',
        target: '_blank'
      },
      {
        __type: 'button',
        variant: 'solid',
        id: 'create-subscribe',
        label: 'Subscribe',
        url: '/#subscribe'
      }
    ],
    cards: {
      newsletter: {
        __type: 'newsletter',
        title: 'Subscribe to our newsletter!',
        description:
          'Get weekly updates delivered right to your email, featuring the latest insights, trends, and tools.',
        actions: {
          submit: {
            label: 'Subscribe'
          },
          input: {
            placeholder: 'stark@v.corp'
          }
        }
      },
      welcome_message: {
        __type: 'welcome_message',
        title: 'Welcome to Blogs Center',
        description:
          'Find answers, ask questions, and connect with other peoples.',
        cover: {
          __type: 'cover',
          type: 'image',
          alt_text: 'Paper bag poster',
          url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80'
        }
      },
      related_article: {
        __type: 'related_article',
        title: 'Related posts',
        description: 'More posts from this Author, and in this sector.'
      }
    }
  }
]
