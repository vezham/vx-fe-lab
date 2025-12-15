import { ReactRef } from '@vezham/react-utils'

interface Link {
  __type?: 'link' | 'button'
  id?: string
  className?: string
  label?: string
  url?: string
  target?: string
  onClick?: () => void
}

interface CategoryLink {
  label: string
  links?: Link[]
}

interface Props {
  id?: string
  className?: string
  ref?: ReactRef<HTMLDivElement | null>
  category_links?: CategoryLink[]
}

export type { Props, Link, CategoryLink }
