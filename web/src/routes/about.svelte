<script context="module">
	import client from '../sanityClient'
	export function preload({ params }) {
		const filter = `*[_type == 'siteSettings'][0]`
		const projection = `{
			...,
			"author": author->name,
			"image": image.asset->url,
			"alt": image.alt,
			"keywords": keywords[],
		}`
		const query = filter + projection
		return client
		.fetch(query)
		.then((siteSettings) => {
			return { siteSettings }
		})
		.catch((err) => this.error(500, err))
	}
</script>

<script>
	import Image from '../components/Image.svelte'
	import myConfiguredSanityClient from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

	export let siteSettings
	const {title, image, alt, keywords, author, description} = siteSettings
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>{title}</h1>
<h3>{author}</h3>
<p>{description}</p>

<Image url={urlFor(image).width(500).url()} {alt} />

<ul>
	{#each keywords as keyword}
		<li>{keyword}</li>	
	{/each}
</ul>



	  
	  