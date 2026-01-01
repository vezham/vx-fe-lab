import { useNavigate } from '@tanstack/react-router'

import { forwardRef } from '@vezham/react-utils'
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  ScrollShadow
} from '@vezham/react/v2'

import { Props, useProps } from './types'

const CardFeatured = forwardRef<'div', Props>((props, ref) => {
  const { getBaseProps, getWrapperProps, posts, getCardProps, onButtonClick } =
    useProps({
      ...props,
      ref
    })
  const navigate = useNavigate()

  const handleCardPress = (href: string) => {
    navigate({ to: href })
  }

  const handleButtonClick = (e: React.MouseEvent, href: string) => {
    e.stopPropagation()
    if (onButtonClick) {
      onButtonClick(href)
    } else {
      navigate({ to: href })
    }
  }

  return (
    <ScrollShadow {...getBaseProps()}>
      {posts.map(
        ({
          super_title,
          title,
          href,
          image_url,
          description,
          app_name,
          app_icon,
          button_text
        }) => (
          <div {...getWrapperProps()} key={href}>
            <Card {...getCardProps()} onPress={() => handleCardPress(href)}>
              <CardHeader className="absolute top-1 z-10 flex-col items-start">
                <p className="text-tiny font-bold text-white/60 uppercase">
                  {super_title}
                </p>
                <h4 className="text-xl font-medium text-white/90">{title}</h4>
              </CardHeader>

              <Image
                removeWrapper
                alt="Card background"
                className="z-0 h-full w-full object-cover"
                src={image_url}
              />

              <CardFooter className="border-default-600 dark:border-default-100 absolute bottom-0 z-10 border-t-1 bg-black/40">
                <div className="flex grow items-center gap-2">
                  {app_icon && (
                    <Image
                      alt="App icon"
                      className="h-11 w-10 rounded-full bg-black"
                      src={app_icon}
                    />
                  )}
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">
                      {app_name || 'App Name'}
                    </p>
                    <p className="text-tiny text-white/60">
                      {description || "Get a good night's sleep."}
                    </p>
                  </div>
                </div>
                <Button
                  radius="full"
                  size="sm"
                  onClick={e => handleButtonClick(e, href)}>
                  {button_text || 'Get App'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        )
      )}
    </ScrollShadow>
  )
})

CardFeatured.displayName = 'CardFeatured'

export { CardFeatured }
