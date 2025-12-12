import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/button'

export const Route = createLazyFileRoute('/button')({
  component: () => <Page />
})
