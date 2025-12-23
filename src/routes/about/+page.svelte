<script lang="ts">
	import { Briefcase, Calendar, GraduationCap } from 'lucide-svelte';

	const experience = [
		{
			role: 'Lorem ipsum dolor sit amet',
			company: 'Lorem ipsum dolor sit amet',
			period: 'Lorem ipsum dolor sit amet',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec metus feugiat placerat. Nullam nec metus nec metus feugiat placerat.'
		},
		{
			role: 'Lorem ipsum dolor sit amet',
			company: 'Lorem ipsum dolor sit amet',
			period: 'Lorem ipsum dolor sit amet',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec metus feugiat placerat. Nullam nec metus nec metus feugiat placerat.'
		},
		{
			role: 'Lorem ipsum dolor sit amet',
			company: 'Lorem ipsum dolor sit amet',
			period: 'Lorem ipsum dolor sit amet',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec metus feugiat placerat. Nullam nec metus nec metus feugiat placerat.'
		}
	];
</script>

<svelte:head>
	<title>About | DevBrew</title>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-20 py-12">
	<section class="animate-fade-in space-y-8">
		<h1 class="text-4xl font-bold text-coffee-foam md:text-5xl">About Me</h1>
		<div class="prose prose-lg text-mocha-subtext0 prose-invert">
			<p>
				Hi there! I'm a passionate developer with a love for clean code and good coffee. I started
				my journey back in 2018 when I wrote my first line of HTML, and I've been hooked ever since.
			</p>
			<p>
				My philosophy is simple: <span class="font-medium text-coffee-latte"
					>functionality meets aesthetics</span
				>. I believe that a website shouldn't just work well—it should feel good to use. When I'm
				not coding, you can find me exploring local coffee shops, reading sci-fi novels, or gaming.
			</p>
		</div>
	</section>

	<section class="space-y-8">
		<h2 class="flex items-center gap-3 text-3xl font-bold text-coffee-foam">
			<Briefcase class="text-coffee-latte" /> Experience
		</h2>

		<div class="relative ml-3 space-y-12 border-l border-mocha-surface1">
			{#each experience as job}
				<div class="relative ml-8">
					<span
						class="absolute top-1 -left-[41px] h-5 w-5 rounded-full border-2 border-coffee-latte bg-mocha-base"
					></span>

					<div class="space-y-2">
						<span
							class="mb-2 block w-fit rounded bg-coffee-latte/10 px-2 py-1 font-mono text-sm text-coffee-latte"
						>
							{job.period}
						</span>
						<h3 class="text-xl font-bold text-mocha-text">{job.role}</h3>
						<p class="text-mocha-subtext1">{job.company}</p>
						<p class="max-w-xl leading-relaxed text-mocha-subtext0">
							{job.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.animate-fade-in {
		animation: fade-in 0.5s ease-out forwards;
	}
</style>
