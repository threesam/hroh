<script context="module">
  import client from '../sanityClient'

  export function preload({ params }) {
    const filter = `*[_type == 'resources'][0]`
    const projection = `{
                        ...,
                }`

    const query = filter + projection

    return client
      .fetch(query)
      .then((resources) => {
        return { resources }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  import Head from '../components/Head.svelte'
  export let resources
  const { list } = resources
</script>

<style>
  h2 {
    font-size: 2rem;
    margin-top: 1rem;
  }
</style>

<Head slug="resources" title="Resources" />

<article id="resources" class="about-article container">
  <h2>Resources</h2>
  <ul>
    {#each list as { url, title }}
      <li>
        <a href={url}>{title}</a>
      </li>
    {/each}
  </ul>
</article>
