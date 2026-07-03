<script lang="ts">
	let { children } = $props();
</script>

<div class="blog-font">
	{@render children()}
</div>

<style>
	@font-face {
		font-family: 'BlogHandwriting';
		src: url('/blog.otf') format('opentype');
		font-display: swap;
	}

	.blog-font {
		font-family: 'BlogHandwriting', Georgia, serif;
	}
</style>