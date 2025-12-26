import { Icon } from '@iconify/react'
import { useRef } from 'react'
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@vezham/react-utils'

import { useTheme } from '@vx-oss/use-theme'

import { useEffect, useLogger, useStore } from '../../../hooks'

const NAMESPACE = 'Resizable'

export enum Vdevice {
  // WATCH = 'watch',
  MINI_MOBILE = 'mob-sm',
  MOBILE_PORTRAIT = 'mob',
  MOBILE_LANDSCAPE = 'mob-l',
  MOBILE_LANDSCAPE_XL = 'mob-xl',
  TAB_PORTRAIT = 'tab',
  TAB_LANDSCAPE = 'tab-l',
  LAPTOP = 'lap',
  DESKTOP = 'desk'
  // TV = 'tv'
}

type ResizableProps = React.ComponentProps<typeof ResizablePrimitive.PanelGroup>

const Resizable = ({
  className,
  autoSaveId = 'app-id',
  ...props
}: ResizableProps) => (
  <ResizablePrimitive.PanelGroup
    autoSaveId={`v-persistence-${autoSaveId}`}
    className={cn(
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
      className
    )}
    {...props}
  />
)

// NOTE: wjdlz/ref https://react-resizable-panels.vercel.app
// panelGroup.setLayout([40, 60]);
// collapsible={false} collapsedSize={15} onCollapse={()=>{useLogger.debug(NAMESPACE, 'onCollapse [v]')}}
interface ResizablePanelProps
  extends React.ComponentProps<typeof ResizablePrimitive.Panel> {
  variant: 'sidebar' | 'panel' | 'container' | 'sidebar-container'
}

const ResizablePanel = ({
  className,
  variant,
  ...props
}: ResizablePanelProps) => {
  const ref = useRef<ResizablePrimitive.ImperativePanelHandle>(null)
  const { sidebar, device } = useTheme()

  const config_size = {
    panel: { default: 25, collapse: 10, min: 7, max: 35, hide: 7 },
    panel_md: { default: 25, min: 10, max: 35, hide: 5 },
    // panel_sm: { default: 25, min: 10, max: 35, hide: 15 },
    panel_xs: { default: 0, min: 0, max: 0, hide: 0 }
  }

  const resizeBySidebar = () => {
    if (['sidebar', 'panel'].includes(variant)) {
      if ([Vdevice.DESKTOP, Vdevice.LAPTOP].includes(device)) {
        return config_size.panel.hide
      } else if (
        [Vdevice.TAB_LANDSCAPE, Vdevice.MOBILE_LANDSCAPE_XL].includes(device)
      ) {
        return config_size.panel_md.hide
      }
    }
    return 10
  }

  // defaultSize={25}
  // minSize={10}
  // maxSize={35}
  if (['sidebar', 'panel'].includes(variant)) {
    const config = config_size.panel
    props.defaultSize = config.default
    props.collapsible = true
    props.collapsedSize = config.collapse
    props.minSize = config.min
    props.maxSize = config.max
  }

  const ignore_variant = ['container', 'sidebar-container']
  // defaultSize={25}
  // minSize={10}
  // maxSize={35}

  useEffect(() => {
    const panel = ref.current
    if (!panel) {
      useLogger.debug(NAMESPACE, '[panel] no ref')
      return
    } else if (ignore_variant.includes(variant)) {
      useLogger.debug(NAMESPACE, '[panel][ignore] ', variant)
      return
    }

    const parseKey = (id: string) => `vsbp-${id}`

    if (sidebar == 'show') {
      const id = panel.getId()
      const size = panel.getSize()
      const vsize = useStore.get(parseKey(id))
      useStore.delete(parseKey(id))
      useLogger.debug(
        NAMESPACE,
        `[panel][sidebar] | ${id} ${size} ${vsize}`,
        variant
      )
      panel.resize(Number(vsize) || size)
    } else {
      const id = panel.getId()
      const size = panel.getSize()
      useStore.set(parseKey(id), size)
      useLogger.debug(NAMESPACE, `[panel][!sidebar] | ${id} ${size}`, variant)
      panel.resize(resizeBySidebar())
    }
  }, [sidebar])

  return (
    <ResizablePrimitive.Panel
      {...props}
      className={cn('!overflow-visible', className)}
      ref={ref}
    />
  )
}

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'hover:bg-info bg-border focus-visible:ring-ring relative flex w-px items-center justify-center opacity-0 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 hover:opacity-100 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className
    )}
    {...props}>
    {withHandle && (
      <div className="border-info bg-info z-10 flex h-4 w-3 items-center justify-center rounded-sm border">
        <Icon icon="mdi:dots" className="fill-info-foreground h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { Resizable, ResizableHandle, ResizablePanel }
export type { ResizablePanelProps, ResizableProps }
