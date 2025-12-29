import { forwardRef } from '@vezham/react-utils'
import { ScrollShadow } from '@vezham/react/v2'

import { Props, useProps } from './types'

const AppMainSideBarContainer = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, children, sidebar, getSidebarProps } =
    useProps({
      ...props,
      ref
    })

  return (
    <Component {...getBaseProps()}>
      <ScrollShadow {...getSidebarProps()}>{sidebar}</ScrollShadow>
      {children}
    </Component>
  )
})

AppMainSideBarContainer.displayName = 'AppMainSideBarContainer'

export { AppMainSideBarContainer }
