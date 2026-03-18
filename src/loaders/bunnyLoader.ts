import type { Loader } from 'astro/loaders'
import matter from 'gray-matter'

interface BunnyFile {
  ObjectName: string
  IsDirectory: boolean
  LastChanged: string
  Length: number
}

interface BunnyLoaderOptions {
  /** Bunny.net storage zone name */
  storageZone: string
  /** Path within the storage zone, e.g. 'caseStudies' */
  directory: string
  /** Storage region hostname. Defaults to 'storage.bunnycdn.com' */
  region?: string
  /** Env var name holding the storage zone password. Defaults to 'BUNNY_STORAGE_PASSWORD' */
  passwordEnvVar?: string
}

export function bunnyLoader(options: BunnyLoaderOptions): Loader {
  const {
    storageZone,
    directory,
    region = 'storage.bunnycdn.com',
    passwordEnvVar = 'BUNNY_STORAGE_PASSWORD',
  } = options

  const baseUrl = `https://${region}/${storageZone}/${directory}`

  return {
    name: 'bunny-storage-loader',

    async load({ store, meta, generateDigest, logger }) {
      const password = (import.meta.env[passwordEnvVar] as string | undefined) ?? process.env[passwordEnvVar]
      if (!password) {
        throw new Error(
          `bunnyLoader: env var "${passwordEnvVar}" is required but not set.`
        )
      }

      const headers = { AccessKey: password }

      // List files in the storage zone directory
      const listRes = await fetch(`${baseUrl}/`, { headers })
      if (!listRes.ok) {
        throw new Error(
          `bunnyLoader: failed to list "${baseUrl}" — ${listRes.status} ${listRes.statusText}`
        )
      }
      const files: BunnyFile[] = await listRes.json()

      const seenIds = new Set<string>()

      for (const file of files) {
        if (file.IsDirectory) continue
        if (!file.ObjectName.endsWith('.md')) continue

        const id = file.ObjectName.replace(/\.md$/, '')
        seenIds.add(id)

        // Use LastChanged as a cheap digest — skip fetch if unchanged
        const digest = generateDigest(file.LastChanged)
        if (store.get(id)?.digest === digest) continue

        const fileRes = await fetch(`${baseUrl}/${file.ObjectName}`, { headers })
        if (!fileRes.ok) {
          logger.warn(`bunnyLoader: skipping "${file.ObjectName}" — ${fileRes.status}`)
          continue
        }

        const raw = await fileRes.text()
        const { data, content } = matter(raw)

        store.set({ id, data, body: content, digest })
        logger.info(`bunnyLoader: loaded "${id}"`)
      }

      // Remove entries that no longer exist in the bucket
      for (const [id] of store.entries()) {
        if (!seenIds.has(id)) {
          store.delete(id)
          logger.info(`bunnyLoader: removed deleted entry "${id}"`)
        }
      }

      meta.set('last-sync', new Date().toISOString())
    },
  }
}
