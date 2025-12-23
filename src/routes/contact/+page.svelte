<script lang="ts">
	import { Mail, MapPin, MessageSquare, Send } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact | DevBrew</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12">
	<div class="grid items-start gap-12 md:grid-cols-2">
		<div class="space-y-8">
			<div class="space-y-4">
				<h1 class="text-4xl font-bold text-coffee-foam">Let's Chat</h1>
				<p class="text-lg text-mocha-subtext0">
					Have a project in mind or just want to discuss the best coffee beans? Send me a message!
				</p>
			</div>

			<div class="space-y-6">
				<div class="flex items-center gap-4 text-mocha-text">
					<div class="rounded-lg bg-mocha-surface0 p-3 text-coffee-latte">
						<Mail class="h-6 w-6" />
					</div>
					<div>
						<p class="text-sm text-mocha-subtext0">Email</p>
						<p class="font-medium">bisherk.almasri@gmail.com</p>
					</div>
				</div>

				<div class="flex items-center gap-4 text-mocha-text">
					<div class="rounded-lg bg-mocha-surface0 p-3 text-coffee-latte">
						<MapPin class="h-6 w-6" />
					</div>
					<div>
						<p class="text-sm text-mocha-subtext0">Location</p>
						<p class="font-medium">Oakville, ON</p>
					</div>
				</div>
			</div>
		</div>

		<form
			class="sticky top-24 space-y-6 rounded-2xl border border-mocha-surface1 bg-mocha-surface0 p-8 shadow-xl"
		>
			<div class="space-y-2">
				<label for="name" class="text-sm font-medium text-mocha-text">Name</label>
				<input
					type="text"
					id="name"
					class="w-full rounded-lg border border-mocha-surface1 bg-mocha-base px-4 py-3 text-mocha-text transition-colors focus:border-coffee-latte focus:ring-1 focus:ring-coffee-latte focus:outline-none"
					placeholder="John Doe"
				/>
			</div>

			<div class="space-y-2">
				<label for="email" class="text-sm font-medium text-mocha-text">Email</label>
				<input
					type="email"
					id="email"
					class="w-full rounded-lg border border-mocha-surface1 bg-mocha-base px-4 py-3 text-mocha-text transition-colors focus:border-coffee-latte focus:ring-1 focus:ring-coffee-latte focus:outline-none"
					placeholder="john@example.com"
				/>
			</div>

			<div class="space-y-2">
				<label for="message" class="text-sm font-medium text-mocha-text">Message</label>
				<textarea
					id="message"
					rows="4"
					class="w-full rounded-lg border border-mocha-surface1 bg-mocha-base px-4 py-3 text-mocha-text transition-colors focus:border-coffee-latte focus:ring-1 focus:ring-coffee-latte focus:outline-none"
					placeholder="Tell me about your project..."
				></textarea>
			</div>

			<button
				type="submit"
				class="flex w-full items-center justify-center gap-2 rounded-lg bg-coffee-latte py-3 text-lg font-bold text-mocha-base transition-colors hover:bg-coffee-foam"
			>
				Send Message <Send class="h-5 w-5" />
			</button>
		</form>
	</div>
</div>
