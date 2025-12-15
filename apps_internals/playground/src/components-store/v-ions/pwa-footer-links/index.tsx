import { forwardRef } from '@vezham/react-utils'
import { Link } from '@vezham/react/v2'

import { Props, useProps } from './types'

const PwaFooterLinks = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, getLinkProps, links } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      {links?.map((data, i) => {
        return (
          <Link
            key={i}
            id={data.id}
            href={data.url}
            color="default"
            size="sm"
            underline="hover"
            cursor={true}
            {...getLinkProps()}>
            {data.label}
          </Link>
        )
      })}
    </Component>
  )
})

PwaFooterLinks.displayName = 'PwaFooterLinks'

export { PwaFooterLinks }
