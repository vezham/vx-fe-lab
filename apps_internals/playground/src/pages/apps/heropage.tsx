import { Header } from '../../components/header'
import {
  headerActions,
  headerBrand,
  headerNavItems
} from '../../components/header/data'
import { HeroSection } from '../../components/herosection/hero-section-1'
import { AppMainContent } from '../../layouts/app-container-main-content'
import { AppMainHeader } from '../../layouts/app-container-main-header'
import { AppLayout } from '../../layouts/app-layout'
import { AppMainContainer } from '../../layouts/app-main-container'

const Page = () => {
  return (
    <AppLayout>
      <AppMainContainer>
        <AppMainHeader>
          <Header
            brand={headerBrand}
            nav={{ items: headerNavItems }}
            actions={headerActions}
            orientation="horizontal"
            position="left"
            placement="top"
          />
        </AppMainHeader>
        <AppMainContent>
          <HeroSection />
        </AppMainContent>
      </AppMainContainer>
    </AppLayout>
  )
}

export { Page }
