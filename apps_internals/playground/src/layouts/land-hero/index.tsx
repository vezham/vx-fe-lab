import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal
} from 'react'

import { forwardRef } from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { Image, Link } from '@vezham/react/v2'

import { Button } from '../../components/button'
import { HeroProps, useProps } from './types'

const HeroSection = forwardRef<'div', HeroProps>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getContentProps,
    getImageProps,
    getActionsProps,
    getActionSizeProps,
    getTitleProps,
    getSubtitleProps,
    getDescriptionProps,
    content,
    image,
    slots
  } = useProps({
    ...props,
    ref
  })

  const currentSize = content.size || props.layout?.size

  return (
    <Component {...getBaseProps()}>
      <div {...getContentProps()}>
        {content.title && <p {...getTitleProps()}>{content.title}</p>}

        {content.subtitle && <p {...getSubtitleProps()}>{content.subtitle}</p>}

        {content.description && (
          <p {...getDescriptionProps()}>
            {content.description.map((line: any, i: any) => (
              <p key={i}>{line}</p>
            ))}
          </p>
        )}

        {/* Render Actions */}
        {content.actions && (
          <div {...getActionsProps()}>
            {content.actions.trial?.placeholder && (
              <Button
                {...getActionSizeProps()}
                as={Link}
                href={content.actions.trial.href}
                color="primary"
                variant="solid"
                radius="lg"
                size={
                  currentSize === 'sm'
                    ? 'sm'
                    : currentSize === 'lg' || currentSize === 'xl'
                      ? 'lg'
                      : 'md'
                }>
                {content.actions.trial.placeholder}
              </Button>
            )}
            {content.actions.submit?.label && (
              <Button
                {...getActionSizeProps()}
                color="primary"
                variant="bordered"
                radius="lg"
                as={content.actions.submit.href ? Link : undefined}
                href={content.actions.submit.href}
                size={
                  currentSize === 'sm'
                    ? 'sm'
                    : currentSize === 'lg' || currentSize === 'xl'
                      ? 'lg'
                      : 'md'
                }>
                {content.actions.submit.label}
              </Button>
            )}
          </div>
        )}
      </div>

      <div {...getImageProps()}>
        <Image src={image.src} alt={image.alt} isZoomed />
      </div>
    </Component>
  )
})

HeroSection.displayName = 'HeroSection'

export { HeroSection }
