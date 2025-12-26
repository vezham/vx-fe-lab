import { forwardRef } from '@vezham/react-utils'

import { ResizablePanel } from '../../components-store/v-ions/resizable'
import { Props, useProps } from './types'

const AppMainContainer = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getPanelProps,
    children,
    is_resizable,
    resizable
  } = useProps({
    ...props,
    ref
  })

  let template = children

  if (is_resizable) {
    template = (
      <ResizablePanel
        {...getPanelProps()}
        variant="container"
        order={2}
        {...resizable}>
        {template}
      </ResizablePanel>
    )
  }

  return <Component {...getBaseProps()}>{template}</Component>
})

AppMainContainer.displayName = 'AppMainContainer'

export { AppMainContainer }
