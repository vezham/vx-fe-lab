import { AppLayout } from '../../layouts/app-layout'
import { AppMainContainer } from '../../layouts/app-main-container'
import { AppMainSideBarContainer } from '../../layouts/app-main-sidebar-container'
import { AppSideBar } from '../../layouts/app-sidebar'
import { AutoLayout } from '../../layouts/v-auto-layout'

const Page = (props: any) => {
  const data = {
    sidebar: (
      <>
        <div className="bg-info text-info-foreground rounded-lg p-4 shadow-lg">
          {' '}
          01{' '}
        </div>
        <div className="p-4">02</div>
        <div className="p-4">03</div>
        <div className="p-4">04</div>
        <div className="p-4">05</div>
      </>
    ),
    children: (
      <AppMainContainer
        {...props}
        className="border-success bg-stripes stripes-default border">
        <AutoLayout className="grid grid-cols-3 gap-4 text-center font-mono text-sm leading-6 font-bold text-white">
          <div className="bg-primary text-primary-foreground rounded-lg p-4">
            {' '}
            01{' '}
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg p-4">
            {' '}
            02{' '}
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg p-4">
            {' '}
            03{' '}
          </div>
          <div className="bg-primary text-primary-foreground col-span-2 rounded-lg p-4 shadow-lg">
            {' '}
            04{' '}
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg p-4">
            {' '}
            05{' '}
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg p-4">
            {' '}
            06{' '}
          </div>
          <div className="bg-primary text-primary-foreground col-span-2 rounded-lg p-4 shadow-lg">
            {' '}
            07{' '}
          </div>
          <div className="bg-warning text-warning-foreground rounded-lg p-4">
            {' '}
            08{' '}
          </div>
          <div className="bg-warning text-warning-foreground rounded-lg p-4">
            {' '}
            09{' '}
          </div>
          <div className="bg-warning text-warning-foreground rounded-lg p-4">
            {' '}
            10{' '}
          </div>
        </AutoLayout>
      </AppMainContainer>
    )
  }
  return (
    <AppLayout>
      <AppMainSideBarContainer {...props} {...data} />
    </AppLayout>
  )
}

export { Page }
