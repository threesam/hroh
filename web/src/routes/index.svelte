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
	const laurels = `*[_type == 'laurel']{
		title,
		"image": mainImage.asset->url,
		"alt": mainImage.alt
	}`

	const query = `{
		"settings": ${settings},
		"laurels": ${laurels}
	}`
    return client
      .fetch(query)
      .then((hero) => {
		console.log(hero)
        return { hero }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
	import Laurels from "./_Laurels.svelte"
	import Hero from "./_Hero.svelte"			

	export let hero
	const {settings, laurels} = hero
	const { title, author, description } = settings
</script>

<style>
	article {
		min-height: calc(100vh - var(--nav-height));
	}
	a {
		margin: 3rem 0;
		padding: 2rem;
		border: 0.125rem dashed var(--emphasized-text);
		border-radius: 13px;
		color: var(--emphasized-text);
		filter: grayscale(100%);
	}
	a:hover {
		filter: grayscale(0%);
		transition: all 0.3s ease-in-out;
	}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Hero {hero} />

<article class="container">
	<Laurels {laurels} />
	<span>A film by</span>
	<h2>{author}</h2>
	<p>{description}</p>
	<a href="/trailers">View Trailers</a>
</article>