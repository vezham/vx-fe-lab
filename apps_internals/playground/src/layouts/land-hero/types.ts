import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

type TextAlign = 'left' | 'center' | 'right'
type SizeVariant = 'sm' | 'md' | 'lg' | 'xl'

export type submit = {
  label?: string
  href?: string
}

export type trial = {
  placeholder?: string
  href?: string
}

export type welcomeDataAction = {
  submit?: submit
  trial?: trial
}

interface HeroContent {
  title?: string
  subtitle?: string
  description?: string | string[]
  actions?: welcomeDataAction
  align?: TextAlign
  size?: SizeVariant
  className?: string
}

interface HeroImage {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
}

interface HeroLayoutConfig {
  gap?: number | string
  fullHeight?: boolean
  padding?: string | number
  contentWidth?: string | number
  imageWidth?: string | number
  containerClassName?: string
}

interface HeroProps extends tvProps, HTMLHeroUIProps<'div', 'content'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  content: HeroContent
  image: HeroImage
  layout?: HeroLayoutConfig
  id?: string
  className?: string
  loading?: boolean
  onActionClick?: (actionId: string) => void
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    ref,
    content,
    image,
    layout,
    className,
    classNames,
    children,
    onActionClick,
    ...otherProps
  } = props

  const Component = as || 'section'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const baseStyles = cn(
    slots.base({
      class: cn(
        classNames?.base,
        className,
        layout?.containerClassName,
        layout?.fullHeight
      )
    }),
    layout?.direction === 'rtl' && 'rtl'
  )

  const getBaseProps: PropGetter = () => ({
    ref: domRef,
    id: props.id,
    className: baseStyles,
    ...otherProps
  })

  const contentStyles = cn(
    slots.content({
      class: cn(classNames?.content, content.className),
      size: content.size,
      align: content.align
    })
  )

  const getContentProps: PropGetter = () => ({
    className: contentStyles
  })

  const imageStyles = cn(
    slots.image({
      class: cn(classNames?.image, image.className),
      rounded: image.rounded
    })
  )

  const getImageProps: PropGetter = () => ({
    className: imageStyles
  })

  const getActionsProps: PropGetter = () => ({
    className: slots.actions({
      class: classNames?.actions,
      size: content.size
    })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({
      class: classNames?.title
    })
  })

  const getSubtitleProps: PropGetter = () => ({
    className: slots.subtitle({
      class: classNames?.subtitle
    })
  })

  const getDescriptionProps: PropGetter = () => ({
    className: slots.description({
      class: classNames?.description
    })
  })

  const getActionSizeProps: PropGetter = () => ({
    className: slots.actionsize({
      class: classNames?.actionsize
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    content,
    image,
    layout,
    getBaseProps,
    getContentProps,
    getImageProps,
    getActionsProps,
    getActionSizeProps,
    getTitleProps,
    getSubtitleProps,
    getDescriptionProps,
    children,
    onActionClick
  }
}

export { useProps }
export type {
  HeroProps,
  HeroContent,
  HeroImage,
  HeroLayoutConfig,
  TextAlign,
  SizeVariant
}
