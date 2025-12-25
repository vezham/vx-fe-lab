import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

import { Text } from '../../components/text'
import { useBoolean, useEffect } from '../../hooks/index'
import { AutoLayout } from '../../layouts/v-auto-layout'
import { Props, useProps } from './types'

const Lockscreen = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, getIconProps, getTextProps, is_idle } =
    useProps({
      ...props,
      ref
    })

  const { value: idle, setValue } = useBoolean(is_idle)

  useEffect(() => {
    setValue(is_idle)
  }, [is_idle])

  if (!idle) return null

  return (
    <>
      {idle ? (
        <AutoLayout ref={ref}>
          <Component {...getBaseProps()}>
            <Icon icon="mdi:mail" {...getIconProps()} />
            <Text {...getTextProps()} />
          </Component>
        </AutoLayout>
      ) : null}
    </>
  )
})

Lockscreen.displayName = 'Lockscreen'

export { Lockscreen }
