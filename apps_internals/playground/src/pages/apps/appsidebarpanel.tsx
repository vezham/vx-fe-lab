import { Icon } from '@iconify/react'

import { AppLayout } from '../../layouts/app-layout'
import { AppMainContainer } from '../../layouts/app-main-container'
import { AppSideBarPanel } from '../../layouts/app-sidebar-panel'

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
      selected: 'home',
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
    },
    panel: (
      <>
        <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
          01
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
          02
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
          03
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
          04
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
          05
        </div>
      </>
    )
  }
  return (
    <AppLayout>
      <AppSideBarPanel
        {...props}
        {...data}
        className="border-success bg-stripes stripes-default border"
      />
      <AppMainContainer className="border-primary border" />
    </AppLayout>
  )
}

export { Page }
