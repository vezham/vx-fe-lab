import { FC } from 'react'

import { Image } from '@vezham/react/v2'

import { SheetIllustration } from '../layouts/sheet-illustration'
import { Props } from '../layouts/sheet-illustration/types'

const NotFoundIllustration: FC<Props> = props => {
  return (
    <SheetIllustration {...props}>
      <Image
        src="https://fptsoftware.com/-/media/Project/FPT%20Software/FSO/Error-Page/404.png"
        className="h-auto w-64 md:w-full"
      />
    </SheetIllustration>
  )
}

NotFoundIllustration.displayName = 'NotFoundIllustration'

export { NotFoundIllustration }
