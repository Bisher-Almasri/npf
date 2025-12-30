<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - Error</title>
</svelte:head>

<div class="error-container">
	<div class="error-content">
		<h1 class="error-code">{$page.status}</h1>
		
		{#if $page.status === 404}
			<h2>Page Not Found</h2>
			<p>Sorry, the page you're looking for doesn't exist.</p>
		{:else}
			<h2>Something went wrong</h2>
			<p>{$page.error?.message || 'An unexpected error occurred.'}</p>
		{/if}
		
		<a href="/" class="home-link">← Back to Home</a>
	</div>
</div>

<style>
	.error-container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 80vh;
		padding: 2rem;
	}

	.error-content {
		text-align: center;
		max-width: 500px;
	}

	.error-code {
		font-size: 6rem;
		font-weight: bold;
		margin: 0;
		color: #ff6b6b;
		line-height: 1;
	}

	h2 {
		font-size: 2rem;
		margin: 1rem 0;
		color: #333;
	}

	p {
		font-size: 1.1rem;
		color: #666;
		margin-bottom: 2rem;
		line-height: 1.5;
	}

	.home-link {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background-color: #007acc;
		color: white;
		text-decoration: none;
		border-radius: 0.5rem;
		font-weight: 500;
		transition: background-color 0.2s ease;
	}

	.home-link:hover {
		background-color: #005a9e;
	}

	@media (max-width: 768px) {
		.error-code {
			font-size: 4rem;
		}
		
		h2 {
			font-size: 1.5rem;
		}
		
		.error-container {
			padding: 1rem;
		}
	}
</style>