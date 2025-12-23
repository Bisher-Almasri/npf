<script lang="ts">
	import { Calendar, Clock, ChevronLeft } from 'lucide-svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} | DevBrew</title>
</svelte:head>

<div class="mx-auto max-w-3xl py-12">
	<a
		href="/blog"
		class="group mb-8 inline-flex items-center gap-2 text-mocha-subtext0 transition-colors hover:text-coffee-latte"
	>
		<ChevronLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Blog
	</a>

	<article
		class="prose prose-lg max-w-none prose-invert prose-headings:text-coffee-foam prose-a:text-coffee-latte prose-strong:text-coffee-latte prose-code:text-accent-pink"
	>
		<header class="not-prose mb-10 space-y-4 text-center">
			<div class="flex items-center justify-center gap-4 text-sm text-mocha-subtext0">
				<span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> {data.post.date}</span>
				<span class="flex items-center gap-1"
					><Clock class="h-4 w-4" /> {data.post.readingTime} min read</span
				>
			</div>

			<h1 class="text-4xl leading-tight font-bold text-coffee-foam md:text-5xl">
				{data.post.title}
			</h1>

			<div class="flex items-center justify-center gap-2">
				{#each data.post.tags as tag}
					<span
						class="rounded-full border border-mocha-surface1 bg-mocha-surface0 px-3 py-1 font-mono text-sm text-coffee-latte"
					>
						#{tag}
					</span>
				{/each}
			</div>
		</header>

		<div class="rounded-2xl border border-mocha-surface1/50 bg-mocha-surface0/30 p-8">
			{@html data.post.content}
		</div>
	</article>
</div>
