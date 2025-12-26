import { Icon } from '@iconify/react'
import React from 'react'

import { Card, Link } from '@vezham/react/v2'

interface AppCardProps {
  title: string
  description: string
  icon: string
  iconColor?: string
}

const AppCard: React.FC<AppCardProps> = ({
  title,
  description,
  icon,
  iconColor = 'text-primary'
}) => {
  return (
    <Link className="group flex items-start gap-4 py-5" href="#">
      <div className={`${iconColor} mt-1`}>
        <Icon icon={icon} width={24} height={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-foreground mb-1 text-xl font-semibold">{title}</h3>
        <p className="text-foreground-500">{description}</p>
      </div>
      <div className="text-foreground-400 group-hover:text-primary transition-colors">
        <Icon icon="lucide:chevron-right" width={20} height={20} />
      </div>
    </Link>
  )
}

export const FeaturedApps: React.FC = () => {
  return (
    <Card className="p-6">
      <h2 className="text-foreground-500 mb-4 text-sm font-semibold">
        FEATURED APPS
      </h2>

      <div className="divide-default-200 divide-y">
        <AppCard
          title="CRM"
          description="Comprehensive CRM platform for customer-facing teams."
          icon="lucide:link"
          iconColor="text-blue-500"
        />

        <AppCard
          title="Mail"
          description="Secure email service for teams of all sizes."
          icon="lucide:mail"
          iconColor="text-blue-500"
        />

        <AppCard
          title="Creator"
          description="Build custom apps to simplify business processes."
          icon="lucide:layout-grid"
          iconColor="text-blue-500"
        />

        <AppCard
          title="Books"
          description="Powerful accounting platform for growing businesses."
          icon="lucide:book-open"
          iconColor="text-blue-500"
        />

        <AppCard
          title="People"
          description="Organize, automate, and simplify your HR processes."
          icon="lucide:users"
          iconColor="text-blue-500"
        />
      </div>

      <Link
        href="#"
        className="mt-6 flex items-center justify-between font-medium text-blue-500">
        <span>EXPLORE ALL PRODUCTS</span>
        <Icon icon="lucide:arrow-right" width={20} height={20} />
      </Link>
    </Card>
  )
}
