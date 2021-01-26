<script context="module">
    import client from '../../sanityClient'
    export async function preload({ params }) {
        const {slug} = params
        const filter = /* groq */`*[_type == "post" && slug.current == $slug][0]`
        const projection = /* groq */`{
            ...,
            body[]{
                ...,
                children[]{
                ...
                }
            },
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
    import Head from '../../components/Head.svelte'
    import {blur} from 'svelte/transition'
    import BlockContent from '@movingbrands/svelte-portable-text'
    export let post
    const {title, author, image, alt, publishedAt, slug, body} = post
    const excerpt = post.excerpt[0].children[0].text

    // const url = `${site}/${slug}`

    // image url function
    import myConfiguredSanityClient from '../../sanityClient'
    import imageUrlBuilder from '@sanity/image-url'
    import serializers from '../../components/serializers'
    import InternalLink from '../../components/InternalLink.svelte'

    // const builder = imageUrlBuilder(myConfiguredSanityClient)

    // function urlFor(source) {
    //     return builder.image(source)
    // }
</script>

<Head {title} image={`${image}?w=640&h=442`} {alt} {excerpt} slug={`blog/${slug}`} />

<style>
    div {
        margin-bottom: 1rem;
    }
	.hero {
		position: relative;
		height: calc(100vh - var(--nav-height));
		width: 100%;
		display: grid;
		place-content: center;
		text-align: center;
		background-color: rgba(0,0,0,0.5);
    }
    @media (min-width: 800px) {
        h1 {
            font-size: 2rem;
        }
    }

	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		z-index: -10;
    }

    .post-info {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
        opacity: 0.69;
    }
    span {
        font-size: 0.8rem;
    }
</style>

<section class="hero">
    <h1 in:blur>{title}</h1>
	<img src={image} {alt}>
</section>
<section class="post-info">
    <p>by {author}</p>
    <span>{publishedAt.slice(0, 10)}</span>
</section>
<div class="container block-content">
    <BlockContent blocks={body} {serializers} />
    <InternalLink href="/blog">All Posts</InternalLink>
</div>


  