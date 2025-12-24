<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>
  
<footer class="mx-auto mb-8 max-w-4xl px-5">
	<div class="rounded-2xl bg-mocha-crust px-6 py-4">
		<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
			<div class="text-center md:text-left">
				<p class="font-mono text-sm text-mocha-subtext0">
					© {new Date().getFullYear()} Bisher Al Masri.
				</p>
			</div>

			<div class="flex items-center gap-6">
				<a
					href="https://github.com/bisher-almasri"
					target="_blank"
					class="rounded-md border-2 border-transparent bg-mocha-surface0 p-2 text-mocha-subtext0 transition-all hover:border-coffee-latte hover:bg-mocha-surface1 hover:text-coffee-latte"
				>
					<Github class="h-5 w-5" />
				</a>
				<a
					href="https://www.linkedin.com/in/bisher-al-masri-6b3838299/"
					target="_blank"
					class="rounded-md border-2 border-transparent bg-mocha-surface0 p-2 text-mocha-subtext0 transition-all hover:border-coffee-latte hover:bg-mocha-surface1 hover:text-coffee-latte"
				>
					<Linkedin class="h-5 w-5" />
				</a>
				<a
					href="mailto:bisherk.almasri@gmail.com"
					class="rounded-md border-2 border-transparent bg-mocha-surface0 p-2 text-mocha-subtext0 transition-all hover:border-coffee-latte hover:bg-mocha-surface1 hover:text-coffee-latte"
				>
					<Mail class="h-5 w-5" />
				</a>
			</div>
		</div>
	</div>
</footer>
