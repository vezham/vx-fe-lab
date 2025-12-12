import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/table'

export const Route = createLazyFileRoute('/table')({
  component: () => <Page />
})
