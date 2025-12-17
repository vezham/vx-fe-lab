import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

type Avatar = {
  __type: string
  url?: string
}

type Authors = {
  id: string
  name: string
  avatar: Avatar
}

type BaseProps = Omit<HTMLHeroUIProps<'div'>, 'orientation'> & {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>

  trend_no: number

  orientation?: 'horizontal' | 'vertical'

  id: string
  pinned?: boolean
  read_time?: number
  title: string
  url: string
  published_at: string
  authors: Authors[]
}

type Props = BaseProps & tvProps

const useProps = (originalProps: Props) => {
  const { ref, ...restOriginalProps } = originalProps

  const [props, variantProps] = mapPropsVariants(
    restOriginalProps,
    tva.variantKeys
  )

  const {
    as,
    id,
    children,
    className,
    classNames,

    read_time,
    title,
    url,
    authors,
    published_at,
    pinned,
    trend_no,

    ...otherProps
  } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const resolvedOrientation =
    variantProps.orientation ?? tva.defaultVariants?.orientation ?? 'horizontal'

  const getBaseProps: PropGetter = () => {
    const baseClassName = slots.base({
      class: cn(classNames?.base, className)
    })

    let gridClass = ''

    if (resolvedOrientation === 'horizontal') {
      gridClass =
        trend_no % 2 === 0
          ? `row-start-2 col-start-${trend_no}`
          : `row-start-1 col-start-${trend_no}`
    } else {
      gridClass = `col-start-1 row-start-${trend_no}`
    }

    return {
      id,
      ref: domRef,
      className: cn(baseClassName, gridClass),
      isPressable: true,
      isHoverable: true,
      ...otherProps
    }
  }

  const getLeftWrapperProps: PropGetter = () => ({
    className: slots.left({ class: classNames?.left })
  })

  const getRightWrapperProps: PropGetter = () => ({
    className: slots.right({ class: classNames?.right })
  })

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: classNames?.content })
  })

  const getRightFooterProps: PropGetter = () => ({
    className: slots.right_footer({ class: classNames?.right_footer })
  })

  const getHeadingProps = () => ({
    content: trend_no < 10 ? `0${trend_no}` : trend_no.toString()
  })

  return {
    Component,
    id,
    domRef,
    slots,
    classNames,
    children,

    getBaseProps,
    getLeftWrapperProps,
    getRightWrapperProps,
    getContentProps,
    getRightFooterProps,
    getHeadingProps,

    // Data
    read_time,
    trend_no,
    orientation: resolvedOrientation,
    title,
    url,
    authors,
    published_at,
    pinned
  }
}

export { useProps }
export type { Props, Authors, Avatar }
