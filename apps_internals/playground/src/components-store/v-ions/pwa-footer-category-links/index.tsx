import { forwardRef } from '@vezham/react-utils'
import { Link } from '@vezham/react/v2'

import { Text } from '../../../components/text'
import { Props, useProps } from './types'

const PwaFooterCategoryLinks = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getCategoryContainerProps,
    getListProps,
    getListItemProps,
    getLinkProps,
    category_links
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      {category_links?.map((data, i) => {
        return (
          <div key={i} {...getCategoryContainerProps()}>
            <Text content={data?.label} variant="subtitle" className="mb-2" />
            <ul {...getListProps()}>
              {data.links?.map((link, i) => {
                return (
                  <li key={i} {...getListItemProps()}>
                    <Link
                      id={link.id}
                      href={link.url}
                      color="default"
                      underline="hover"
                      size="sm"
                      cursor={true}
                      {...getLinkProps()}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </Component>
  )
})

PwaFooterCategoryLinks.displayName = 'PwaFooterCategoryLinks'

export { PwaFooterCategoryLinks }
