import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { Page } from '../pages/loading'

export const Route = createLazyFileRoute('/loading')({
  component: () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const t = setTimeout(() => setLoading(false), 3000)
      return () => clearTimeout(t)
    }, [])

    if (loading) return <Page />

    return <div>Loaded</div>
  }
})
