import { forwardRef } from '@vezham/react-utils'
import { Button } from '@vezham/react/v2'

import { NotFoundIllustration } from '../../components-store/common/shared-illustrations/src/lib/not-found'
import { Heading } from '../../components-store/v-atoms/text-heading'
import { VezhamCopyright } from '../../components/vezham-copyright'
import { Props, useProps } from './types'

const NotFound = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getHeadingProps,
    getParagraphProps,
    getButtonProps,
    pathname,
    onClick
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      <NotFoundIllustration />
      <Heading {...getHeadingProps()} content="Oops!" />
      <p {...getParagraphProps()}>
        The page
        <span className="text-default-700 font-semibold italic">
          &nbsp;{pathname}
        </span>{' '}
        is not available on this server.
      </p>
      <Button
        variant="solid"
        color="primary"
        radius="full"
        size="lg"
        onClick={onClick}
        {...getButtonProps()}
      />
      <VezhamCopyright />
    </Component>
  )
})

NotFound.displayName = 'NotFound'

export { NotFound }
