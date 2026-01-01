import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'
import { Card, CardBody, CardFooter, CardHeader } from '@vezham/react/v2'

import { Button } from '../button'
import { Props, useProps } from './types'

const LandCard = forwardRef<'div', Props>((props, ref) => {
  const {
    slots,
    icon,
    logo,
    image,
    title,
    subtitle,
    description,
    actions,
    imageAsBackground,
    getBaseProps,
    getHeaderProps,
    getLogoProps,
    getIconProps,
    getImageWrapperProps,
    getLogoImageProps,
    getImageProps,
    getBodyProps,
    getTitleProps,
    getSubtitleProps,
    getDescriptionProps,
    getFooterProps,
    getActionProps,
    children
  } = useProps({
    ...props,
    ref
  })

  const renderLogo = () => {
    if (!logo) return null
    return (
      <div {...getLogoProps()}>
        <img src={logo.src} alt={logo.alt || 'Logo'} {...getLogoImageProps()} />
      </div>
    )
  }

  const renderIcon = () => {
    if (!icon) return null
    return (
      <div {...getIconProps()}>
        <Icon icon={icon.name} className={`text-primary h-10 w-10`} />
      </div>
    )
  }

  const renderImage = () => {
    if (!image) return null

    const imageElement = (
      <img
        src={image.src}
        alt={image.alt || 'Card image'}
        {...getImageProps()}
      />
    )

    if (imageAsBackground) {
      return (
        <div {...getImageWrapperProps()}>
          {imageElement}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )
    }

    return <div {...getImageWrapperProps()}>{imageElement}</div>
  }

  const renderTitle = () => {
    if (!title) return null
    return <h3 {...getTitleProps()}>{title}</h3>
  }

  const renderSubtitle = () => {
    if (!subtitle) return null
    return <p {...getSubtitleProps()}>{subtitle}</p>
  }

  const renderDescription = () => {
    if (!description) return null

    // Handle string description
    if (typeof description === 'string') {
      return <div {...getDescriptionProps()}>{description}</div>
    }

    // Handle array description
    if (Array.isArray(description)) {
      return (
        <div {...getDescriptionProps()}>
          {description.map((desc, index) =>
            typeof desc === 'string' ? (
              <div key={index}>{desc}</div>
            ) : (
              <div key={index}>{desc}</div>
            )
          )}
        </div>
      )
    }

    // Handle React element or component
    return <div {...getDescriptionProps()}>{description}</div>
  }

  const renderActions = () => {
    if (!actions || actions.length === 0) return null

    return (
      <CardFooter {...getFooterProps()}>
        {actions.map((action, index) => {
          const actionProps = getActionProps(action)
          const key = action.id ?? `action-${index}`

          if (action.href) {
            return (
              <Button
                key={key}
                as="a"
                href={action.href}
                variant={action.variant ?? 'solid'}
                color={action.color ?? 'primary'}
                isDisabled={action.disabled}
                {...actionProps}>
                {action.label}
              </Button>
            )
          }

          return (
            <Button
              key={key}
              onClick={action.onClick}
              isDisabled={action.disabled}
              variant={action.variant ?? 'solid'}
              color={action.color ?? 'primary'}
              {...actionProps}>
              {action.label}
            </Button>
          )
        })}
      </CardFooter>
    )
  }

  const renderContent = () => {
    if (imageAsBackground) {
      return (
        <>
          {renderImage()}
          <div>
            {(logo || icon) && (
              <div {...getHeaderProps()}>
                {renderLogo()}
                {renderIcon()}
                {(title || subtitle) && (
                  <div>
                    {renderTitle()}
                    {renderSubtitle()}
                  </div>
                )}
              </div>
            )}
            {!logo && !icon && (
              <div {...getHeaderProps()}>
                {renderTitle()}
                {renderSubtitle()}
              </div>
            )}
            <div {...getBodyProps()}>{renderDescription()}</div>
            {renderActions()}
          </div>
        </>
      )
    }

    // Handle regular image scenario
    if (image) {
      return (
        <>
          {renderImage()}
          <div className="">
            {(logo || icon) && (
              <div {...getHeaderProps()}>
                {renderLogo()}
                {renderIcon()}
                {(title || subtitle) && (
                  <div>
                    {renderTitle()}
                    {renderSubtitle()}
                  </div>
                )}
              </div>
            )}
            {!logo && !icon && (
              <div className="mb-4">
                {renderTitle()}
                {renderSubtitle()}
              </div>
            )}
            {renderDescription()}
            {renderActions()}
          </div>
        </>
      )
    }

    // Handle logo/icon scenarios
    if (logo || icon) {
      return (
        <>
          <CardHeader {...getHeaderProps()}>
            {renderLogo()}
            {renderIcon()}
            {(title || subtitle) && (
              <div className="flex flex-col">
                {renderTitle()}
                {renderSubtitle()}
              </div>
            )}
          </CardHeader>
          <CardBody {...getBodyProps()}>{renderDescription()}</CardBody>
          {renderActions()}
        </>
      )
    }

    // Default scenario (no image, no logo, no icon)
    return (
      <>
        {(title || subtitle) && (
          <CardHeader {...getHeaderProps()}>
            {renderTitle()}
            {renderSubtitle()}
          </CardHeader>
        )}
        {description && (
          <CardBody {...getBodyProps()}>{renderDescription()}</CardBody>
        )}
        {renderActions()}
      </>
    )
  }

  // Always wrap content in Card component
  return (
    <Card {...getBaseProps()}>
      {renderContent()}
      {children}
    </Card>
  )
})

LandCard.displayName = 'LandCard'

export { LandCard }
