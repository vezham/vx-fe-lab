import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../../pages/apps/appsidebarmenu'

export const Route = createLazyFileRoute('/apps/appsidebarmenu')({
  component: () => <Page />
})
