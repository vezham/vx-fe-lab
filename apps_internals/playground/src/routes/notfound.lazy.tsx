import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/not-found'

export const Route = createLazyFileRoute('/notfound')({
  component: () => <Page />
})
