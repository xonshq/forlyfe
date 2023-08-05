<script>
	import '../app.css';
	import logo from '$lib/images/logo.png';
	import logoMd from '$lib/images/logo-md.png';
	import SlackIcon from '~icons/logos/SlackIcon';
	import LinkedInIcon from '~icons/skill-icons/Linkedin';
	import InstagramIcon from '~icons/skill-icons/Instagram';
	import FacebookIcon from '~icons/devicon/Facebook';
	import TikTokIcon from '~icons/logos/TiktokIcon';
	import ColoredText from '$lib/components/ColoredText.svelte';
</script>

<nav class="block m-auto max-w-screen-2xl">
	<div class="flex items-center justify-between p-4">
		<a href="/">
			<img src={logo} alt="test" class="w-20 md:hidden" />
			<img src={logoMd} alt="test" class="hidden w-40 md:block" />
		</a>
		<div class="flex items-center space-x-6 text-xl font-bold">
			<a href="/initiatives">Initiatives</a>
			<a href="/about" target="_blank" class="flex items-center">About Us</a>
		</div>
	</div>
</nav>

<div class="h-full max-w-screen-lg min-h-screen p-6 pb-20 m-auto">
	<slot />
</div>

<div class="py-10 border-t-2 border-slate-600 md:py-20">
	<div class="grid grid-cols-1 gap-10 px-6 m-auto max-w-screen-2xl md:grid-cols-4 md:px-0">
		<img src={logoMd} alt="ForLyfe Logo" class="w-40" />
		<div>
			<h3 class="mb-4 text-2xl text-bold">
				<ColoredText text="Learn More" />
			</h3>
			<div class="flex flex-col space-y-1 text-xl">
				<a href="/initiatives">Initiatives</a>
				<a href="/about">About</a>
			</div>
		</div>
		<div>
			<h3 class="mb-4 text-2xl text-bold"><ColoredText text="Get Involved" /></h3>
			<div class="flex flex-col space-y-1 text-xl">
				<a href="#">Team</a>
				<a href="#">Community</a>
			</div>
		</div>
		<div>
			<div class="flex mb-8 space-x-6">
				<LinkedInIcon class="mr-2 text-2xl" />
				<InstagramIcon class="mr-2 text-2xl" />
				<FacebookIcon class="mr-2 text-2xl" />
				<TikTokIcon class="mr-2 text-2xl" />
			</div>
			<span class="italic"> Made with ❤️ by ForLyfe</span>
		</div>
	</div>
</div>
