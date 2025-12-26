import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/heropage'

export const Route = createLazyFileRoute('/heropage')({
  component: () => <Page />
})
