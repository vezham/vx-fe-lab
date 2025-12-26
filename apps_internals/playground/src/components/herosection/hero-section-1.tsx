import { Icon } from '@iconify/react'
import React from 'react'

import { Button, Card, Link } from '@vezham/react/v2'

import { FeaturedApps } from './featured-apps'

export const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-20 md:px-6 md:py-16 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <div className="flex-1">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Your life's work,
              <br />
              powered by our life's work
            </h1>
            <div className="bg-primary my-8 h-1 w-12"></div>
            <p className="text-foreground-600 mb-8 max-w-2xl text-lg md:text-xl">
              A unique and powerful software suite to transform the way you
              work. Designed for businesses of all sizes, built by a company
              that{' '}
              <Link href="#" underline="hover" className="text-foreground">
                values your privacy
              </Link>
              .
            </p>
            <Button
              color="danger"
              size="lg"
              className="bg-red-600 px-8 py-6 font-medium hover:bg-red-700"
              endContent={<Icon icon="lucide:arrow-right" className="ml-1" />}>
              GET STARTED FOR FREE
            </Button>
          </div>

          <div className="mt-16 lg:mt-24">
            <img
              src="/illustration.svg"
              alt="People working together"
              className="w-full max-w-3xl"
              onError={e => {
                const target = e.target as HTMLImageElement
                target.src =
                  'https://img.heroui.chat/image/ai?w=800&h=400&u=123'
              }}
            />
          </div>
        </div>

        <div className="lg:w-[400px]">
          <FeaturedApps />
        </div>
      </div>
    </div>
  )
}
