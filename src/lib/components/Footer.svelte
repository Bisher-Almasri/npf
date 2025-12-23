<script lang="ts">
	import { Github, Linkedin, Twitter, Mail } from 'lucide-svelte';
</script>

<footer class="mt-20 border-t border-mocha-surface0 bg-mocha-mantle py-12">
	<div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
		<div class="text-center md:text-left">
			<p class="text-lg font-medium text-mocha-text">Designed & Brewed with ☕️</p>
			<p class="mt-1 text-sm text-mocha-subtext0">
				© {new Date().getFullYear()} Your Name. All rights reserved.
			</p>
		</div>

		<div class="flex items-center gap-6">
			<a
				href="https://github.com"
				target="_blank"
				class="text-mocha-subtext0 transition-colors hover:text-coffee-latte"
			>
				<Github class="h-5 w-5" />
			</a>
			<a
				href="https://linkedin.com"
				target="_blank"
				class="text-mocha-subtext0 transition-colors hover:text-coffee-latte"
			>
				<Linkedin class="h-5 w-5" />
			</a>
			<a
				href="https://twitter.com"
				target="_blank"
				class="text-mocha-subtext0 transition-colors hover:text-coffee-latte"
			>
				<Twitter class="h-5 w-5" />
			</a>
			<a
				href="mailto:hello@example.com"
				class="text-mocha-subtext0 transition-colors hover:text-coffee-latte"
			>
				<Mail class="h-5 w-5" />
			</a>
		</div>
	</div>
</footer>
