import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../../pages/apps/appbg'

export const Route = createLazyFileRoute('/apps/appbg')({
  component: () => <Page />
})
