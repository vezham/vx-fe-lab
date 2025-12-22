import { Header } from '../components/header'
import {
  headerActions,
  headerBrand,
  headerNavItems
} from '../components/header/data'

const Page = () => {
  return (
    <>
      <Header
        brand={headerBrand}
        nav={{ items: headerNavItems }}
        actions={headerActions}
        orientation="horizontal"
        position="left"
        placement="bottom"
      />
    </>
  )
}

export { Page }
