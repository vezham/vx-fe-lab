// import { forwardRef } from '@vezham/react-utils'
// import { Image, Link } from '@vezham/react/v2'
// import { Icon } from '@iconify/react'
// import { Props, useProps } from './types'
// const Footer = forwardRef<'footer', Props>((props, ref) => {
//     const {
//         Component,
//         getBaseProps,
//         getContainerProps,
//         getGridWrapperProps,
//         getColumnProps,
//         getLogoColumnProps,
//         getLogoWrapperProps,
//         getTaglineProps,
//         getSocialWrapperProps,
//         getListColumnProps,
//         getListTitleProps,
//         getListUlProps,
//         getListItemProps,
//         getListLinkProps,
//         getListTitleWrapperProps,
//         columns,
//         logo,
//         tagline,
//         showSocialIcons
//     } = useProps({
//         ...props,
//         ref
//     })
//     const renderColumn = (column: any, index: number) => {
//         if (column.type === 'logo') {
//             return (
//                 <div key={index} {...getLogoColumnProps()}>
//                     <div {...getLogoWrapperProps()}>
//                         {column.logo ? (
//                             <Image
//                                 alt={column.logoAlt || "Brand Logo"}
//                                 className={column.logoClassName || "h-16 w-auto"}
//                                 src={column.logo}
//                                 removeWrapper
//                             />
//                         ) : column.icon ? (
//                             <Icon
//                                 icon={column.icon}
//                                 className="h-16 w-auto text-primary"
//                             />
//                         ) : column.title ? (
//                             <h3 className="text-xl font-bold">{column.title}</h3>
//                         ) : null}
//                         {tagline && (
//                             <p {...getTaglineProps()}>{tagline}</p>
//                         )}
//                         {showSocialIcons && column.socialLinks && column.socialLinks.length > 0 && (
//                             <div {...getSocialWrapperProps()}>
//                                 {column.socialLinks.map((item: any) => (
//                                     <Link key={item.name} isExternal href={item.href}>
//                                         <span className="sr-only">{item.name}</span>
//                                         {item.icon ? (
//                                             <Icon
//                                                 aria-hidden="true"
//                                                 icon={item.icon}
//                                                 className="text-default-400 hover:text-primary-500 w-6"
//                                             />
//                                         ) : (
//                                             <span className="text-default-400 hover:text-primary-500">
//                                                 {item.name}
//                                             </span>
//                                         )}
//                                     </Link>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )
//         }
//         if (column.type === 'links') {
//             return (
//                 <div key={index} {...getColumnProps()}>
//                     <div {...getListTitleWrapperProps()}>
//                         <h3 {...getListTitleProps()}>{column.title}</h3>
//                     </div>
//                     <ul {...getListUlProps()}>
//                         {column.links.map((item: any, linkIndex: number) => (
//                             <li key={linkIndex} {...getListItemProps()}>
//                                 <Link
//                                     href={item.href}
//                                     {...getListLinkProps()}
//                                     size="sm"
//                                     underline="hover"
//                                 >
//                                     {item.name}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )
//         }
//         return null
//     }
//     return (
//         <Component {...getBaseProps()}>
//             <div {...getContainerProps()}>
//                 <div {...getGridWrapperProps()}>
//                     {columns.map((column, index) => renderColumn(column, index))}
//                 </div>
//             </div>
//         </Component>
//     )
// })
// Footer.displayName = 'Footer'
// export { Footer }
import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'
import { Image, Link } from '@vezham/react/v2'

import { Props, useProps } from './types'

const Footer = forwardRef<'footer', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getContainerProps,
    getGridWrapperProps,
    getColumnProps,
    getLogoColumnProps,
    getLogoWrapperProps,
    getTaglineProps,
    getSocialWrapperProps,
    getListColumnProps,
    getListTitleProps,
    getListUlProps,
    getListItemProps,
    getListLinkProps,
    getListTitleWrapperProps,
    columns,
    tagline,
    showSocialIcons
  } = useProps({ ...props, ref })

  const renderColumn = (column: any, index: number) => {
    if (column.type === 'logo') {
      return (
        <div key={index} {...getLogoColumnProps()}>
          <div {...getLogoWrapperProps()}>
            {column.logo ? (
              <Image
                alt={column.logoAlt || 'Brand Logo'}
                className={column.logoClassName || 'h-16 w-auto'}
                src={column.logo}
                removeWrapper
              />
            ) : column.icon ? (
              <Icon icon={column.icon} className="text-primary h-16 w-auto" />
            ) : column.title ? (
              <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {column.title}
              </h3>
            ) : null}

            {tagline && <p {...getTaglineProps()}>{tagline}</p>}

            {showSocialIcons && column.socialLinks?.length > 0 && (
              <div {...getSocialWrapperProps()}>
                {column.socialLinks.map((item: any) => (
                  <Link key={item.name} isExternal href={item.href}>
                    <span className="sr-only">{item.name}</span>
                    <Icon
                      icon={item.icon}
                      className="text-default-400 hover:text-white-500 w-6"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    }

    if (column.type === 'links') {
      return (
        <div key={index} {...getListColumnProps()}>
          <div {...getListTitleWrapperProps()}>
            <h3 {...getListTitleProps()}>{column.title}</h3>
          </div>

          <ul {...getListUlProps()}>
            {column.links?.map((item: any, i: number) => (
              <li key={i} {...getListItemProps()}>
                <Link
                  href={item.href}
                  {...getListLinkProps()}
                  size="sm"
                  underline="hover">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return null
  }

  return (
    <Component {...getBaseProps()}>
      <div {...getContainerProps()}>
        <div {...getGridWrapperProps()}>{columns.map(renderColumn)}</div>
      </div>
    </Component>
  )
})

Footer.displayName = 'Footer'
export { Footer }
