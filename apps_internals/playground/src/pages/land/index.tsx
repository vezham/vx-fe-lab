import cartoon from '../../../public/assets/CARTOON.png'
import img from '../../../public/assets/LOGO.png'
import { Header } from '../../components/header'
import { HeaderProps } from '../../components/header/types'
import { HeroSection } from '../../layouts/land-hero'
import { HeroProps } from '../../layouts/land-hero/types'
import { AutoLayout } from '../../layouts/v-auto-layout'
import { Important } from './important'
import { Work } from './work'

const Page = () => {
  const headerData: HeaderProps = {
    brand: {
      name: 'Rate it',
      href: '/',
      logo: img
    },
    nav: [
      {
        id: 'howitworks',
        type: 'link',
        label: 'How it works',
        href: '/',
        isActive: true
      },
      {
        id: 'pricing',
        type: 'link',
        label: 'Pricing',
        href: '/pricing'
      },
      {
        id: 'whyitsimportant',
        type: 'link',
        label: "Why it's important",
        href: '/why'
      },
      {
        id: 'about',
        type: 'link',
        label: 'About',
        href: '/about'
      },
      {
        id: 'contact',
        type: 'link',
        label: 'Contact',
        href: '/contact'
      }
    ],
    actions: [
      {
        id: 'login',
        label: 'Login',
        href: '/login'
      },
      {
        id: 'signup',
        label: 'Signup',
        onClick: () => {
          console.log('Sign up clicked')
        }
      }
    ]
  }
  const heroData: HeroProps = {
    content: {
      title: 'Stop wasting time',
      subtitle: 'in meetings.',
      description: [
        'Boost efficiency, save time & money',
        'with post meeting surveys.'
      ],
      actions: {
        trial: {
          placeholder: 'Get Started',
          href: '/getstarted'
        },
        submit: {
          label: 'Sign up with Google',
          href: '/signup'
        }
      },
      size: 'lg' // This is now properly typed
    },
    image: {
      src: cartoon,
      alt: 'Product rating dashboard preview',
      width: 600,
      height: 400,
      rounded: false
    },
    layout: {
      orientation: 'horizontal', // Changed from 'direction' to 'orientation'
      gap: '4rem',
      fullHeight: true,
      direction: 'ltr' // Added direction property
    }
  }

  return (
    <AutoLayout>
      <Header
        className="lg:p-8"
        {...headerData}
        orientation="horizontal"
        position="left"
        placement="top"
        items={5}
        variant="white"
      />
      <HeroSection className="pt-16 lg:pt-28" {...heroData} />
      <div>
        <Work />
      </div>
      <div>
        <Important />
      </div>
    </AutoLayout>
  )
}

export { Page }
