import { forwardRef } from '@vezham/react-utils'

import { Resizable } from '../../components-store/v-ions/resizable'
import { Props, useProps } from './types'

const AppLayout = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, children, is_resizable, resizable } =
    useProps({
      ...props,
      ref
    })

  let template = children

  if (is_resizable) {
    template = (
      <Resizable direction="horizontal" {...resizable}>
        {template}
      </Resizable>
    )
  }

  return <Component {...getBaseProps()}>{template}</Component>
})

AppLayout.displayName = 'AppLayout'

export { AppLayout }
