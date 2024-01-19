# docusaurus-plugin-medium-zoom

a medium-zoom plugin for docusaurus v2 and v3, refrence [docusaurus-plugin-image-zoom](https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom).

## Installation

```sh
npm install docusaurus-plugin-medium-zoom
# or
yarn add docusaurus-plugin-medium-zoom
# or
pnpm add docusaurus-plugin-medium-zoom
```

## Usage

add the plugin in `docusaurus.config.ts` file:

```ts
// docusaurus.config.ts
import type { Config } from '@docusaurus/types'
import type { ThemeConfig, ZoomConfig } from 'docusaurus-plugin-medium-zoom'

export default {
  // ...other config
  plugins: [
    'docusaurus-plugin-image-zoom'
    // ...other plugins
  ],

  themeConfig: {
    // ...other themeConfig
    zoom: { selector: '.markdown img', background: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(50, 50, 50)',
    }, config: {
      // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
    } } satisfies ZoomConfig,
  } satisfies ThemeConfig,
} as Config
```

| Option        | Description                                                                                      | Default Value                                                                                         |
|---------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `selector`    | (optional) The selector to use for the images to zoom.                                          | `.markdown img`                                                                                      |
| `background`  | (optional) The background color to use for the zoomed image.                                     | `{ light: 'rgb(255, 255, 255)', dark: 'rgb(50, 50, 50)' }`                                           |
| `config`      | (optional) The configuration object to pass to `medium-zoom`.                                   | `{}`                                                                                                 |
