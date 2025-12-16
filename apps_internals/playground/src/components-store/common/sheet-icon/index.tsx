import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const SheetIcon = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, getIconProps } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      {props.children && <span {...getIconProps()}>{props.children}</span>}
    </Component>
  )
})

SheetIcon.displayName = 'SheetIcon'

export { SheetIcon }
