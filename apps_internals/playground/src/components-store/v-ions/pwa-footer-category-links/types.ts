import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Link {
  __type?: 'link' | 'button'
  id?: string
  className?: string
  label?: string
  url?: string
  target?: string
  onClick?: () => void
}

interface CategoryLink {
  label: string
  links?: Link[]
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  category_links?: CategoryLink[]
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    category_links = [],
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({
      class: cn(
        classNames?.base,
        className,
        `category-${category_links.length}`
      )
    }),
    ...otherProps
  })

  const getCategoryContainerProps: PropGetter = () => ({
    className: slots.categoryContainer({
      class: classNames?.categoryContainer
    })
  })

  const getListProps: PropGetter = () => ({
    className: slots.list({
      class: classNames?.list
    })
  })

  const getListItemProps: PropGetter = () => ({
    className: slots.listItem({
      class: classNames?.listItem
    })
  })

  const getLinkProps: PropGetter = () => ({
    className: slots.link({
      class: classNames?.link
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getCategoryContainerProps,
    getListProps,
    getListItemProps,
    getLinkProps,

    // otherProps
    category_links
  }
}

export { useProps }
export type { Props, Link, CategoryLink }
