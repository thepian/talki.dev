// Navigation Bar
// ------------
// Description: The navigation bar data for the website.

export interface NavSubLink {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	align?: string
}

export interface NavData {
	navItems: NavItem[]
}

export async function getNavigationBarData() {
	const { default: data } = await import('../data/json-files/navigationBarData.json')
	return data as unknown as NavData
}
