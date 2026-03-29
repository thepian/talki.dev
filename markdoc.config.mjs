import { defineMarkdocConfig, component } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  tags: {
    video: {
      render: component('./src/components/ui/VideoPlayer.astro'),
      attributes: {
        src:      { type: String, required: true },
        poster:   { type: String },
        controls: { type: Boolean },
        autoplay: { type: Boolean },
        loop:     { type: Boolean },
      },
    },
    island: {
      render: component('./src/components/islands/DynamicIsland.astro'),
      attributes: {
        // ESM bundle URL — jsdelivr, esm.sh, unpkg, or any public URL
        src:       { type: String, required: true },
        // Named export from the bundle
        component: { type: String, required: true },
        // JSON string of props to pass to the component, e.g. props='{"symbol":"BTC"}'
        props:     { type: String },
      },
    },
  },
})
