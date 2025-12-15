import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/footers'

export const Route = createLazyFileRoute('/footers')({
  component: () => <Page />
})
