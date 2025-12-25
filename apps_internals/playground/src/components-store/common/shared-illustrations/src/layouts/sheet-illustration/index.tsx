import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const SheetIllustration = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps } = useProps({
    ...props,
    ref
  })
  return <Component {...getBaseProps()} />
})

SheetIllustration.displayName = 'SheetIllustration'

export { SheetIllustration }
