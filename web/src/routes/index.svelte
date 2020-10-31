<script context="module">
  import client from '../sanityClient'
  import BlockContent from '@movingbrands/svelte-portable-text'
  import serializers from '../components/serializers'  
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
	import Hero from "./_Hero.svelte"
					
	import Gumroad from "./_Gumroad.svelte"	
	import Trailers from "./_Trailers.svelte"	

	export let hero
	const {settings} = hero
	const { title, author, description } = settings
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Hero {hero} />

<div class="container">
	<span>A film by</span>
	<h2>{author}</h2>
	<p>{description}</p>
	<Gumroad/>
	<h3>Trailers</h3>
	<Trailers/>
</div>