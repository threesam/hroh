<script context="module">
  import client from '../sanityClient'
  export function preload() {
    const filter = `*[_type == 'siteSettings'][0]`
    const projection = `{
		  "image": image.asset->url,
		  "alt": image.alt,
		  title,
		  "author": author->name,
		  description
        }`
    const query = filter + projection
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
	import Gumroad from "./_Gumroad.svelte"	
	import Trailers from "./_Trailers.svelte"		
	import SubscribeButton from "./_SubscribeButton.svelte"		
	import Laurel from "./_Laurel.svelte"

	export let hero
	const { image, alt, title, author, description} = hero
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<style>
	div {
		position: relative;
		height: 100vh;
		width: 100vw;
		display: grid;
		place-content: center;
		text-align: center;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		z-index: -10;
	}
</style>

<div>
	<h1 id="{title}">{title}</h1>
	<h3>{author}</h3>
	<!-- <p>{description}</p> -->
	<img src={image} {alt}>
</div>
	
	<!-- <Laurel/>
	<Gumroad/>
	<Trailers/>
	<SubscribeButton/> -->
