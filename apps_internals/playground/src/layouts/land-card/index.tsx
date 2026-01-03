import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const CardLayout = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, children } = useProps({
    ...props,
    ref
  })

  return <Component {...getBaseProps()}>{children}</Component>
})

CardLayout.displayName = 'CardLayout'

export { CardLayout }
