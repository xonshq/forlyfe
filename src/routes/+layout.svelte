<script>
	import '../app.css';
	import logo from '$lib/images/logo.png';
	import logoMd from '$lib/images/logo-md.png';
	import SlackIcon from '~icons/devicon/Slack';
</script>

<nav class="block m-auto max-w-screen-2xl">
	<div class="flex items-center justify-between p-4">
		<a href="/">
			<img src={logo} alt="test" class="w-20 md:hidden" />
			<img src={logoMd} alt="test" class="hidden w-40 md:block" />
		</a>
		<div class="flex items-center space-x-6">
			<a href="/events">Events</a>

			<a href="https://slack.com" target="_blank" class="flex items-center"
				><SlackIcon class="mr-2 text-md" /><span>Community</span>
			</a>
		</div>
	</div>
</nav>

<div class="h-full max-w-screen-lg p-6 pb-20 m-auto">
	<slot />
</div>
