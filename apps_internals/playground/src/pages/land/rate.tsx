import { Image } from '@vezham/react/v2'

import Pattern from '../../../public/assets/Pattern.png'
import { Button } from '../../components/button'
import { Text } from '../../components/text'
import { CardLayout } from '../../layouts/land-card'

const Rate = () => {
  return (
    <div className="w-full">
      <CardLayout columns={2} variant="default">
        <div className="flex items-center justify-center p-5">
          <div className="flex flex-col items-start justify-center">
            <Text
              content="Send out your first"
              variant="title"
              size="lg"></Text>
            <Text content="Rate it today!" variant="title" size="lg"></Text>
            <Button className="mt-6" variant="solid" color="primary" size="lg">
              Try for free
            </Button>
          </div>
        </div>

        <div className="hidden sm:block">
          <Image src={Pattern} alt="Image error" />
        </div>
      </CardLayout>
    </div>
  )
}

export { Rate }
