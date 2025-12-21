import { ReactNode } from 'react'

export interface HeaderNavBaseItem {
  id: string
  label: string
  icon?: ReactNode
  description?: string
}

export interface HeaderNavLinkItem extends HeaderNavBaseItem {
  type: 'link'
  href: string
}

export interface HeaderNavGridItem extends HeaderNavBaseItem {
  type: 'grid'
  columns?: number
  items: HeaderNavGridColumn[]
}

export interface HeaderNavGridColumn {
  id: string
  title?: string
  items: HeaderNavLinkItem[]
  showMoreLink?: {
    label: string
    href: string
  }
}

export type HeaderNavItem = HeaderNavLinkItem | HeaderNavGridItem
export interface HeaderNavProps {
  items: HeaderNavItem[]
}

export interface HeaderAccordionProps {
  nav?: HeaderNavProps
  activeId?: string
  setActiveId: (id: string) => void
  closeMenu: () => void
}
