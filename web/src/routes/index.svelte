<script context="module">
	import client from "../sanityClient";
	export async function preload({ params }) {
	  const query = `{
		  "settings": *[_type == 'siteSettings'][0]{"url": image.asset->url, "alt": image.alt},
		  "screenings": *[_type == 'screening'],
		  "laurels": *[_type == 'laurel']{"image": mainImage.asset->url, "alt": mainImage.alt, title}
	  }`
	  const data = await client
		.fetch(query)
		.catch(err => this.error(500, err));
	  return { data };
	}
  </script>

<script>
	import Hero from './_hero.svelte'
	import Laurels from './_laurels.svelte'

	export let data
	const {settings, screenings, laurels} = data
	console.log(laurels)
	const {url: src, alt} = settings

</script>

<svelte:head>
	<title>Hard Road of Hope</title>
</svelte:head>

<Hero {src} {alt}>
	<Laurels {laurels}/>
</Hero>

<div class="container">
	<div id="gumroad-cta" class="gumroad-product-embed subscribe-link" data-gumroad-product-id="HardRoadOfHope">
		<a id="order-link" style="font-size: 1.2rem;" href="https://gumroad.com/l/HardRoadOfHope">Order Now</a>
	</div>
	<div class="vid-wrap">
		<iframe src="https://player.vimeo.com/video/398117986" frameborder="0" allow="autoplay; fullscreen"
			allowfullscreen></iframe>
	</div>
	<div class="subscribe-ctn">
		<a href="http://bit.ly/ActOutNewsletter" target="_blank" rel="noopener noreferrer">
			<h4 style="margin-bottom: 0;" class="subscribe-link">Subscribe to the ActOut! newsletter</h4>
		</a>
	</div>
	<div class="vid-wrap">
		<iframe src="https://player.vimeo.com/video/395858770" frameborder="0" allow="autoplay; fullscreen"
			allowfullscreen></iframe>
	</div>
</div>
