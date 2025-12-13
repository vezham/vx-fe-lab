import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const SheetIcon = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps } = useProps({
    ...props,
    ref
  })
  return <Component {...getBaseProps()} />
})

SheetIcon.displayName = 'SheetIcon'

export { SheetIcon }
