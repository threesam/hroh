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
	const { title, author, description} = hero
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Hero {hero} />

<div>
	<h2><span>A film by</span>{author}</h2>
	<BlockContent blocks={description} {serializers} />
</div>

	
	<!-- <Gumroad/>
	<Trailers/>
	<SubscribeButton/> -->
