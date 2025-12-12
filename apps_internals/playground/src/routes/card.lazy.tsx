import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/card'

export const Route = createLazyFileRoute('/card')({
  component: () => <Page />
})
