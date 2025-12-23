<script lang="ts">
	import { page } from '$app/stores';
	import { Coffee, Menu, X } from 'lucide-svelte';

	let isOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav
	class="fixed top-0 left-0 z-50 w-full border-b border-mocha-surface0 bg-mocha-base/80 backdrop-blur-md transition-all duration-300"
>
	<div class="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
		<a href="/" class="group flex items-center gap-2">
			<div
				class="rounded-lg bg-mocha-surface0 p-2 transition-colors group-hover:bg-coffee-latte/20"
			>
				<Coffee class="h-6 w-6 text-coffee-latte" />
			</div>
			<span class="text-xl font-bold tracking-wide text-coffee-foam"
				>Dev<span class="text-coffee-latte">Brew</span></span
			>
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="group relative py-1 text-sm font-medium transition-colors hover:text-coffee-latte
          {$page.url.pathname === link.href ? 'text-coffee-latte' : 'text-mocha-subtext0'}"
				>
					{link.label}
					<span
						class="absolute bottom-0 left-0 h-0.5 w-full origin-right scale-x-0 bg-coffee-latte transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100
          {$page.url.pathname === link.href ? 'scale-x-100' : ''}"
					></span>
				</a>
			{/each}
		</div>

		<button
			class="p-2 text-mocha-subtext0 transition-colors hover:text-coffee-latte md:hidden"
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
