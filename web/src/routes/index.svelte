<script context="module">
  import client from '../sanityClient'
  import BlockContent from '@movingbrands/svelte-portable-text'
  import serializers from '../components/serializers'  
  export function preload() {
    const filter = `*[_type == 'siteSettings'][0]`
    const projection = `{
		  "image": image.asset->url,
		  "alt": image.alt,
		  title,
		  "author": author->name,
		  ...
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
	import Hero from "./_Hero.svelte"
					
	import {fade} from 'svelte/transition'
	import Gumroad from "./_Gumroad.svelte"	
	import Trailers from "./_Trailers.svelte"		
	import SubscribeButton from "./_SubscribeButton.svelte"		
	import Laurel from "./_Laurel.svelte"

	export let hero
	const { title, author } = hero
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Hero {hero} />

<div class="container">
	<span>A film by</span>
	<h2>{author}</h2>
	<p>Ex nostrud ipsum dolor aliquip consequat ullamco dolor exercitation ad. Consectetur veniam veniam reprehenderit sit eiusmod aliqua veniam exercitation consectetur Lorem nisi elit pariatur deserunt. Minim cillum qui ea duis irure anim sunt sint do pariatur nostrud consectetur laborum.</p>
	<Gumroad/>
	<h3>Trailers</h3>
	<Trailers/>
</div>

	
	<SubscribeButton/>
