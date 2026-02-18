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
  },
})
