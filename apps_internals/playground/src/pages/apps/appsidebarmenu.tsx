import { Icon } from '@iconify/react'

import { AppLayout } from '../../layouts/app-layout'
import { AppMainContainer } from '../../layouts/app-main-container'
import { AppSideBarMenu } from '../../layouts/app-sidebar-menu'

const Page = (props: any) => {
  const data = {
    header: (
      <div className="bg-warning text-warning-foreground rounded-lg p-4 shadow-lg">
        HEADER
      </div>
    ),
    footer: (
      <div className="bg-warning text-warning-foreground rounded-lg p-4 shadow-lg">
        FOOTER
      </div>
    ),
    menu: {
      selected: 'more',
      data: [
        {
          id: 'home',
          icon: (
            <Icon
              icon="mdi:home"
              className="hover:text-default-800 dark:text-default-400 text-black"
            />
          ),
          label: 'Home'
        },
        {
          id: 'dm',
          icon: (
            <Icon
              icon="mdi:building"
              className="hover:text-default-800 dark:text-default-400 text-black"
            />
          ),
          label: 'DMs'
        },
        {
          id: 'activity',
          icon: (
            <Icon
              icon="mdi:info"
              className="hover:text-default-800 dark:text-default-400 text-black"
            />
          ),
          label: 'Activity'
        },
        {
          id: 'later',
          icon: (
            <Icon
              icon="mdi:mail"
              className="hover:text-default-800 dark:text-default-400 text-black"
            />
          ),
          label: 'Later'
        },
        {
          id: 'more',
          icon: (
            <Icon
              icon="mdi:menu"
              className="hover:text-default-800 dark:text-default-400 text-black"
            />
          ),
          label: 'More'
        }
      ]
    }
  }

  return (
    <AppLayout className="">
      <AppSideBarMenu {...props} {...data} className="border-success border" />
      <AppMainContainer className="border-primary border" />
    </AppLayout>
  )
}

export { Page }
