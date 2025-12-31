import { RefObject } from 'react'

import { HeaderNavItem } from '../types'

export interface HeaderDrawerProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  placement: 'top' | 'bottom'
  activeDrawerId: string | null
  nav?: HeaderNavItem[]
  closeDrawer: () => void
  drawerRef: RefObject<HTMLDivElement>
}
