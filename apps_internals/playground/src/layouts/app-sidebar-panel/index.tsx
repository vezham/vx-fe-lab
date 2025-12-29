import { forwardRef } from '@vezham/react-utils'
import { ScrollShadow } from '@vezham/react/v2'

import { Text } from '../../components/text'
import { Props, useProps } from './types'

const AppSideBarPanel = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    header,
    footer,
    menu,
    panel,
    getHeaderProps,
    getFooterProps,
    getContentProps,
    getPanelProps,
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
      <div {...getContentProps()}>
        <div {...getMenuWrapperProps()}>
          {menu.data?.map(({ id, className, icon, label, onClick }) => {
            return (
              <div key={id} {...getMenuProps()} id={id} onClick={onClick}>
                {icon}
                <Text content={label} {...getMenuLabelProps(className)} />
              </div>
            )
          })}
        </div>
        <div {...getPanelProps()}>
          <ScrollShadow className="flex flex-col gap-2">{panel}</ScrollShadow>
        </div>
      </div>
      <div {...getFooterProps()}>{footer}</div>
    </Component>
  )
})

AppSideBarPanel.displayName = 'AppSideBarPanel'

export { AppSideBarPanel }
