import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin } from '@docusaurus/types'

export default function (): Plugin {
  return {
    name: 'docusaurus-plugin-medium-zoom',

    getClientModules() {
      return [path.resolve(path.dirname(fileURLToPath(import.meta.url)), './zoom')]
    },
  }
}
