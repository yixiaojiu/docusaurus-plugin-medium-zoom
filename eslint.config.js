import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'dist',
    'demo/docusaurus-v3/.docusaurus',
    'demo/docusaurus-v2/.docusaurus',
  ],
})
