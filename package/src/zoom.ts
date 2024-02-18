import mediumZoom from 'medium-zoom'
import type { ClientModule } from '@docusaurus/types'
import siteConfig from '@generated/docusaurus.config'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import type { Zoom, ZoomOptions, ZoomSelector } from 'medium-zoom'

export interface ZoomConfig {
  selector?: ZoomSelector
  background?: {
    light: string
    dark: string
  }
  config?: ZoomOptions
}

function getBackgroundColor(zoom?: ZoomConfig) {
  const isDarkMode = document.querySelector('html[data-theme="dark"]')

  return isDarkMode
    ? zoom?.background?.dark || 'rgb(50, 50, 50)'
    : zoom?.background?.light || 'rgb(255, 255, 255)'
}

let zoomObject: Zoom
let selector: ZoomSelector

if (ExecutionEnvironment.canUseDOM) {
  const zoom = siteConfig?.themeConfig?.zoom
  const { selector: configSelector, config = {
    background: getBackgroundColor(),
  } } = zoom || ({} as ZoomConfig)
  selector = configSelector || '.markdown img'

  zoomObject = mediumZoom(selector, config)
  const observer = new MutationObserver(() => {
    if (!zoomObject)
      return

    zoomObject.update({ background: getBackgroundColor(zoom) })
  })

  const htmlNode = document.querySelector('html')

  observer.observe(htmlNode!, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
}

const module: ClientModule = {
  onRouteDidUpdate() {
    zoomObject.attach(selector)
  },
  onRouteUpdate() {
    return () => {
      zoomObject.detach(selector)
    }
  },
}
export default module
