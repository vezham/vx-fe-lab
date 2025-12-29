import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const AppBg = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, getChildrenProps, children } = useProps({
    ...props,
    ref
  })
  return (
    <Component {...getBaseProps()}>
      <div {...getChildrenProps()}>{children}</div>
    </Component>
  )
})

AppBg.displayName = 'AppBg'

export { AppBg }
