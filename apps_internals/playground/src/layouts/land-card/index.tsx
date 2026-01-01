import { ReactNode } from 'react'

import { cn } from '@vezham/react-utils'

export type Columns = 1 | 2 | 3 | 4

interface CardLayoutProps {
  columns?: Columns
  className?: string
  children: ReactNode
}

const columnMap: Record<Columns, string> = {
  1: 'grid grid-cols-1 gap-4',
  2: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
}

const CardLayout = ({ columns = 3, className, children }: CardLayoutProps) => {
  return (
    <div
      className={cn(
        'mx-2 my-6 sm:mx-6 md:my-12',
        columnMap[columns],
        className
      )}>
      {children}
    </div>
  )
}

export { CardLayout }
