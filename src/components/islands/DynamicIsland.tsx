import { type ComponentType, lazy, type LazyExoticComponent, Suspense } from 'react'

type Props = {
	src: string
	component: string
	props?: Record<string, unknown>
}

// Module cache — avoids re-creating lazy() on every render
const cache = new Map<string, LazyExoticComponent<ComponentType<Record<string, unknown>>>>()

function getIsland(src: string, component: string) {
	const key = `${src}#${component}`
	if (!cache.has(key)) {
		cache.set(
			key,
			lazy(() =>
				import(/* @vite-ignore */ src).then((m) => {
					if (!m[component]) throw new Error(`No export "${component}" found in ${src}`)
					return { default: m[component] }
				})
			)
		)
	}
	return cache.get(key) as LazyExoticComponent<ComponentType<Record<string, unknown>>>
}

export default function DynamicIsland({ src, component, props = {} }: Props) {
	const Comp = getIsland(src, component)
	return (
		<Suspense
			fallback={
				<div className="animate-pulse h-32 rounded bg-neutral-100 dark:bg-neutral-800" />
			}
		>
			<Comp {...props} />
		</Suspense>
	)
}
