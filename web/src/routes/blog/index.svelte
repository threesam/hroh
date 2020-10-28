<script context="module">
  import client from '../../sanityClient'
  import BlockContent from '@movingbrands/svelte-portable-text'
  import serializers from '../../components/serializers'
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
    console.log(posts[0].body)
</script>

<h1>Recent Posts</h1>

{#each posts as {title, author, image, alt, body}}
    <h2>{title}</h2>
    <h3>{author}</h3>
    <BlockContent blocks={body} {serializers} />
{/each}