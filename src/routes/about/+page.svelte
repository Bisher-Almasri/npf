<script lang="ts">
	import { Briefcase, Calendar, GraduationCap } from 'lucide-svelte';

	const experience = [
		{
			role: 'Winner, Haven Toronto Game Jam',
			company: 'Hack Club',
			period: 'Nov 2026',
			location: 'Toronto, Ontario, Canada',
			description:
				'Won Haven Toronto, a two day game jam for teens, with HedgeHog Bounce: a 2.5D Godot game about a lost hedgehog bouncing, rolling and slamming its way home. Built the hand-drawn 2D art on a real 3D world with Jolt physics, multiple levels with medals and top-5 leaderboards, and all audio generated in code.',
			skills: ['Godot', 'GDScript', 'Game Design', 'Teamwork', '3D']
		},
		{
			role: 'Freelance Developer',
			company: 'Freelance',
			period: 'Feb 2024 - Present',
			location: 'Ontario, Canada',
			description:
				'Designing and developing custom websites for early stage startups and individual clients, including Remotely. Contributing to the development of specific pages and features for startup websites, including CasPrep. Working one on one with clients to gather requirements, design user friendly interfaces, and implement responsive layouts. Building and deploying modern web applications with a focus on performance, usability, and maintainability. Earned over $750 through freelance web development projects.',
			skills: [
				'Svelte',
				'React.js',
				'Express.js',
				'Amazon Web Services (AWS)',
				'Mobile Application Development',
				'Client Communication',
				'Responsive Web Design',
				'Ruby on Rails'
			]
		},
		{
			role: 'FIRST Tech Challenge Robotics (Team 27158)',
			company: 'Alfajrulbassem Academy',
			period: 'Apr 2025 - Present',
			location: 'Oakville, Ontario, Canada',
			description:
				'Serving as a programmer contributing to robot software development for FIRST Tech Challenge competitions. Designing and implementing autonomous routines using math based logic for auto shooting and motion control. Contributing to TeleOp control systems and tune code for competition performance. Designing and maintaining the team website to showcase engineering work and competition progress. Achieved third place finishes in competition two qualifiers in a row and earned the Design Award and Reach Award.',
			skills: [
				'Team Leadership',
				'Mathematics',
				'FIRST Robotics',
				'Svelte',
				'Java',
				'Web Design',
				'Robotics'
			]
		},
		{
			role: 'White Oaks Vex Robotics Club (Team 8433V)',
			company: 'White Oaks Secondary School',
			period: 'Oct 2025 - Present',
			location: 'Oakville, Ontario, Canada',
			description:
				'Developing and maintaining drivetrain control code for a VEX competition robot. Contributing to autonomous routines, including motion logic and sensor based behavior. Assisting with testing, debugging, and tuning robot code under competition constraints. Documenting technical design decisions and programming logic in the engineering notebook.',
			skills: ['Team Coordination', 'C++', 'Team Building', 'Python', 'Robotics']
		},
	];
</script>

<svelte:head>
	<title>About | Bisher Al Masri</title>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-20 py-12">
	<section class="animate-fade-in space-y-8">
		<h1 class="text-4xl font-bold text-coffee-foam md:text-5xl">About Me</h1>
		<div class="prose prose-lg text-mocha-subtext0 prose-invert">
			<p>
				Hi there! I'm a Bisher Al Masri, a passionate developer who loves to create and solve problems. I started
				my journey back in 2020 when i was 9 years old when I wrote my first line of HTML, and I've been hooked ever since.
			</p>
			<p>
				My philosophy is simple: <span class="font-medium text-coffee-latte"
					>I understand how it works, and I make it functional</span
				>. I believe that software shouldn't just look good, it should be architecturally sound,
				performant, and reliable.
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
						<p class="text-sm text-mocha-subtext1/80">{job.location}</p>
						<p class="max-w-xl leading-relaxed text-mocha-subtext0">
							{job.description}
						</p>
						{#if job.skills && job.skills.length > 0}
							<div class="flex flex-wrap gap-2 pt-2">
								{#each job.skills as skill}
									<span
										class="rounded-full bg-mocha-surface0 px-3 py-1 text-xs font-medium text-coffee-foam"
									>
										{skill}
									</span>
								{/each}
							</div>
						{/if}
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
