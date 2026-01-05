import { Input } from '@vezham/react/v2'

import { Button } from '../../components/button'
import { Text } from '../../components/text'

const Form = () => {
  return (
    <div className="mt-12">
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="bg-primary col-span-1 w-full p-16 lg:col-span-4">
          <Text
            content="We all know that time is money..."
            variant="title"
            size="md"
            color="white"
          />
          <Text
            content="so stop wasting time, and save money with Rate It!"
            variant="title"
            size="md"
            color="white"
          />
        </div>
        <div className="col-span-1 grid w-full p-6 lg:col-span-7">
          <div className="flex flex-col gap-3 md:flex-row md:gap-6">
            <Input
              label="FirstName"
              type="text"
              variant="underlined"
              size="lg"
            />
            <Input
              label="LastName"
              type="text"
              variant="underlined"
              size="lg"
            />
          </div>
          <div className="flex flex-col gap-3 md:mt-6 md:flex-row md:gap-6">
            <Input label="Mail" type="text" variant="underlined" size="lg" />
            <Input label="Phone" type="text" variant="underlined" size="lg" />
          </div>
          <div className="mt-6">
            <Input
              label="Message"
              placeholder="Write a message"
              type="text"
              variant="underlined"
              size="lg"
            />
          </div>
          <div className="mt-6 flex justify-center md:items-end md:justify-end">
            <Button color="primary" variant="solid" size="lg">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Form }
