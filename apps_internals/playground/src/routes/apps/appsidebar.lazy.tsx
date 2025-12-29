import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../../pages/apps/appsidebar'

export const Route = createLazyFileRoute('/apps/appsidebar')({
  component: () => <Page />
})
