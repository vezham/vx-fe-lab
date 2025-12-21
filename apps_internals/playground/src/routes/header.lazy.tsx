import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '../pages/header'

export const Route = createLazyFileRoute('/header')({
  component: () => <Page />
})
