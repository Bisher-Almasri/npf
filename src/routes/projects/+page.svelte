<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';

	const projects = [
		{
			title: 'Silk',
			description: 'A voxel game engine built with C++ and OpenGL.',
			tags: ['C++', 'Game Engine', '3D'],
			link: '#',
			github: '#',
			image:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'BigroOS',
			description: 'A 32-bit x86 operating system built with C and GNU Asm.',
			tags: ['C', 'Assembly', 'OS', 'Kernel'],
			link: '#',
			github: '#',
			image:
				'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Rhino Linux',
			description: 'A Linux distribution I contribute to a lot.',
			tags: ['Next.js', 'Linux', 'Kernel'],
			link: '#',
			github: '#',
			image:
				'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
		}
	];
</script>

<svelte:head>
	<title>Projects | DevBrew</title>
</svelte:head>

<div class="mx-auto max-w-6xl space-y-12 py-12">
	<div class="space-y-4 text-center">
		<h1 class="text-4xl font-bold text-coffee-foam md:text-5xl">Featured Projects</h1>
		<p class="text-mocha-subtext0">A collection of things I've brewed up recently.</p>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<div
				class="group flex h-full flex-col overflow-hidden rounded-2xl border border-mocha-surface1 bg-mocha-surface0 transition-all hover:border-coffee-latte hover:shadow-lg hover:shadow-coffee-latte/10"
			>
				<div class="relative h-48 overflow-hidden bg-mocha-surface1">
					<div
						class="flex h-full w-full items-center justify-center bg-mocha-overlay0/20 text-mocha-subtext0"
					>
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
				</div>

				<div class="flex grow flex-col space-y-4 p-6">
					<h3
						class="text-xl font-bold text-mocha-text transition-colors group-hover:text-coffee-latte"
					>
						{project.title}
					</h3>
					<p class="grow text-sm leading-relaxed text-mocha-subtext0">
						{project.description}
					</p>

					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span class="rounded-md bg-mocha-base px-2 py-1 font-mono text-xs text-accent-blue">
								{tag}
							</span>
						{/each}
					</div>

					<div class="mt-auto flex items-center gap-4 border-t border-mocha-surface1 pt-4">
						<a
							href={project.github}
							class="flex items-center gap-2 text-sm text-mocha-subtext0 transition-colors hover:text-white"
						>
							<Github class="h-4 w-4" /> Code
						</a>
						<a
							href={project.link}
							class="flex items-center gap-2 text-sm text-mocha-subtext0 transition-colors hover:text-white"
						>
							<ExternalLink class="h-4 w-4" /> Demo
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
