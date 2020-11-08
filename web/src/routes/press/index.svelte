<script context="module">
    import client from '../../sanityClient'
    export function preload({ params }) {
      const pressFilter = `*[_type == 'press']|order(_createdAt desc){
            href,
            title
          }`

      const praiseFilter = `*[_type == 'praise']|order(_createdAt asc){
          href,
          publication,
          reviewer,
          "body": review[]{
              ...,
              children[]{
                  ...
              }
          }
      }`

      const query = `{
          "press": ${pressFilter},
          "praise": ${praiseFilter}
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
	import PraiseCard from "./_PraiseCard.svelte"
					
	import PressLink from "./_PressLink.svelte"
					
    export let data
    const {press, praise} = data
</script>

<main class="container press-container">
    <div class="praise">
        <h2>Praise</h2>
        {#each praise as review}
            <PraiseCard {review} />
        {/each}
    </div>
    <div class="press">
        <h2>Press</h2>
        <ul>
            {#each press as p}
            <PressLink {...p}/>
            {/each}
        </ul>
    </div>
</main>