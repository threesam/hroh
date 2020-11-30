<script context="module">
  import client from '../sanityClient'
  export function preload() {
    const settings = `*[_type == 'siteSettings'][0]{
		  "image": image.asset->url,
		  "alt": image.alt,
		  title,
		  "author": author->name,
		  ...
		}`
	const laurels = `*[_type == 'laurel']|order(_createdAt desc){
		...,
		title,
		"image": mainImage.asset->url,
		"alt": mainImage.alt,
		href
	}`

	const query = `{
		"settings": ${settings},
		"laurels": ${laurels}
	}`
    return client
      .fetch(query)
      .then((hero) => {
        return { hero }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
	import InternalLink from '../components/InternalLink.svelte'
	import Laurels from "./_Laurels.svelte"
	import Hero from "./_Hero.svelte"			
	import Head from '../components/Head.svelte'

	export let hero
	const {settings, laurels} = hero
	const { title, author, description } = settings
</script>

<style>
	article {
		min-height: calc(100vh - var(--nav-height));
	}
</style>

<Head title="Hard Road of Hope">
	<script defer rel="preload" type="text/javascript" src="https://gumroad.com/js/gumroad.js"></script>
</Head>


<Hero {hero} />

<article class="container">
	<Laurels {laurels} />
	<span>A film by</span>
	<h2>{author}</h2>
	<p>{description}</p>
	<InternalLink href="/trailers">Trailers</InternalLink>
</article>
