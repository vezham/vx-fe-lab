import { HeaderActionsProps, HeaderBrandProps, HeaderNavItem } from './types'

export const headerBrand: HeaderBrandProps = {
  name: 'Vezham',
  href: '/',
  logo: 'https://static.cdn.vezham.com/images/logo-white.png'
}

export const headerNavItems: HeaderNavItem[] = [
  {
    id: 'home',
    type: 'link',
    label: 'Home',
    href: '/',
    isActive: true
  },
  {
    id: 'products',
    type: 'grid',
    label: 'Products',
    columns: 4,
    items: [
      {
        id: 'ui-kit',
        title: 'UI Components',
        items: [
          {
            id: 'buttons',
            type: 'link',
            label: 'Buttons',
            href: '/products/ui-kit/buttons',
            description: 'Various button styles'
          },
          {
            id: 'forms',
            type: 'link',
            label: 'Forms',
            href: '/products/ui-kit/forms',
            description: 'Form components'
          },
          {
            id: 'cards',
            type: 'link',
            label: 'Cards',
            href: '/products/ui-kit/cards',
            description: 'Card layouts'
          },
          {
            id: 'modals',
            type: 'link',
            label: 'Modals',
            href: '/products/ui-kit/modals',
            description: 'Dialog windows'
          },
          {
            id: 'navigation',
            type: 'link',
            label: 'Navigation',
            href: '/products/ui-kit/navigation',
            description: 'Menu components'
          },
          {
            id: 'data-display',
            type: 'link',
            label: 'Data Display',
            href: '/products/ui-kit/data-display',
            description: 'Tables and lists'
          }
        ],
        showMoreLink: {
          label: 'View all UI Components',
          href: '/products/ui-kit'
        }
      },
      {
        id: 'templates',
        title: 'Templates',
        items: [
          {
            id: 'dashboard',
            type: 'link',
            label: 'Dashboard',
            href: '/products/templates/dashboard',
            description: 'Admin dashboard templates'
          },
          {
            id: 'landing-page',
            type: 'link',
            label: 'Landing Page',
            href: '/products/templates/landing-page',
            description: 'Marketing pages'
          },
          {
            id: 'ecommerce',
            type: 'link',
            label: 'E-commerce',
            href: '/products/templates/ecommerce',
            description: 'Online store templates'
          },
          {
            id: 'portfolio',
            type: 'link',
            label: 'Portfolio',
            href: '/products/templates/portfolio',
            description: 'Showcase templates'
          },
          {
            id: 'blog',
            type: 'link',
            label: 'Blog Template',
            href: '/products/templates/blog',
            description: 'Blogging templates'
          },
          {
            id: 'saas',
            type: 'link',
            label: 'SaaS Template',
            href: '/products/templates/saas',
            description: 'SaaS application templates'
          }
        ],
        showMoreLink: {
          label: 'View all Templates',
          href: '/products/templates'
        }
      },
      {
        id: 'icons',
        title: 'Icons',
        items: [
          {
            id: 'line-icons',
            type: 'link',
            label: 'Line Icons',
            href: '/products/icons/line',
            description: 'Minimal line icons'
          },
          {
            id: 'filled-icons',
            type: 'link',
            label: 'Filled Icons',
            href: '/products/icons/filled',
            description: 'Solid filled icons'
          },
          {
            id: 'colored-icons',
            type: 'link',
            label: 'Colored Icons',
            href: '/products/icons/colored',
            description: 'Colorful icons'
          },
          {
            id: 'animated-icons',
            type: 'link',
            label: 'Animated Icons',
            href: '/products/icons/animated',
            description: 'Animated SVG icons'
          },
          {
            id: 'duotone-icons',
            type: 'link',
            label: 'Duotone Icons',
            href: '/products/icons/duotone',
            description: 'Two-tone icons'
          },
          {
            id: '3d-icons',
            type: 'link',
            label: '3D Icons',
            href: '/products/icons/3d',
            description: 'Three-dimensional icons'
          }
        ],
        showMoreLink: {
          label: 'View all Icons',
          href: '/products/icons'
        }
      },
      {
        id: 'tools',
        title: 'Development Tools',
        items: [
          {
            id: 'cli',
            type: 'link',
            label: 'CLI Tool',
            href: '/products/tools/cli',
            description: 'Command line interface'
          },
          {
            id: 'vscode-extension',
            type: 'link',
            label: 'VS Code Extension',
            href: '/products/tools/vscode',
            description: 'Editor extensions'
          },
          {
            id: 'figma-plugin',
            type: 'link',
            label: 'Figma Plugin',
            href: '/products/tools/figma',
            description: 'Design system plugin'
          },
          {
            id: 'chrome-extension',
            type: 'link',
            label: 'Chrome Extension',
            href: '/products/tools/chrome',
            description: 'Browser extension'
          },
          {
            id: 'git-hooks',
            type: 'link',
            label: 'Git Hooks',
            href: '/products/tools/git-hooks',
            description: 'Git automation scripts'
          },
          {
            id: 'dev-utils',
            type: 'link',
            label: 'Dev Utilities',
            href: '/products/tools/utils',
            description: 'Development utilities'
          }
        ],
        showMoreLink: {
          label: 'View all Tools',
          href: '/products/tools'
        }
      }
    ]
  },
  {
    id: 'documentation',
    type: 'grid',
    label: 'Documentation',
    columns: 3,
    items: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        items: [
          {
            id: 'introduction',
            type: 'link',
            label: 'Introduction',
            href: '/docs/introduction',
            description: 'Get started with Vezham'
          },
          {
            id: 'installation',
            type: 'link',
            label: 'Installation',
            href: '/docs/installation',
            description: 'Installation guide'
          },
          {
            id: 'quickstart',
            type: 'link',
            label: 'Quick Start',
            href: '/docs/quickstart',
            description: 'Quick start tutorial'
          },
          {
            id: 'configuration',
            type: 'link',
            label: 'Configuration',
            href: '/docs/configuration',
            description: 'Configuration options'
          }
        ],
        showMoreLink: {
          label: 'View all Getting Started',
          href: '/docs/getting-started'
        }
      },
      {
        id: 'components',
        title: 'Components',
        items: [
          {
            id: 'basic-components',
            type: 'link',
            label: 'Basic Components',
            href: '/docs/components/basic',
            description: 'Button, Input, etc.'
          },
          {
            id: 'advanced-components',
            type: 'link',
            label: 'Advanced Components',
            href: '/docs/components/advanced',
            description: 'Complex components'
          },
          {
            id: 'layout-components',
            type: 'link',
            label: 'Layout Components',
            href: '/docs/components/layout',
            description: 'Grid, Flex, etc.'
          },
          {
            id: 'form-components',
            type: 'link',
            label: 'Form Components',
            href: '/docs/components/forms',
            description: 'Form elements'
          }
        ],
        showMoreLink: {
          label: 'View all Components',
          href: '/docs/components'
        }
      },
      {
        id: 'api-guides',
        title: 'API & Guides',
        items: [
          {
            id: 'api-reference',
            type: 'link',
            label: 'API Reference',
            href: '/docs/api',
            description: 'Complete API documentation'
          },
          {
            id: 'tutorials',
            type: 'link',
            label: 'Tutorials',
            href: '/docs/tutorials',
            description: 'Step-by-step tutorials'
          },
          {
            id: 'best-practices',
            type: 'link',
            label: 'Best Practices',
            href: '/docs/best-practices',
            description: 'Recommended practices'
          },
          {
            id: 'migration',
            type: 'link',
            label: 'Migration Guide',
            href: '/docs/migration',
            description: 'Migrate from other libraries'
          }
        ],
        showMoreLink: {
          label: 'View all Guides',
          href: '/docs/guides'
        }
      }
    ]
  },
  {
    id: 'pricing',
    type: 'link',
    label: 'Pricing',
    href: '/pricing'
  }
]

export const headerActions: HeaderActionsProps = {
  actions: [
    {
      id: 'login',
      label: 'Login',
      href: '/login'
    },
    {
      id: 'signup',
      label: 'Get Started',
      onClick: () => {
        console.log('Sign up clicked')
      }
    }
  ]
}
