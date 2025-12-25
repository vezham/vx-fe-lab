import { forwardRef } from '@vezham/react-utils'
import { Spinner } from '@vezham/react/v2'

import { AutoLayout } from '../../layouts/v-auto-layout'
import { Props, useProps } from './types'

const Loading = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    loader = <Spinner size="lg" />
  } = useProps({
    ...props,
    ref
  })

  return (
    <AutoLayout ref={ref}>
      <Component {...getBaseProps()}>{loader}</Component>
    </AutoLayout>
  )
})

Loading.displayName = 'Loading'

export { Loading }
