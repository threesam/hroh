<script context="module">
	import client from "../sanityClient";
	export async function preload({ params }) {
	  const filter = '*[_type == "siteSettings"][0]';
	  const projection = `{
		...,
		"image": image.asset->url,
		"alt": image.alt
	  }`;
  
	  const query = filter + projection;
	  const siteSettings = await client
		.fetch(query)
		.catch(err => this.error(500, err));
	  return { siteSettings };
	}
  </script>
  
  <script>
	export let siteSettings;
	console.log('siteSettings', siteSettings)
	const {image: url, alt} = siteSettings
console.log(url)
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
	}
	img {
		width: 100vw;
		max-height: 100vh;
		object-fit: cover;
		position: absolute;
		z-index: -10;
	}
</style>

<Nav {segment}/>

<main>
	<img src={url} alt="{alt}">
	<slot></slot>
</main>
<Footer />