import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/timeline'

export const Route = createLazyFileRoute('/timeline')({
  component: () => <Page />
})
