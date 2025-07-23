// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Milo – Personal Resume & Portfolio Theme Built with Astro by Oxygenna',
	siteDescription:
		'Milo is a fast, elegant, and accessible Astro theme built to showcase your resume, projects, and skills. Ideal for creating a personal portfolio or professional profile site.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Henrik logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
