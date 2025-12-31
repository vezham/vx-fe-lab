import { Icon } from '@iconify/react'
import { useEffect, useMemo, useRef, useState } from 'react'

import { forwardRef } from '@vezham/react-utils'
import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle
} from '@vezham/react/v2'

import { HeaderAccordion } from './accordion'
import { HeaderDrawer } from './drawer'
import { HeaderProps, useProps } from './types'

const Header = forwardRef<'nav', HeaderProps>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getNavItemProps,
    getBrandProps,
    getActionsProps,
    brand,
    nav,
    actions,
    slots,
    classNames,
    variantProps
  } = useProps({ ...props, ref })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDrawerId, setActiveDrawerId] = useState<string | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const drawerRef = useRef<HTMLDivElement>(null)
  const navItemRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  const defaultActiveId = useMemo(() => nav?.[0]?.id, [nav])
  const [activeId, setActiveId] = useState<string | undefined>(defaultActiveId)

  const handleNavItemClick = (itemId: string, item: any) => {
    setActiveId(itemId)

    if (item.type === 'grid') {
      if (activeDrawerId === itemId && isDrawerOpen) {
        setIsDrawerOpen(false)
        setActiveDrawerId(null)
      } else {
        setActiveDrawerId(itemId)
        setIsDrawerOpen(true)
      }
    }
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setActiveDrawerId(null)
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isDrawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        !Array.from(navItemRefs.current.values()).some(el =>
          el.contains(e.target as Node)
        )
      ) {
        closeDrawer()
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isDrawerOpen])

  return (
    <Component {...getBaseProps()}>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          base: slots.navbarBase({ class: classNames?.navbarBase }),
          wrapper: slots.navbarWrapper({ class: classNames?.navbarWrapper })
        }}>
        <NavbarContent
          className={slots.mobileToggle({ class: classNames?.mobileToggle })}>
          <NavbarMenuToggle />
        </NavbarContent>

        {brand && (
          <div {...getBrandProps()}>
            <NavbarBrand>
              <Link href={brand.href}>
                {brand.logo ? (
                  typeof brand.logo === 'string' ? (
                    brand.logo.startsWith('http') ||
                    brand.logo.startsWith('/') ||
                    /\.(png|jpe?g|svg|webp)$/.test(brand.logo) ? (
                      <>
                        <Image
                          sizes="sm"
                          src={brand.logo}
                          alt={brand.name ?? 'Logo'}
                          className={slots.brandImage({
                            class: classNames?.brandImage
                          })}
                        />
                      </>
                    ) : (
                      <Icon
                        icon={brand.logo}
                        className={slots.brandIcon({
                          class: classNames?.brandIcon
                        })}
                      />
                    )
                  ) : (
                    <>{brand.logo}</>
                  )
                ) : (
                  <span
                    className={slots.brandName({
                      class: classNames?.brandName
                    })}>
                    {brand.name}
                  </span>
                )}
              </Link>
            </NavbarBrand>
          </div>
        )}

        {nav && nav.length > 0 && (
          <div {...getNavItemProps()}>
            {nav.map(item => {
              const isActive = activeId === item.id
              const isGrid = item.type === 'grid'
              const isLink = item.type === 'link'
              const isDrawerActive = activeDrawerId === item.id && isDrawerOpen

              const itemColorClass =
                isLink || isGrid
                  ? isActive || isDrawerActive
                    ? 'text-primary font-medium'
                    : 'text-default-600'
                  : 'text-default-400 cursor-not-allowed'

              if (isLink) {
                return (
                  <NavbarItem key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => handleNavItemClick(item.id, item)}
                      className={slots.navLink({
                        class: [itemColorClass, classNames?.navLink].join(' ')
                      })}>
                      {item.label}
                    </Link>
                  </NavbarItem>
                )
              }

              if (isGrid) {
                return (
                  <NavbarItem
                    key={item.id}
                    className={slots.navGridItem({
                      class: classNames?.navGridItem
                    })}
                    ref={el => {
                      if (el) navItemRefs.current.set(item.id, el as any)
                      else navItemRefs.current.delete(item.id)
                    }}>
                    <div
                      onClick={() => handleNavItemClick(item.id, item)}
                      className={slots.navGridTrigger({
                        class: [
                          itemColorClass,
                          classNames?.navGridTrigger
                        ].join(' ')
                      })}>
                      {item.label}
                      <Icon
                        icon={
                          isDrawerActive ? 'mdi:chevron-up' : 'mdi:chevron-down'
                        }
                        className={slots.navGridIcon({
                          class: classNames?.navGridIcon
                        })}
                      />
                    </div>
                  </NavbarItem>
                )
              }

              return (
                <NavbarItem key={item.id} className="opacity-70">
                  <span
                    className={`text-default-400 text-sm ${classNames?.navLink}`}>
                    {item.label}
                  </span>
                </NavbarItem>
              )
            })}
          </div>
        )}

        {actions && actions.length > 0 && (
          <div {...getActionsProps()}>
            {actions.map(action => (
              <NavbarItem key={action.id}>
                {action.href ? (
                  <Button
                    color="primary"
                    variant="bordered"
                    href={action.href}
                    className={slots.actionLink({
                      class: classNames?.actionLink
                    })}>
                    {action.label}
                  </Button>
                ) : (
                  <Button
                    onClick={action.onClick}
                    color="primary"
                    variant="solid"
                    className={slots.actionButton({
                      class: classNames?.actionButton
                    })}>
                    {action.label}
                  </Button>
                )}
              </NavbarItem>
            ))}
          </div>
        )}

        <HeaderDrawer
          isOpen={isDrawerOpen}
          onOpenChange={open => {
            setIsDrawerOpen(open)
            if (!open) setActiveDrawerId(null)
          }}
          placement={variantProps?.placement === 'bottom' ? 'bottom' : 'top'}
          activeDrawerId={activeDrawerId}
          nav={nav}
          closeDrawer={closeDrawer}
          drawerRef={drawerRef}
        />

        {/* Mobile Menu */}
        <NavbarMenu>
          <HeaderAccordion
            nav={nav}
            actions={actions}
            activeId={activeId}
            setActiveId={setActiveId}
            closeMenu={() => setIsMenuOpen(false)}
          />
        </NavbarMenu>
      </Navbar>
    </Component>
  )
})

Header.displayName = 'Header'
export { Header }
