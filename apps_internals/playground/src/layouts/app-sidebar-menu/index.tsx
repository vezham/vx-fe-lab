import { forwardRef } from '@vezham/react-utils'

import { Text } from '../../components/text'
import { Props, useProps } from './types'

const AppSideBarMenu = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    header,
    footer,
    menu,
    getHeaderProps,
    getFooterProps,
    getMenuWrapperProps,
    getMenuProps,
    getMenuLabelProps
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      <div {...getHeaderProps()}>{header}</div>
      <div {...getMenuWrapperProps()}>
        {menu.data?.map(({ id, className, icon, label, onClick }) => {
          return (
            <div
              key={id}
              {...getMenuProps(menu.selected === id)}
              id={id}
              onClick={onClick}>
              {icon}
              <Text
                content={label}
                {...getMenuLabelProps(className, menu.selected === id)}
              />
            </div>
          )
        })}
      </div>
      <div {...getFooterProps()}>{footer}</div>
    </Component>
  )
})

AppSideBarMenu.displayName = 'AppSideBarMenu'

export { AppSideBarMenu }
