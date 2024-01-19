import mediumZoom from 'medium-zoom'
import type { ClientModule } from '@docusaurus/types'
import siteConfig from '@generated/docusaurus.config'

import type { ZoomOptions, ZoomSelector } from 'medium-zoom'

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

const module: ClientModule = {
  onRouteDidUpdate() {
    if (typeof window === 'undefined')
      return

    const zoom = siteConfig?.themeConfig?.zoom
    const { selector = '.markdown img', config = {
      background: getBackgroundColor(),
    } } = zoom || ({} as ZoomConfig)

    const zoomObject = mediumZoom(selector, config)
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
  },
}
export default module
