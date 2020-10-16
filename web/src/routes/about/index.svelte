<script context="module">
	import client from '../../sanityClient'
	export function preload({ params }) {
		const query = `{
			"author": *[_type == 'author'][0],
			"synopsis": *[_type == 'post' && title == 'Synopsis'][0],
		}`
		return client
		.fetch(query)
		.then((data) => {
			return { data }
		})
		.catch((err) => this.error(500, err))
	}
</script>

<script>
	import myConfiguredSanityClient from '../../sanityClient'
	import imageUrlBuilder from '@sanity/image-url'

	export let data
	console.log(data)

	const builder = imageUrlBuilder(myConfiguredSanityClient)

	function urlFor(source) {
	return builder.image(source)
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>Synopsis</h1>
<h2>About Director</h2>