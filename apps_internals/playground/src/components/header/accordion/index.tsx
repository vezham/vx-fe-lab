import { Icon } from '@iconify/react'

import { Accordion, AccordionItem, Link } from '@vezham/react/v2'

import { HeaderNavItem, HeaderNavProps } from '../types'

interface HeaderAccordionProps {
  nav?: HeaderNavProps
  activeId?: string
  setActiveId: (id: string) => void
  closeMenu: () => void
}

const HeaderAccordion = ({
  nav,
  activeId,
  setActiveId,
  closeMenu
}: HeaderAccordionProps) => {
  const renderMobileNavItem = (item: HeaderNavItem) => {
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
            className={
              activeId === item.id ? 'text-primary' : 'text-default-400'
            }>
            {item.label}
          </Link>
        </div>
      )
    }

    return (
      <Accordion key={item.id} className="w-full">
        <AccordionItem
          key={item.id}
          aria-label={item.label}
          title={
            <span className={isActive ? 'text-primary' : 'text-default-400'}>
              {item.label}
            </span>
          }
          className="px-0"
          classNames={{
            title: `py-0 font-medium ${isActive ? 'text-primary' : 'text-default-400'}`,
            heading: 'p-0',

            trigger: 'px-0 py-2'
          }}
          onPress={() => setActiveId(item.id)}>
          <div className="space-y-6">
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
                  <div className="border-default-200 mt-2 border-t border-b py-2">
                    <Link
                      href={column.showMoreLink.href}
                      className="text-primary hover:text-primary-600 text-sm font-medium"
                      onClick={closeMenu}>
                      {column.showMoreLink.label}
                      <Icon icon="mdi:chevron-right" className="ml-1" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    )
  }

  return <div className="space-y-4">{nav?.items.map(renderMobileNavItem)}</div>
}

export { HeaderAccordion }
