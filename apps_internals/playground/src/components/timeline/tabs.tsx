import { cn } from '@vezham/react-utils'
import { Tab, Tabs } from '@vezham/react/v2'

import { useTabsProps } from './types'
import { tva } from './variant'

interface TimelineTabsProps {
  changelogs: Array<{ id: string; name: string }>
  currentId: string
  onSelectionChange: (key: React.Key) => void
}

export const TimelineTabs = ({
  changelogs,
  currentId,
  onSelectionChange
}: TimelineTabsProps) => {
  const { getTabsProps } = useTabsProps({
    variant: 'default'
  })

  if (!changelogs || changelogs.length === 0) return null

  return (
    <Tabs
      aria-label="Timeline tabs"
      variant="light"
      color="primary"
      selectedKey={currentId}
      onSelectionChange={onSelectionChange}
      className={cn(
        'flex w-full justify-center py-8',
        getTabsProps().className
      )}>
      {changelogs.map(({ id, name }) => (
        <Tab key={id} title={name} />
      ))}
    </Tabs>
  )
}
