import { forwardRef } from '@vezham/react-utils'
import { Image } from '@vezham/react/v2'

import { Text } from '../../../components/text'
import { Props, useProps } from './types'

const Brand = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    brand,
    divider,
    getDividerProps,
    getSubtitleProps,
    getLogoContainerProps,
    getLogoImageProps,
    getLogoIconProps,
    getLabelProps
  } = useProps({ ...props, ref })

  if (!brand) {
    return null
  }

  const { logo, title } = brand

  return (
    <Component {...getBaseProps()}>
      <div {...getLogoContainerProps()}>
        {typeof logo === 'string' ? (
          <Image
            src={logo}
            alt={title || 'Brand logo'}
            {...getLogoImageProps()}
          />
        ) : logo?.icon ? (
          <>
            <div {...getLogoIconProps()}>{logo.icon}</div>
            {logo.label ? (
              <Text content={logo.label} variant="title" {...getLabelProps()} />
            ) : null}
          </>
        ) : null}
      </div>

      {divider ? <div {...getDividerProps()} /> : null}

      {title ? <p {...getSubtitleProps()}>{title}</p> : null}
    </Component>
  )
})

Brand.displayName = 'Brand'

export { Brand }
