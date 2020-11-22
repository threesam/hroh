<script context="module">
  import client from '../../sanityClient'

  export function preload({ params }) {
    // return posts without synopsis
    const filter = `*[_type == 'post' && title != 'Synopsis']`
    const projection = `{
          ...,
          "body": body[].children[],
          "slug": slug.current, 
          publishedAt, 
          title,
          excerpt,
          "author": authors[0].author->name,
          "image": mainImage.asset->url,
          "alt": mainImage.alt,
        }`

    const query = filter + projection

    return client
      .fetch(query)
      .then((posts) => {
        return { posts }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  import Head from '../../components/Head.svelte'
  export let posts

  // image url function
  import myConfiguredSanityClient from '../../sanityClient'
  import imageUrlBuilder from '@sanity/image-url'

  const builder = imageUrlBuilder(myConfiguredSanityClient)

  function urlFor(source) {
    return builder.image(source)
  }
</script>

<Head slug="blog" />

<style>
  h2 {
    margin-top: 1rem;
  }
  a {
    display: grid;
    place-content: center;
    position: relative;
    width: 100%;
    height: 400px;
    padding: 2rem;
    border-radius: 13px;
    border: 0.125rem solid var(--emphasized-text);
    overflow: hidden;
    filter: grayscale(100%);
    margin-bottom: 2rem;
  }
  a:hover {
    filter: grayscale(20%);
    transition: all 0.3s ease-in-out;
  }
  h3 {
    font-size: 1.5rem;
    text-shadow: 0 0 3px black;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    object-fit: cover;
  }
</style>

<div class="container">

  <h2>Recent Posts</h2>
  {#if !posts.length}
    <p>...coming soon</p>
  {:else}
    {#each posts as {title, image, alt, slug}}
    <a href={`blog/${slug}`}>
      <h3>{title}</h3>
      <img src={urlFor(image).url()} alt="{alt}">
    </a>
    {/each}
  {/if}
</div>