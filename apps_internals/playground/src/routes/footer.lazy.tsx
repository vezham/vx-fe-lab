import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/footer'

export const Route = createLazyFileRoute('/footer')({
  component: () => <Page />
})
