import { forwardRef } from '@vezham/react-utils'
import { ScrollShadow } from '@vezham/react/v2'

import { Props, useProps } from './types'

const AppSideBar = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    header,
    footer,
    content,
    getHeaderProps,
    getFooterProps,
    getContentProps
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      <div {...getHeaderProps()}>{header}</div>
      <ScrollShadow {...getContentProps()}>{content}</ScrollShadow>
      <div {...getFooterProps()}>{footer}</div>
    </Component>
  )
})

AppSideBar.displayName = 'AppSideBar'

export { AppSideBar }
