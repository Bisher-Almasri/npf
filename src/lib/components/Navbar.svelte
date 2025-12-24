<script lang="ts">
	import { page } from '$app/stores';
	import { Coffee, Menu, X } from 'lucide-svelte';

	let isOpen = $state(false);

	const links = [
		{ href: '/', label: '~/' },
		{ href: '/about', label: '~/about' },
		{ href: '/projects', label: '~/projects' },
		{ href: '/blog', label: '~/blog' },
		{ href: '/contact', label: '~/contact' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav
	class="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-md transition-all duration-300"
>
	<div class="mx-auto flex h-20 max-w-6xl items-center justify-between">
		<a href="/" class="group flex items-center gap-2">
			<span class="font-mono text-xl font-bold tracking-wide text-coffee-foam"
				>~<span class="text-coffee-latte"
					>{$page.url.pathname === '/' ? '/' : $page.url.pathname}</span
				></span
			>
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="group relative rounded-sm py-1 text-sm font-bold tracking-wider uppercase transition-colors hover:text-coffee-latte
          {$page.url.pathname === link.href ? 'text-coffee-latte' : 'text-mocha-subtext0'}"
				>
					<span class="mr-1 opacity-0 transition-opacity group-hover:opacity-100">&gt;</span>
					{link.label}
					<!-- <span
						class="absolute -bottom-1 left-0 h-1 w-full rounded-sm bg-coffee-latte transition-transform duration-0
          {$page.url.pathname === link.href ? 'scale-x-100' : 'scale-x-0'}"
					></span> -->
				</a>
			{/each}
		</div>

		<button
			class="rounded-md p-2 text-mocha-subtext0 transition-colors hover:bg-mocha-surface0 hover:text-coffee-latte md:hidden"
			onclick={toggleMenu}
			aria-label="Toggle Menu"
		>
			{#if isOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</div>

	{#if isOpen}
		<div
			class="animate-fade-in-down absolute top-20 left-0 w-full border-b border-mocha-surface0 bg-mocha-base shadow-2xl md:hidden"
		>
			<div class="flex flex-col gap-4 p-6">
				{#each links as link}
					<a
						href={link.href}
						class="text-lg font-medium {$page.url.pathname === link.href
							? 'text-coffee-latte'
							: 'text-mocha-subtext0'}"
						onclick={() => (isOpen = false)}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	@keyframes fade-in-down {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in-down {
		animation: fade-in-down 0.2s ease-out forwards;
	}
</style>
