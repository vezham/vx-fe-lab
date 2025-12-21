import { Icon } from '@iconify/react'
import { RefObject } from 'react'

import { Drawer, DrawerBody, DrawerContent, Link } from '@vezham/react/v2'

import { HeaderNavProps } from '../types'

interface HeaderDrawerProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  placement: 'top' | 'bottom'
  activeDrawerId: string | null
  nav?: HeaderNavProps
  closeDrawer: () => void
  drawerRef: RefObject<HTMLDivElement>
}

const HeaderDrawer = ({
  isOpen,
  onOpenChange,
  placement,
  activeDrawerId,
  nav,
  closeDrawer,
  drawerRef
}: HeaderDrawerProps) => {
  const renderDrawerContent = (item: any) => {
    return (
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">{item.label}</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {item.items.map((column: any) => (
            <div key={column.id} className="space-y-4">
              {column.title && (
                <h4 className="text-default-700 text-base font-medium">
                  {column.title}
                </h4>
              )}
              <ul className="space-y-1">
                {column.items.slice(0, 5).map((subItem: any) => (
                  <li key={subItem.id}>
                    <Link
                      href={subItem.href}
                      className="hover:bg-default-100 flex flex-col items-start rounded-lg p-3 transition-colors"
                      onClick={closeDrawer}>
                      <span className="font-medium">{subItem.label}</span>
                      {subItem.description && (
                        <span className="text-default-500 mt-0.5 text-xs">
                          {subItem.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              {column.items.length > 5 && column.showMoreLink && (
                <div className="border-default-200 mt-3 border-t p-3">
                  <Link
                    href={column.showMoreLink.href}
                    className="text-primary hover:text-primary-600 inline-flex items-center text-sm font-medium"
                    onClick={closeDrawer}>
                    {column.showMoreLink.label}
                    <Icon icon="mdi:chevron-right" className="ml-1" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement={placement}
      size="sm"
      className="hidden sm:block">
      <DrawerContent ref={drawerRef}>
        {activeDrawerId && (
          <DrawerBody className="p-6">
            {(() => {
              const item = nav?.items.find(item => item.id === activeDrawerId)
              return item && item.type === 'grid'
                ? renderDrawerContent(item)
                : null
            })()}
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  )
}

export { HeaderDrawer }
