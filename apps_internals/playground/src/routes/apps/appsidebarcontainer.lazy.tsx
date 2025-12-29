import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../../pages/apps/appsidebarcontainer'

export const Route = createLazyFileRoute('/apps/appsidebarcontainer')({
  component: () => <Page />
})
