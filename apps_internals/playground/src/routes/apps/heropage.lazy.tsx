import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../../pages/apps/heropage'

export const Route = createLazyFileRoute('/apps/heropage')({
  component: () => <Page />
})
