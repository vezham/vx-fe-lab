import { Icon } from '@iconify/react'
import React from 'react'

import { Button } from '../components/button'

const Page = () => {
  return (
    <div className="flex gap-4 p-5">
      <Button color="secondary" variant="flat" size="lg">
        Submit for free
      </Button>
      <Button color="primary" variant="faded" size="md">
        Send Message
      </Button>
      <Button color="danger" variant="bordered" size="sm">
        Delete
      </Button>
      <Button color="success" variant="flat" radius="full" size="lg">
        Submit
      </Button>
      <Button
        endContent={<Icon icon="mdi-star" />}
        color="secondary"
        variant="bordered"
        isDisabled
        fullWidth
        size="lg">
        Hey
      </Button>
    </div>
  )
}

export { Page }
