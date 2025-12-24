<script lang="ts">
	let { title = undefined, children, class: className = '', href = '' } = $props();
</script>

{#if href}
	<a {href} class="group block h-full">
		<div
			class="flex h-full flex-col rounded-xl border-2 border-mocha-surface1 bg-mocha-surface0 p-6 transition-all duration-300 hover:border-coffee-latte hover:bg-mocha-surface1 {className}"
		>
			{#if title}
				<div class="mb-4 flex items-center justify-between">
					<h3 class="flex items-center gap-2 font-bold text-gray-200">
						{title}
					</h3>
					<span class="text-xs text-mocha-subtext0 transition-transform group-hover:translate-x-1"
						>&gt;_</span
					>
				</div>
			{/if}
			{@render children()}
		</div>
	</a>
{:else}
	<div
		class="flex h-full flex-col rounded-xl border-2 border-mocha-surface1 bg-mocha-surface0 p-6 transition-all duration-300 hover:border-mocha-overlay0 {className}"
	>
		{#if title}
			<h3 class="mb-4 flex items-center gap-2 font-bold text-gray-200">
				{title}
			</h3>
		{/if}
		{@render children()}
	</div>
{/if}
