import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts', 'src/zoom.ts'],
    // https://tsup.egoist.dev/#code-splitting
    // Code splitting currently only works with the esm output format, and it's enabled by default. If you want code splitting for cjs output format as well, try using --splitting flag which is an experimental feature to get rid of the limitation in esbuild.
    // splitting: true,
    clean: true,
    dts: true,
    shims: true,
    format: ['cjs', 'esm'],
    minify: !options.watch,
    external: [
      '@generated/docusaurus.config',
      '@docusaurus/ExecutionEnvironment',
      ...Object.keys(pkg.dependencies || {}),
    ],

    outExtension({ format }) {
      return {
        js: `.${format === 'esm' ? 'mjs' : 'cjs'}`,
      }
    },
  }
})
