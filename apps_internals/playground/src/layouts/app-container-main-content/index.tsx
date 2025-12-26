import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const AppMainContent = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, children } = useProps({
    ...props,
    ref
  })

  return <Component {...getBaseProps()}>{children}</Component>
})

AppMainContent.displayName = 'AppMainContent'

export { AppMainContent }
