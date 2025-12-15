import { forwardRef } from '@vezham/react-utils'
import { Chip } from '@vezham/react/v2'

import { Props, useProps } from './types'

const SystemStatus = forwardRef<'a', Props>((props, ref) => {
  const { Component, getBaseProps, status, label } = useProps({
    ...props,
    ref
  })

  if (status === 'none') {
    return null
  }

  return (
    <Component {...getBaseProps()}>
      <Chip
        className="text-default-500 border-none px-0"
        color={status}
        variant="dot">
        {label}
      </Chip>
    </Component>
  )
})

SystemStatus.displayName = 'SystemStatus'

export { SystemStatus }
