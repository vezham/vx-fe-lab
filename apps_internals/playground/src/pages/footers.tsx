import { Footers } from '../components/hero-footer'
import { footerNavigation } from '../components/hero-footer/data'

const Page = () => {
  return (
    <>
      <Footers className="mt-5" footerNavigation={footerNavigation} />
    </>
  )
}

export { Page }
