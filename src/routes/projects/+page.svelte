<script lang="ts">
	import { ArrowUpRight, ExternalLink, Github, Trophy } from 'lucide-svelte';
	import { projects } from '$lib/projects';
</script>

<svelte:head>
	<title>Projects | Bisher Al Masri</title>
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
				<div class="relative h-48 overflow-hidden bg-mocha-base">
					{#if project.image}
						<img
							src={project.image}
							alt={project.title}
							loading="lazy"
							decoding="async"
							width="800"
							height="450"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					{:else}
						<div
							class="flex h-full w-full items-center justify-center bg-linear-to-br from-mocha-base to-mocha-mantle font-mono text-5xl font-bold text-coffee-latte/40"
						>
							{project.title.slice(0, 2)}
						</div>
					{/if}
					{#if project.badge}
						<span
							class="absolute top-3 left-3 flex items-center gap-1 rounded-md border border-coffee-latte bg-mocha-base/90 px-2 py-1 text-xs font-bold text-coffee-latte"
						>
							<Trophy class="h-3 w-3" />
							{project.badge}
						</span>
					{/if}
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
						{#if project.github}
							<a
								href={project.github}
								class="flex items-center gap-2 text-sm text-mocha-subtext0 transition-colors hover:text-white"
							>
								<Github class="h-4 w-4" /> Code
							</a>
						{/if}
						{#if project.link}
							<a
								href={project.link}
								class="flex items-center gap-2 text-sm text-mocha-subtext0 transition-colors hover:text-white"
							>
								<ExternalLink class="h-4 w-4" /> Demo
							</a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex items-center justify-center">
		<a href="https://github.com/bisher-almasri" class="text-md flex items-center gap-2 link">
			<ArrowUpRight class="h-4 w-4" /> View More
		</a>
	</div>
</div>
