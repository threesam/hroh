<script context="module">
  import client from '../../sanityClient'

  export function preload({ params }) {
    const filter = `*[_type == 'post']`
    const projection = `{
          ...,
          "body": body[].children[],
          "slug": slug.current, 
          publishedAt, 
          title,
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
  export let posts
  console.log(posts)

  // image url function
  import myConfiguredSanityClient from '../../sanityClient'
  import imageUrlBuilder from '@sanity/image-url'

  const builder = imageUrlBuilder(myConfiguredSanityClient)

  function urlFor(source) {
    return builder.image(source)
  }
</script>

<style>
  div {
    background: none;
  }
  h2 {
    margin-top: 1rem;
  }
  a {
    position: relative;
    text-align: left;
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
  
  {#each posts as {title, author, image, alt, slug}}
  <a href={`blog/${slug}`}>
    <h3>{title}</h3>
    <span>{author}</span>
    <img src={urlFor(image).url()} alt="{alt}">
  </a>
  {/each}
</div>