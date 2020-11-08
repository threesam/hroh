<script context="module">
    import client from '../../sanityClient'

    export async function preload({ params }) {
        const {slug} = params
        const filter = '*[_type == "post" && slug.current == $slug][0]'
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

        const post = await client
            .fetch(query, { slug })
            .catch((err) => this.error(500, err))
        return { post }
    }
</script>
  
<script>
    export let post
    const {title, author, image, alt, publishedAt, body} = post
    console.log(post)

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
        position: relative;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50vh;
        object-fit: cover;
        z-index: -10;
    }
</style>

<div class="container">
    <h2>{title}</h2>
    <p>by {author}</p>
    <span>{publishedAt}</span>
    <img src={image} {alt} />
</div>

  