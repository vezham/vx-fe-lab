import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const VezhamCopyright = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getWrapperProps,
    getLogoProps,
    getLinkProps
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      <div {...getWrapperProps()}>
        <a {...getLinkProps()}>
          <Icon icon="mdi:mail" {...getLogoProps()} />
          &nbsp; Vezham
        </a>
        &nbsp;© 2025
      </div>
    </Component>
  )
})

VezhamCopyright.displayName = 'VezhamCopyright'

export { VezhamCopyright }
