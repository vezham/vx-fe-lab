import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const Button = forwardRef<'button', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    children,
    startContent,
    endContent,
    isDisabled,
    isIconOnly
  } = useProps({
    ...props,
    ref
  })

  const content = (
    <>
      {startContent && <span className="flex-shrink-0">{startContent}</span>}
      {!isIconOnly && children && <span className="flex-1">{children}</span>}
      {endContent && <span className="flex-shrink-0">{endContent}</span>}
      {isIconOnly && children && <span className="sr-only">{children}</span>}
    </>
  )

  return <Component {...getBaseProps()}>{content}</Component>
})

Button.displayName = 'Button'

export { Button }
