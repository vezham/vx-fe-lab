import { RefObject } from 'react'

import { HeaderNavProps } from '../types'

export interface HeaderDrawerProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  placement: 'top' | 'bottom'
  activeDrawerId: string | null
  nav?: HeaderNavProps
  closeDrawer: () => void
  drawerRef: RefObject<HTMLDivElement>
}
