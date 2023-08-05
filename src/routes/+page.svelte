<script>
	import Typewriter from 'svelte-typewriter';
	import ColoredText from '$lib/components/ColoredText.svelte';
	import BtnLink from '$lib/components/BtnLink.svelte';
	import google from '$lib/images/google.png';
	import amex from '$lib/images/amex.png';
	import heylizzieann from '$lib/images/heylizzieann.jpeg';
	import avantstay from '$lib/images/avantstay.png';
	import radius from '$lib/images/radius.png';
	import embark from '$lib/images/embark.jpeg';
</script>

<div class="h-screen pt-20 mb-32 space-y-16 text-center md:pt-48">
	<h1 class="text-5xl md:mb-20 md:text-7xl">
		<ColoredText text="Explore Careers Through" />
		<br />
		<span class="inline-block h-32 md:h-20">
			<Typewriter mode="loop">
				<ColoredText text="Business Workshops" />
				<ColoredText text="Tech Workshops" />
				<ColoredText text="Resume Reviews" />
				<ColoredText text="Industry Speakers" />
			</Typewriter>
		</span>
	</h1>
	<BtnLink href="#" title="Join Our Community" />
	<p class="text-2xl">
		ForLyfe provides students with the opportunity to hear the unique stories of professionals in
		the tech and venture capital space.
	</p>
</div>

<div class="space-y-16 text-center">
	<div>
		<h1 class="mb-4 text-5xl md:text-7xl">
			<ColoredText text="Our Journey" />
		</h1>
		<p class="text-2xl">Founded by folks with experiences at</p>
	</div>

	<div class="mb-20">
		<div
			class="m-auto grid max-w-3xl grid-cols-2 place-items-center gap-12 md:grid-cols-4 [&>*]:w-44"
		>
			<img src={google} alt="Google" />
			<img src={amex} alt="American Express" />
			<img src={heylizzieann} alt="Hey Lizzie Ann" />
			<img src={avantstay} alt="Avantstay" />
		</div>
	</div>

	<BtnLink href="#" title="Join Our Team" />
</div>

<div class="space-y-16 text-center">
	<div>
		<h1 class="mb-4 text-5xl md:text-7xl">
			<ColoredText text="Our Sponsors" />
		</h1>
		<p class="text-2xl">Funded by folks from</p>
	</div>

	<div class="mb-20">
		<div
			class="m-auto grid max-w-xl grid-cols-2 place-items-center gap-12 md:grid-cols-4 [&>*]:w-44"
		>
			<div class="order-3 md:order-1" />
			<img src={radius} alt="Radius SFU" class="order-1 md:order-2" />
			<img src={embark} alt="Embark Sustainability Society" class="order-2 md:order-3" />
			<div class="order-4" />
		</div>
	</div>
</div>
