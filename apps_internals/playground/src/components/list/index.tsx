import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const List = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getTitleProps,
    getListProps,
    getListItemProps,
    getIconProps,
    getLabelProps,
    getContentProps,
    items
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      {props.title && <h3 {...getTitleProps()}>{props.title}</h3>}

      <ul {...getListProps()}>
        {items.map((item, index) => (
          <li key={index} {...getListItemProps()}>
            <Icon {...getIconProps()} />
            <div>
              <div {...getLabelProps()}>{item.label}</div>
              {item.content && <div {...getContentProps()}>{item.content}</div>}
            </div>
          </li>
        ))}
      </ul>
    </Component>
  )
})

List.displayName = 'List'

export { List }
