import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { Page } from '../pages/lockscreen'

export const Route = createLazyFileRoute('/lockscreen')({
  component: () => {
    const [locked, setLocked] = useState(true)

    useEffect(() => {
      const t = setTimeout(() => setLocked(false), 3000)
      return () => clearTimeout(t)
    }, [])

    if (locked) return <Page />

    return <div>Unlocked</div>
  }
})
