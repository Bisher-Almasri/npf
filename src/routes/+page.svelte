<script lang="ts">
	import {
		Github,
		Linkedin,
		Mail,
		MapPin,
		Coffee,
		ArrowUpRight,
		Terminal,
		Newspaper,
		ExternalLink,
		User,
		Code2,
		Trophy
	} from 'lucide-svelte';
	import BentoItem from '$lib/components/BentoItem.svelte';
	import { projects } from '$lib/projects';

	let { data } = $props();

	const featuredProjects = projects.filter((p) => p.featured);

	let currentTime = $state('00:00 AM');

	$effect(() => {
		currentTime = new Date().toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			timeZoneName: 'short'
		});
		const interval = setInterval(() => {
			currentTime = new Date().toLocaleTimeString('en-US', {
				hour: '2-digit',
				minute: '2-digit',
				timeZoneName: 'short'
			});
		}, 60000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Home | Bisher Al Masri</title>
</svelte:head>

<div class="animate-fade-in-up grid grid-cols-1 gap-4 pb-20 md:grid-cols-6">
	<div class="row-span-1 md:col-span-4">
		<BentoItem class="h-full justify-center bg-linear-to-br from-mocha-base to-mocha-mantle p-8!">
			<div class="space-y-6">
				<div
					class="inline-flex w-fit items-center gap-2 rounded-md border-2 border-mocha-surface1 bg-mocha-surface0 px-3 py-1 text-xs font-bold tracking-wider text-coffee-latte uppercase"
				>
					<span class="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
					STATUS: Available
				</div>

				<div class="space-y-2">
					<h1 class="text-4xl leading-tight font-bold text-coffee-foam md:text-5xl">
						Hi, I'm <span class="text-coffee-latte">Bisher Al Masri</span>.
					</h1>
					<h2 class="text-xl font-medium text-mocha-subtext0 md:text-2xl">
						Full Stack Developer & UI Enthusiast.
					</h2>
				</div>

				<p class="max-w-2xl text-base leading-relaxed text-mocha-subtext1">
					I build code that works. Just won <span class="font-medium text-coffee-latte"
						>Haven Toronto</span
					>
					with HedgeHog Bounce, and I'm currently working on robotics:
					<span class="font-medium text-coffee-latte">FTC & VEX</span>
					and my own 3d game engine <span class="font-medium text-coffee-latte">Silk</span>.
				</p>

				<div class="flex gap-4 pt-2">
					<a
						href="https://github.com/bisher-almasri"
						class="rounded-md border-2 border-transparent bg-mocha-surface0 p-2 text-mocha-subtext0 transition-all hover:border-coffee-latte hover:bg-mocha-surface1 hover:text-white"
						><Github size={20} /></a
					>
					<a
						href="https://linkedin.com/in/bisher-al-masri-6b3838299/"
						class="rounded-md border-2 border-transparent bg-mocha-surface0 p-2 text-mocha-subtext0 transition-all hover:border-coffee-latte hover:bg-mocha-surface1 hover:text-white"
						><Linkedin size={20} /></a
					>
					<a
						href="mailto:bisherk.almasri@gmail.com"
						class="rounded-md border-2 border-transparent bg-mocha-surface0 p-2 text-mocha-subtext0 transition-all hover:border-coffee-latte hover:bg-mocha-surface1 hover:text-white"
						><Mail size={20} /></a
					>
				</div>
				<a
				href="/about"
				class="flex items-center gap-1 link w-fit"
				>More About Me <ArrowUpRight size={14} /></a
			>
			</div>
		</BentoItem>
	</div>

	<div class="row-span-1 md:col-span-2">
		<BentoItem title="My Toolbox" class="h-full bg-mocha-surface0">
			<div class="flex flex-col gap-4">
				<div
					class="flex items-center gap-3 rounded-lg border border-mocha-surface1 bg-mocha-base/50 p-3"
				>
					<div class="rounded-md bg-mocha-surface0 p-2 text-coffee-latte">
						<Terminal size={18} />
					</div>
					<div>
						<h4 class="text-sm font-bold text-mocha-text">Backend</h4>
						<p class="text-xs text-mocha-subtext0">Rust, Go, Node.js</p>
					</div>
				</div>

				<div
					class="flex items-center gap-3 rounded-lg border border-mocha-surface1 bg-mocha-base/50 p-3"
				>
					<div class="rounded-md bg-mocha-surface0 p-2 text-coffee-latte">
						<Code2 size={18} />
					</div>
					<div>
						<h4 class="text-sm font-bold text-mocha-text">Frontend</h4>
						<p class="text-xs text-mocha-subtext0">SvelteKit, Tailwind, TS</p>
					</div>
				</div>

				<div class="mt-2">
					<p class="mb-2 text-xs font-bold tracking-wider text-mocha-subtext0 uppercase">
						All Skills
					</p>
					<div class="flex flex-wrap gap-2">
						{#each ['SvelteKit', 'TypeScript', 'Tailwind', 'Go', 'Rust', 'Node.js', 'C++', 'OpenGL'] as skill}
							<span
								class="cursor-default rounded-md border border-mocha-surface1 bg-mocha-base px-2 py-1 text-[10px] font-bold text-mocha-subtext1 uppercase transition-colors hover:border-coffee-latte hover:bg-coffee-latte hover:text-mocha-base"
								>{skill}</span
							>
						{/each}
					</div>
				</div>
			</div>
		</BentoItem>
	</div>

	<div class="mt-4 mb-2 flex items-center justify-between md:col-span-6">
		<h3 class="flex items-center gap-2 text-xl font-bold text-coffee-foam">
			<Coffee class="text-coffee-latte" size={20} /> Selection of Work
		</h3>
		<a
			href="/projects"
			class="flex items-center gap-1 text-sm text-mocha-subtext0 hover:text-coffee-latte"
			>View Archives <ArrowUpRight size={14} /></a
		>
	</div>

	{#each featuredProjects as project}
		<div class="md:col-span-3">
			<BentoItem
				href={project.github ?? project.link}
				class="group relative min-h-[280px] overflow-hidden p-0!">
				{#if project.image}
					<img
						src={project.image}
						alt=""
						loading="lazy"
						decoding="async"
						class="absolute inset-0 h-full w-full rounded-xl object-cover opacity-50 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
					/>
				{/if}
				<div
					class="absolute inset-0 rounded-xl bg-linear-to-t from-mocha-base via-mocha-base/60 to-transparent"
				></div>

				<div class="relative z-10 flex h-full flex-col justify-between p-8">
					<div class="flex items-start justify-between">
						<span
							class="flex items-center gap-1 rounded-md border px-3 py-1 font-mono text-xs font-bold backdrop-blur-none {project.badge
								? 'border-coffee-latte bg-mocha-base/90 text-coffee-latte'
								: 'border-mocha-surface1 bg-mocha-base/90 text-accent-pink'}"
						>
							{#if project.badge}<Trophy size={12} />{/if}
							{project.badge ?? project.tags[0]}
						</span>
						<div
							class="rounded-md border border-transparent bg-mocha-base/90 p-2 text-mocha-text backdrop-blur-none transition-colors group-hover:border-coffee-latte group-hover:text-coffee-latte"
						>
							<ArrowUpRight size={16} />
						</div>
					</div>

					<div
						class="translate-y-2 space-y-2 transition-transform duration-300 group-hover:translate-y-0"
					>
						<h3
							class="text-2xl font-bold text-gray-100 transition-colors group-hover:text-coffee-latte"
						>
							{project.title}
						</h3>
						<p class="line-clamp-2 text-sm leading-relaxed text-mocha-subtext0">
							{project.description}
						</p>
					</div>
				</div>
			</BentoItem>
		</div>
	{/each}

	<div class="mt-4 md:col-span-2">
		<BentoItem class="group relative h-full justify-center overflow-hidden bg-mocha-mantle">
			<div class="flex flex-col items-center gap-2 text-center">
				<span class="block text-xs tracking-wider text-mocha-subtext0 uppercase"
					>Total Installs</span
				>
				<span
					class="text-4xl font-bold text-coffee-foam transition-colors group-hover:text-coffee-latte"
				>
					{data.stats.total.toLocaleString()}
				</span>

				<!-- </div> -->

				<!-- Breakdown Tooltip/Pill -->
				<div
					class="mt-2 flex items-center gap-3 rounded-md border border-mocha-surface0/50 bg-mocha-surface0/30 px-4 py-1.5 text-xs text-mocha-subtext0 backdrop-blur-none transition-all group-hover:bg-mocha-surface0/50 group-hover:text-mocha-text"
				>
					<span class="flex items-center gap-1.5">
						<div class="h-2 w-2 rounded-full bg-[#007acc]"></div>
						{(data.stats.vscode / 1000).toFixed(1)}k VS Code
					</span>
					<div class="h-3 w-px bg-mocha-surface1"></div>
					<span class="flex items-center gap-1.5">
						<div class="h-2 w-2 rounded-full bg-[#CB3837]"></div>
						{(data.stats.npm / 1000).toFixed(1)}k NPM
					</span>
				</div>
			</div>
		</BentoItem>
	</div>

	<div class="mt-4 md:col-span-2">
		<BentoItem class="group relative h-full overflow-hidden bg-mocha-mantle p-0!">
			<div
				class="absolute inset-0 bg-[#242b3b] opacity-50 transition-opacity group-hover:opacity-70"
				style="background-image: radial-gradient(#394a6d 1px, transparent 1px); background-size: 16px 16px;"
			></div>

			<div class="relative z-10 flex h-full items-center gap-4 p-6">
				<div
					class="rounded-md border-2 border-mocha-surface1 bg-mocha-base p-3 text-coffee-latte shadow-none"
				>
					<MapPin size={20} />
				</div>
				<div>
					<p class="text-sm text-mocha-subtext0">Currently based in</p>
					<p class="text-lg font-bold text-mocha-text">Toronto, ON</p>
					<p class="mt-1 font-mono text-xs text-accent-blue">{currentTime}</p>
				</div>
			</div>
		</BentoItem>
	</div>

	<div class="mt-4 md:col-span-2">
		<BentoItem
			href="/contact"
			class="group h-full justify-center border-coffee-latte/30 bg-linear-to-br from-coffee-latte/10 to-mocha-mantle hover:border-coffee-latte"
		>
			<div class="flex flex-col items-center space-y-3 text-center">
				<div
					class="rounded-md border border-transparent bg-coffee-latte/20 p-3 text-coffee-latte transition-transform group-hover:scale-105 group-hover:border-coffee-latte"
				>
					<Mail size={24} />
				</div>
				<h3 class="font-bold text-mocha-text">Ready to start?</h3>
				<p class="max-w-[150px] text-xs text-mocha-subtext0">
					Let's build something amazing together.
				</p>
			</div>
		</BentoItem>
	</div>

	<!-- ROW 4: Latest Posts -->
	<div class="mt-8 md:col-span-6">
		<div class="mb-4 flex items-center justify-between px-2">
			<h3 class="font-bold text-mocha-text">Recent Writings</h3>
			<a href="/blog" class="text-xs text-mocha-subtext0 hover:text-coffee-latte">All Posts</a>
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each data.recentPosts as post}
				<a href="/blog/{post.slug}" class="group block">
					<div
						class="flex items-center justify-between rounded-lg border-2 border-mocha-surface0 bg-mocha-mantle p-4 transition-colors hover:border-coffee-latte"
					>
						<div>
							<h4
								class="font-medium text-mocha-text transition-colors group-hover:text-coffee-latte"
							>
								{post.title}
							</h4>
							<p class="mt-1 font-mono text-xs text-mocha-subtext0">
								[{post.date}] • {post.readingTime}m READ
							</p>
						</div>
						<ArrowUpRight
							size={16}
							class="text-mocha-overlay0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
						/>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<!-- <style>
	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in-up {
		animation: fade-in-up 0.5s ease-out forwards;
	}
</style> -->
