# External Components for talki.dev Articles

This guide explains how to make interactive components from a case study repo
embeddable in talki.dev articles via the `{% island %}` Markdoc tag.

---

## How it works

When an article contains `{% island src="..." component="..." %}`, talki.dev:

1. Renders a skeleton placeholder server-side
2. When the tag scrolls into view, dynamically imports the ESM bundle from the URL
3. Mounts the named React component, passing any `props` you provided

React and ReactDOM are provided by talki.dev — **do not bundle them**.

---

## Requirements for your bundle

| Requirement | Detail |
|---|---|
| Format | ESM (`"type": "module"` or `.mjs`) |
| React/ReactDOM | Must be **external** — do not bundle |
| Exports | Named exports (e.g. `export { OptionsChain }`) |
| Hosting | Any public URL (see options below) |

---

## Vite library build config

Add to your `vite.config.ts` (or create a separate `vite.lib.config.ts`):

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',       // your component exports
      formats: ['es'],
      fileName: 'options-chain',   // outputs dist/options-chain.js
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
```

Run with: `vite build --config vite.lib.config.ts`

Your `src/index.ts` should export components by name:

```ts
export { OptionsChain } from './components/OptionsChain'
export { SparklineChart } from './components/SparklineChart'
```

---

## Publishing options

### Option A — Commit `dist/` to the repo (simplest)

```bash
git add dist/
git commit -m "build: update component bundle"
git tag v1.0.0
git push origin main --tags
```

Access via **jsDelivr**:
```
https://cdn.jsdelivr.net/gh/{owner}/{repo}@{tag}/dist/options-chain.js
```

Example:
```
https://cdn.jsdelivr.net/gh/henrikvendelbo/coin-future@v1.0.0/dist/options-chain.js
```

### Option B — GitHub Release asset

1. Build `dist/options-chain.js`
2. Create a GitHub release and attach the file as an asset
3. jsDelivr mirrors release assets at the same URL pattern as above

### Option C — npm package

```bash
npm publish
```

Access via **esm.sh** (preferred — handles peer deps correctly):
```
https://esm.sh/{package-name}@{version}
```

Or via **unpkg**:
```
https://unpkg.com/{package-name}@{version}/dist/options-chain.js
```

---

## Using in an article

In your `.md` article file on Bunny.net:

```markdown
{% island
   src="https://cdn.jsdelivr.net/gh/henrikvendelbo/coin-future@v1.0.0/dist/options-chain.js"
   component="OptionsChain"
   props='{"symbol":"BTC"}' %}
```

The `props` attribute is a JSON string. All values must be serialisable (strings,
numbers, booleans, arrays, plain objects).

---

## Styling

To avoid class name conflicts with talki.dev's Tailwind styles:

- Use **CSS Modules** (`styles.module.css`) — classes are hashed at build time
- Or use **CSS-in-JS** (e.g. `styled-components`, `emotion`)
- Avoid global class names that overlap with Tailwind utilities

---

## Testing locally

1. Run the library build: `vite build --config vite.lib.config.ts`
2. Serve the dist folder: `npx serve dist --cors`
3. Note the local URL (e.g. `http://localhost:3000/options-chain.js`)
4. In a local talki.dev article, use that URL in the `{% island %}` tag
5. Run `pnpm dev` in talki.dev and verify the component loads and hydrates
