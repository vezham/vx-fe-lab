import { Carousel } from '../../components/Carousel'
import { CAROUSEL_IMAGES } from '../../components/Carousel/data'
import { Button } from '../../components/button'
import { Text } from '../../components/text'

const Important = () => {
  return (
    <div>
      <div className="my-8 flex flex-col items-center justify-center">
        <Text content=" Why it's important ? " variant="title" size="lg"></Text>
        <Text
          className="-mt-4 md:-mt-6"
          content="__"
          variant="title"
          color="primary"
          size="lg"></Text>
        <div className="my-8 flex flex-col items-center justify-center">
          <Text
            color="default"
            className="text-center"
            content="How many hours are you and your team wasting in meetings that aren’t adding to your productivity?"
            variant="paragraph"></Text>
          <Text
            color="default"
            className="text-center"
            content="In a 2017 survey of office workers by the Harvard Business Review, key findings brought to light how useless meetings can actually be."></Text>
        </div>
        <div>
          <Carousel
            images={CAROUSEL_IMAGES}
            autoPlay={true}
            autoPlayInterval={3000}
            variant="compact"
          />
        </div>
        <div className="my-8 flex flex-col items-center justify-center">
          <Text
            color="default"
            className="text-center"
            content="Feeling like there aren’t enough hours in the day is a common problem faced by many leaders in this world."
            variant="paragraph"></Text>
          <Text
            className="text-center"
            content="Try post meeting surveys now and avoid wasting time."></Text>
        </div>
        <div>
          <Button size="md" color="primary" variant="solid">
            Signup today
          </Button>
        </div>
      </div>
    </div>
  )
}

export { Important }
