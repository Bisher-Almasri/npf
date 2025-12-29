<script lang="ts">
	import { Calendar, Clock, ChevronLeft, Copy, Check } from 'lucide-svelte';
	import '$lib/mocha.css';
	import { onMount } from 'svelte';

	let { data } = $props();
	let copiedStates: { [key: string]: boolean } = $state({});

	onMount(() => {
		const codeBlocks = document.querySelectorAll('pre code.hljs');
		codeBlocks.forEach((block, index) => {
			const pre = block.parentElement;
			if (pre) {
				const wrapper = document.createElement('div');
				wrapper.className = 'code-block-wrapper relative';
				pre.parentNode?.insertBefore(wrapper, pre);
				wrapper.appendChild(pre);
				const copyBtn = document.createElement('button');
				copyBtn.className =
					'copy-btn absolute top-3 right-3 p-2 rounded-md bg-mocha-surface1 hover:bg-mocha-surface2 text-mocha-text transition-colors opacity-0 group-hover:opacity-100';
				copyBtn.innerHTML = `
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
					</svg>
				`;

				copyBtn.addEventListener('click', async () => {
					const code = block.textContent || '';
					try {
						await navigator.clipboard.writeText(code);
						copyBtn.innerHTML = `
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
							</svg>
						`;
						setTimeout(() => {
							copyBtn.innerHTML = `
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
								</svg>
							`;
						}, 2000);
					} catch (err) {
						console.error('Failed to copy code:', err);
					}
				});

				wrapper.appendChild(copyBtn);
				wrapper.classList.add('group');
			}
		});
	});
</script>

<svelte:head>
	<title>{data.post.title} | Bisher Al Masri</title>
</svelte:head>

<div class="mx-auto max-w-[90%] md:max-w-[80%] py-12">
	<a
		href="/blog"
		class="group mb-8 inline-flex items-center gap-2 text-mocha-subtext0 transition-colors hover:text-coffee-latte"
	>
		<ChevronLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Blog
	</a>

	<article
		class="prose max-w-none prose-invert prose-headings:text-coffee-foam prose-a:text-coffee-latte prose-strong:text-coffee-latte prose-code:text-accent-pink"
	>
		<header class="not-prose mb-10 space-y-4 text-center">
			<div class="flex items-center justify-center gap-4 text-sm text-mocha-subtext0">
				<span class="flex items-center gap-1"><Calendar class="h-4 w-4" /> {data.post.date}</span>
				<span class="flex items-center gap-1"
					><Clock class="h-4 w-4" /> {data.post.readingTime} min read</span
				>
			</div>

			<h1 class="text-5xl leading-tight font-bold text-coffee-foam md:text-6xl">
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

		<div class="p-2">
			{@html data.post.content}
		</div>
	</article>
</div>
