import { AppLayout } from '../../layouts/app-layout'
import { AppMainContainer } from '../../layouts/app-main-container'
import { AppSideBar } from '../../layouts/app-sidebar'

const Page = (props: any) => {
  return (
    <AppLayout>
      <AppSideBar
        header={
          <div className="bg-warning text-warning-foreground rounded-lg p-4 shadow-lg">
            HEADER
          </div>
        }
        content={
          <>
            <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              01
            </div>
            <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              02
            </div>
            <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              03
            </div>
            <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              04
            </div>
            <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              05
            </div>
          </>
        }
        footer={
          <div className="bg-warning text-warning-foreground rounded-lg p-4 shadow-lg">
            FOOTER
          </div>
        }
        device="desktop"
        layout="normal"
        direction="ltr"
        sidebarHidden={false}
      />

      <AppMainContainer className="border-primary border" />
    </AppLayout>
  )
}

export { Page }
