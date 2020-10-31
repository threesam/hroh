<script context="module">
  import client from '../../sanityClient'
  import BlockContent from '@movingbrands/svelte-portable-text'
  import serializers from '../../components/serializers'
  export function preload({ params }) {
    const filter = `*[_type == 'siteSettings'][0]`
    const projection = `{
          ...,
        }`
    const query = filter + projection
    return client
      .fetch(query)
      .then((posts) => {
		console.log(posts)
        return { posts }
      })
      .catch((err) => this.error(500, err))
  }
</script>
<script>
	import Gumroad from "./_Gumroad.svelte"
					
	import Trailers from "./_Trailers.svelte"
					
	import SubscribeButton from "./_SubscribeButton.svelte"
					
	import Laurel from "./_Laurel.svelte"
</script>
<svelte:head>
	<title>Hard Road of Hope</title>
</svelte:head>

<h1 id="title">Hard Road Of Hope</h1>
	
	<!-- <Laurel/>
	<Gumroad/>
	<Trailers/>
	<SubscribeButton/> -->
