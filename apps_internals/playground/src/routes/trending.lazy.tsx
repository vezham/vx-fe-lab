import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/trending'

export const Route = createLazyFileRoute('/trending')({
  component: () => <Page />
})
