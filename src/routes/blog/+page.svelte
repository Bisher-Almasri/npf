<script lang="ts">
	import { Calendar, Clock, Tag, ArrowRight } from 'lucide-svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | Bisher Al Masri</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-12 py-12">
	<div class="space-y-4 text-center">
		<h1 class="text-4xl font-bold text-coffee-foam md:text-5xl">The Coffee Break</h1>
		<p class="text-mocha-subtext0">Thoughts, stories, and coding journals.</p>
	</div>

	<div class="grid gap-8">
		{#each data.posts as post}
			<article
				class="group relative rounded-2xl border border-transparent p-8 transition-all hover:border-coffee-latte"
			>
				<div
					class="mb-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
				>
					<div class="flex flex-wrap gap-2 text-sm text-mocha-subtext0">
						<span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> {post.date}</span>
						<span class="flex items-center gap-1"
							><Clock class="h-4 w-4" /> {post.readingTime} min read</span
						>
					</div>

					<div class="flex gap-2">
						{#each post.tags as tag}
							<span
								class="rounded-full border border-mocha-surface1 bg-mocha-base px-2 py-0.5 font-mono text-xs text-coffee-latte"
								>#{tag}</span
							>
						{/each}
					</div>
				</div>

				<h2
					class="mb-3 text-2xl font-bold text-mocha-text transition-colors group-hover:text-coffee-latte"
				>
					<a href="/blog/{post.slug}" class="before:absolute before:inset-0">
						{post.title}
					</a>
				</h2>

				<p class="mb-6 max-w-2xl leading-relaxed text-mocha-subtext0">
					{post.summary}
				</p>

				<div
					class="flex items-center text-sm font-medium text-coffee-latte transition-transform group-hover:translate-x-1"
				>
					Read Article <ArrowRight class="ml-1 h-4 w-4" />
				</div>
			</article>
		{/each}
	</div>
</div>
