import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { bunnyLoader } from './loaders/bunnyLoader'

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/caseStudies' }),
	schema: () =>
		z.object({
			order: z.number().optional(),
			publishDate: z.string().optional(),
			title: z.string(),
			description: z.string(),
			cardImage: z.string(),
			greyImage: z.string(),
			heroImage: z.string(),
			roles: z.array(z.string()),
			featured: z.boolean().optional(),
			people: z.array(z.string()).optional(),
			introduction: z.string(),
			aboutProject: z.object({
				leftCol: z.string(),
				rightCol: z.string()
			}),
			whatWeDid: z.object({
				leftCol: z.string(),
				rightCol: z.string()
			}),
			images: z.array(z.string()),
			clientFeedback: z.array(
				z.object({
					blockquote: z.string(),
					figcaption: z.string(),
					cite: z.string()
				})
			)
		})
})

const articles = defineCollection({
	loader: bunnyLoader({
		storageZone: (import.meta.env.BUNNY_STORAGE_ZONE as string | undefined) ?? process.env.BUNNY_STORAGE_ZONE ?? 'talki-dev',
		directory: 'articles',
	}),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.string(),
			tags: z.array(z.string()).optional(),
			heroImage: z.string().optional(),
		})
})

export const collections = {
	caseStudies,
	articles,
}
