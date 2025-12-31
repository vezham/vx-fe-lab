import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/land'

export const Route = createLazyFileRoute('/land')({
  component: () => <Page />
})
