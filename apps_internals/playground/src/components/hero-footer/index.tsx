import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'
import { Alert, Button, Image, Input, Link } from '@vezham/react/v2'

import { Props, useProps } from './types'

const Footers = forwardRef<'footer', Props>((props, ref) => {
  const {
    getBaseProps,
    getContainerProps,
    getGridWrapperProps,
    getLogoWrapperProps,
    getTaglineProps,
    getSocialWrapperProps,
    getSubscribeWrapperProps,
    getSubscribeTitleProps,
    getSubscribeDescProps,
    getFooterBottomProps,
    getFooterTextProps,
    getAlertWrapperProps,
    getGridTwoColProps,
    getGridInnerProps,
    getColSpacingProps,
    getFormProps,
    getInputWrapperProps,
    slots,
    footerNavigation,
    logo,
    showAlert,
    formState,
    setFormState,
    handleSubmit,
    setShowAlert,
    currentYear
  } = useProps({
    ...props,
    ref
  })

  const renderList = ({
    title,
    items
  }: {
    title: string
    items: { name: string; href: string }[]
  }) => (
    <div>
      <h3 className={slots.listTitle()}>{title}</h3>
      <ul className={slots.listUl()}>
        {items.map(item => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={slots.listLink()}
              size="sm"
              underline="hover">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer {...getBaseProps()}>
      <div {...getContainerProps()}>
        <div {...getGridWrapperProps()}>
          <div {...getLogoWrapperProps()}>
            <Image
              alt="Brand Logo"
              className="h-16 w-auto"
              src={logo}
              removeWrapper
            />
            <p {...getTaglineProps()}>Think, Innovate, Explore</p>

            <div {...getSocialWrapperProps()}>
              {footerNavigation.social.map(item => (
                <Link key={item.name} isExternal href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    aria-hidden="true"
                    className={slots.socialIcon()}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div {...getGridTwoColProps()}>
            <div {...getGridInnerProps()}>
              <div>
                {renderList({
                  title: 'Our Expertise',
                  items: footerNavigation.services
                })}
              </div>
              <div {...getColSpacingProps()}>
                {renderList({
                  title: 'Resources',
                  items: footerNavigation.resources
                })}
              </div>
            </div>

            <div {...getGridInnerProps()}>
              <div>
                {renderList({
                  title: 'Company',
                  items: footerNavigation.aboutUs
                })}
              </div>
              <div {...getColSpacingProps()}>
                {renderList({
                  title: 'Legal',
                  items: footerNavigation.legal
                })}
              </div>
            </div>
          </div>
        </div>

        <div {...getSubscribeWrapperProps()}>
          <div>
            <h3 {...getSubscribeTitleProps()}>Subscribe to our newsletter</h3>
            <p {...getSubscribeDescProps()}>
              Receive weekly updates with the newest insights, trends, and
              tools, straight to your email.
            </p>
          </div>
          <form {...getFormProps()} onSubmit={handleSubmit}>
            <Input
              isRequired
              aria-label="Email"
              autoComplete="email"
              name="email-address"
              placeholder="mia@gmail.com"
              value={formState.email}
              onValueChange={value =>
                setFormState({ ...formState, email: value })
              }
              startContent={
                <Icon className="text-default-500" icon="solar:letter-linear" />
              }
              type="email"
            />
            <div {...getInputWrapperProps()}>
              <Button
                color="primary"
                type="submit"
                className="w-full"
                isDisabled={showAlert != 'default'}
                isLoading={showAlert != 'default'}>
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        {showAlert !== 'default' && (
          <div {...getAlertWrapperProps()}>
            <Alert
              title={
                showAlert === 'success'
                  ? 'Subscribed Successfully!'
                  : 'Error sending message!'
              }
              description={
                showAlert === 'success'
                  ? 'Thank you for subscribing to our newsletter.'
                  : 'There was an error sending your message. Please try again or contact us directly.'
              }
              color={showAlert}
              onClose={() => setShowAlert('default')}
              classNames={{
                title: slots.alertTitle(),
                description: slots.alertDesc()
              }}
            />
          </div>
        )}

        <div {...getFooterBottomProps()}>
          <p {...getFooterTextProps()}>
            &copy; {currentYear} Vezham Technologies Private Limited.&nbsp;All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
})

Footers.displayName = 'Footers'

export { Footers }
