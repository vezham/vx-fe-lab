import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'
import { Button, Input } from '@vezham/react/v2'

import { Props, useProps } from './types'

const PwaCtaEmailCampaign = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getTitleProps,
    getDescriptionProps,
    getCtaWrapperProps,
    getButtonWrapperProps,
    getInputProps,
    title,
    description,
    actions
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      <div {...getTitleProps()}>
        <h3>{title}</h3>
        <p {...getDescriptionProps()}>{description}</p>
      </div>
      <form {...getCtaWrapperProps()}>
        <Input
          startContent={<Icon icon="mdi:mail" width={24} height={24} />}
          {...getInputProps()}
        />
        <div {...getButtonWrapperProps()}>
          <Button color="primary" {...actions.button}>
            {actions.submit.label}
          </Button>
        </div>
      </form>
    </Component>
  )
})

PwaCtaEmailCampaign.displayName = 'PwaCtaEmailCampaign'

export { PwaCtaEmailCampaign }
