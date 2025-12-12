import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/text'

export const Route = createLazyFileRoute('/text')({
  component: () => <Page />
})
