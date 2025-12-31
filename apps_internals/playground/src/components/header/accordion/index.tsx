import { Icon } from '@iconify/react'

import { Accordion, AccordionItem, Button, Link } from '@vezham/react/v2'

import { HeaderActionItem, HeaderNavItem } from '../types'

interface HeaderAccordionProps {
  nav?: HeaderNavItem[]
  actions?: HeaderActionItem[]
  activeId?: string
  setActiveId: (id?: string) => void
  closeMenu: () => void
}

const HeaderAccordion = ({
  nav,
  actions,
  activeId,
  setActiveId,
  closeMenu
}: HeaderAccordionProps) => {
  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? undefined : id)
  }

  return (
    <div className="space-y-4">
      {nav?.map(item => {
        const isActive = activeId === item.id

        if (item.type === 'link') {
          return (
            <div key={item.id} className="px-2">
              <Link
                href={item.href}
                onClick={() => {
                  setActiveId(item.id)
                  closeMenu()
                }}
                className={`block py-2 ${
                  isActive ? 'text-primary' : 'text-default-400'
                }`}>
                {item.label}
              </Link>
            </div>
          )
        }

        return (
          <Accordion
            key={item.id}
            selectedKeys={isActive ? [item.id] : []}
            onSelectionChange={() => toggleAccordion(item.id)}
            className="w-full">
            <AccordionItem
              key={item.id}
              aria-label={item.label}
              title={item.label}
              classNames={{
                base: 'px-0',
                heading: 'p-0',
                trigger: 'py-2',
                title: `font-medium ${
                  isActive ? 'text-primary' : 'text-default-400'
                }`
              }}>
              <div className="space-y-6 px-2 pb-4">
                {item.items.map(column => (
                  <div key={column.id} className="space-y-3">
                    {column.title && (
                      <h4 className="text-default-700 text-sm font-medium">
                        {column.title}
                      </h4>
                    )}

                    <ul className="space-y-2">
                      {column.items.slice(0, 5).map(subItem => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.href}
                            className="hover:bg-default-100 block rounded p-2"
                            onClick={closeMenu}>
                            <div className="font-medium">{subItem.label}</div>
                            {subItem.description && (
                              <div className="text-default-500 mt-0.5 text-xs">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {column.items.length > 5 && column.showMoreLink && (
                      <div className="border-default-200 mt-2 border-t pt-2">
                        <Link
                          href={column.showMoreLink.href}
                          className="text-primary flex items-center gap-1 text-sm font-medium"
                          onClick={closeMenu}>
                          {column.showMoreLink.label}
                          <Icon icon="mdi:chevron-right" />
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        )
      })}

      {actions && actions.length > 0 && (
        <div className="border-default-200 mt-4 space-y-3 border-t px-2 pt-4">
          {actions.map(action =>
            action.href ? (
              <Button
                key={action.id}
                as={Link}
                href={action.href}
                variant="bordered"
                color="primary"
                fullWidth
                onClick={closeMenu}>
                {action.label}
              </Button>
            ) : (
              <Button
                key={action.id}
                fullWidth
                color="primary"
                onClick={() => {
                  action.onClick?.()
                  closeMenu()
                }}>
                {action.label}
              </Button>
            )
          )}
        </div>
      )}
    </div>
  )
}

export { HeaderAccordion }
