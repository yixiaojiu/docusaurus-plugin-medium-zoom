declare module '@generated/docusaurus.config' {
  import type { ZoomOptions, ZoomSelector } from 'medium-zoom'

  interface ZoomConfig {
    selector: ZoomSelector
    background: {
      light: string
      dark: string
    }
    config: ZoomOptions
  }

  interface DocusaurusConfig {
    themeConfig: {
      zoom?: ZoomConfig
    }
  }

  const config: DocusaurusConfig
  export default config
}
