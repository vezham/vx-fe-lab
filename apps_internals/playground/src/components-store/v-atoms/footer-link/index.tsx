import { forwardRef } from '@vezham/react-utils'

import { PwaFooterCategoryLinks } from '../../v-ions/pwa-footer-category-links'
import { PwaFooterLinks } from '../../v-ions/pwa-footer-links'
import { Props } from './types'

const FooterLink = forwardRef<'div', Props>(
  ({ id, className, category_links = [], ...props }, ref) =>
    category_links.length === 1 ? (
      <PwaFooterLinks
        id={id}
        className={className}
        ref={ref}
        links={category_links[0].links}
      />
    ) : (
      <PwaFooterCategoryLinks
        id={id}
        className={className}
        ref={ref}
        category_links={category_links}
      />
    )
)

FooterLink.displayName = 'FooterLink'

export { FooterLink }
