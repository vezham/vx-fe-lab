import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../../pages/apps/appsidebarpanel'

export const Route = createLazyFileRoute('/apps/appsidebarpanel')({
  component: () => <Page />
})
