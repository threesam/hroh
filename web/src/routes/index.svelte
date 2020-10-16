<script context="module">
	import client from "../sanityClient";
	export async function preload({ params }) {
	  const query = `{
		  "settings": *[_type == 'siteSettings'][0]{"url": image.asset->url, "alt": image.alt},
		  "screenings": *[_type == 'screening']
	  }`
	  const data = await client
		.fetch(query)
		.catch(err => this.error(500, err));
	  return { data };
	}
  </script>

<script>
	import Hero from './_hero.svelte'

	export let data
	const {settings, screenings} = data
	const {url: src, alt} = settings

</script>

<svelte:head>
	<title>Hard Road of Hope</title>
</svelte:head>

<Hero {src} {alt} />
<h2>Film link</h2>
<h3>Trailers</h3>
