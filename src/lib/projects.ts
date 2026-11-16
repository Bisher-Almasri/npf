export interface Project {
	title: string;
	description: string;
	tags: string[];
	github?: string;
	link?: string;
	image?: string;
	badge?: string;
	featured?: boolean;
}

const gh = (repo: string) => `https://github.com/Bisher-Almasri/${repo}`;

export const projects: Project[] = [
	{
		title: 'HedgeHog Bounce',
		description:
			'A 2.5D Godot game about a lost hedgehog bouncing, rolling and slamming its way home, with medals and top-5 leaderboards. Winner of Haven Toronto.',
		tags: ['Godot', 'GDScript', 'Game Jam'],
		github: gh('haven-toronto'),
		image: '/projects/haven-bg.webp',
		badge: 'Haven Toronto Winner',
		featured: true
	},
	{
		title: 'SpliTerm',
		description:
			'A cross-platform terminal with split panes, built with Tauri 2, SvelteKit, TypeScript and Rust.',
		tags: ['Tauri', 'Rust', 'SvelteKit'],
		github: gh('SpliTerm'),
		image: '/projects/spliterm.webp',
		featured: true
	},
	{
		title: 'YARS',
		description:
			'Yet Another Robotics Simulator: a browser-based simulator I made for my FTC robotics teams.',
		tags: ['React', 'TypeScript', 'Canvas'],
		github: gh('yars'),
		link: 'https://yars-nu.vercel.app',
		image: '/projects/yars.webp'
	},
	{
		title: 'Silk',
		description: 'A voxel game engine built with C++ and OpenGL.',
		tags: ['C++', 'Game Engine', '3D'],
		github: gh('silk')
	},
	{
		title: 'BigroOS',
		description: 'A 32-bit x86 operating system built with C and GNU Asm.',
		tags: ['C', 'Assembly', 'OS', 'Kernel'],
		github: gh('BigroOS')
	},
	{
		title: 'BSM',
		description:
			'Better Storage Mod: a NeoForge mod for Minecraft 1.21.1 that replaces AE2, RS2 and backpack mods with one storage system.',
		tags: ['Java', 'NeoForge', 'Minecraft'],
		github: gh('BSM')
	},
	{
		title: 'STA',
		description:
			"Second Tech API: a more stable replacement for FIRST Tech Challenge's Events API, with better uptime.",
		tags: ['Go', 'API', 'FTC'],
		github: gh('STA'),
		link: 'https://sta-green.vercel.app'
	},
	{
		title: 'Shipyard',
		description:
			'A Hack Club YSWS I host: ship 7 weeks of challenges and earn prizes.',
		tags: ['TypeScript', 'Hack Club', 'YSWS'],
		github: gh('shipyard'),
		link: 'https://shipyard-red.vercel.app'
	},
	{
		title: 'Astra',
		description: 'A browser written in Rust, because why not.',
		tags: ['Rust', 'Browser'],
		github: gh('astra')
	},
	{
		title: 'Rhino Linux',
		description: 'A Linux distribution I contribute to a lot.',
		tags: ['Linux', 'Open Source'],
		link: 'https://rhinolinux.org'
	}
];
