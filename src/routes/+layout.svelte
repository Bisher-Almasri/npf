<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col bg-mocha-mantle font-mono text-mocha-text">
	<Navbar />

	<main class="mx-auto w-full max-w-7xl grow px-4 pt-24 md:px-6">
		{@render children()}
	</main>

	<Footer />
</div>
