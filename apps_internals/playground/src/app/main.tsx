import { RouterProvider, createRouter } from '@tanstack/react-router'

import { defineConfig } from '@vx/start'
import { APP_NAME } from '@vx/system-utils'

// import { Loading, ErrorPage, NotFound } from '@vezham/templates'

import { routeTree } from '../routeTree.gen'
import { Loading } from '../templates/loading'
import { Lockscreen } from '../templates/lockscreen'
import { NotFound } from '../templates/not-found'
import './global.css'

// @vx/NOTE: Create a new router instance
const router = createRouter({
  scrollRestoration: true,
  routeTree,
  defaultPendingComponent: () => <Loading />,
  defaultErrorComponent: () => <Lockscreen />,
  defaultNotFoundComponent: () => <NotFound app={APP_NAME} />
})

// @vx/NOTE: Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

defineConfig({
  children: <RouterProvider router={router} />
})
