import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const FeedbackRating = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    type,
    scale,
    icon,
    title,
    getTitleProps,
    getRatingProps
  } = useProps({
    ...props,
    ref
  })

  const template = []

  if (type === 'star') {
    for (let index = 0; index < scale; index++) {
      template.push(
        <Icon
          icon="mdi:star"
          key={index}
          width={16}
          height={16}
          className={props.className}
        />
      )
    }
  } else if (type === 'heart') {
    for (let index = 0; index < scale; index++) {
      template.push(
        <Icon
          icon="mdi:heart"
          key={index}
          width={16}
          height={16}
          className={props.className}
        />
      )
    }
  } else if (type === 'like') {
    template.push(
      <Icon
        icon="mdi:thumb-up"
        width={16}
        height={16}
        className={props.className}
      />
    )
    template.push(
      <Icon
        icon="mdi:thumb-down"
        width={16}
        height={16}
        className={props.className}
      />
    )
  } else if (type === 'emoji') {
    if (scale === 2) {
      template.push(
        <Icon
          icon="mdi:emoticon-sad"
          width={16}
          height={16}
          className={props.className}
        />
      )
      template.push(
        <Icon
          icon="mdi:emoticon-happy"
          width={16}
          height={16}
          className={props.className}
        />
      )
    } else if (scale === 3) {
      template.push(
        <Icon
          icon="mdi:emoticon-sad"
          width={16}
          height={16}
          className={props.className}
        />
      )
      template.push(
        <Icon
          icon="mdi:emoticon-happy"
          width={16}
          height={16}
          className={props.className}
        />
      )
      template.push(
        <Icon
          icon="mdi:emoticon-excited"
          width={16}
          height={16}
          className={props.className}
        />
      )
    } else if (scale === 5) {
      template.push(
        <Icon
          icon="mdi:emoticon-angry"
          width={16}
          height={16}
          className={props.className}
        />
      )
      template.push(
        <Icon
          icon="mdi:emoticon-sad"
          width={16}
          height={16}
          className={props.className}
        />
      )
      template.push(
        <Icon
          icon="mdi:emoticon-happy"
          width={16}
          height={16}
          className={props.className}
        />
      )
      template.push(
        <Icon
          icon="mdi:emoticon"
          width={16}
          height={16}
          className={props.className}
        />
      )
      template.push(
        <Icon
          icon="mdi:emoticon-happy"
          width={16}
          height={16}
          className={props.className}
        />
      )
    }
  }

  return (
    <Component {...getBaseProps()}>
      <div {...getTitleProps()}>{title}</div>
      <div {...getRatingProps()}>{template}</div>
    </Component>
  )
})

FeedbackRating.displayName = 'FeedbackRating'

export { FeedbackRating }
