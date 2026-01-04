import { Text } from '../../components/text'
import { PricingComp } from '../../layouts/land-pricing'

const Pricing = () => {
  return (
    <div className="my-8 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Text
          className="text-center"
          content=" Customizable plans for every company"
          variant="title"
          size="lg"></Text>
        <Text
          className="-mt-4 md:-mt-6"
          content="__"
          variant="title"
          color="primary"
          size="lg"></Text>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center">
        <Text
          color="default"
          className="text-center"
          content="Feeling like there aren’t enough hours in the day is a common problem faced by many leaders in this world."
          variant="paragraph"></Text>
        <Text
          className="text-center"
          content="Try post meeting surveys now and avoid wasting time."></Text>
      </div>
      <div className="px-5">
        <PricingComp />
      </div>
    </div>
  )
}

export { Pricing }
