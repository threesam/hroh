<script context="module">
  import client from '../sanityClient'
  export function preload() {
    const settings = `*[_type == 'siteSettings'][0]{
		  "image": image.asset->url,
		  "alt": image.alt,
		  title,
		  "author": author->name,
		  ...
		}`
	const laurels = `*[_type == 'laurel']|order(_createdAt desc){
		...,
		title,
		"image": mainImage.asset->url,
		"alt": mainImage.alt,
		href
	}`
	
	const screenings = `*[_type == 'screening']{
		...,
		title,
		"laurel": laurel->href,
		"image": image.asset->url,
		"caption": image.caption,
		"alt": image.alt
	}`

	const query = `{
		"settings": ${settings},
		"laurels": ${laurels},
		"screenings": ${screenings}
	}`
    return client
      .fetch(query)
      .then((hero) => {
        return { hero }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
	import InternalLink from '../components/InternalLink.svelte'
	import Laurels from "./_Laurels.svelte"
	import Hero from "./_Hero.svelte"			
	import Head from '../components/Head.svelte'

	export let hero
	const {settings, laurels, screenings} = hero
	console.log(screenings)
	const { title, author, description } = settings

	let y
</script>

<style>
	article {
		min-height: calc(100vh - var(--nav-height));
	}

	li {
		/* border: 0.125rem solid #333; */
		border-top: 0.125rem solid #222;
		position: relative;
		text-align: left;
		width: 100%;
		padding: 2rem;
	}
	img {
		width: 100%;
		object-fit: contain;
	}
	h3 {
		font-size: 1.4rem;
		color: var(--main-font-col);
	}
	
	p, a {
		font-family: "Trebuchet MS",
    Helvetica,
    sans-serif;
	}
	span {
		font-family: 'norwester';
		display: block;
		margin-bottom: 1rem;
	}
	
	.screenings {
		margin: 3rem 0 0 0;
		width: 100%;
	}
	a {
		display: block;
		margin-top: 1rem;
		opacity: 0.69;
		color: var(--emphasized-text);
	}
	a:hover {
		opacity: 1;
	}

</style>

<Head title="Hard Road of Hope">
	<script defer rel="preload" type="text/javascript" src="https://gumroad.com/js/gumroad.js"></script>
</Head>

<svelte:window bind:scrollY={y} />

<Hero {hero} />

<article class="container">
	<Laurels {laurels} />
	<span>A film by</span>
	<h2>{author}</h2>
	<p>{description}</p>
					<div class="screenings">
						<h2>Screenings</h2>
						<ul>
							{#each screenings as screening}
								<li>
									
										<h3>{screening.title}</h3>
										<span>{screening.date.slice(0, 10)}</span>
										<p>{screening.caption}</p>
										<a href={screening.laurel}>Learn more</a>
								<!-- <img src="{screening.image}" alt="{screening.alt}"> -->
								</li>
							{/each}
						</ul>
					</div>
	<InternalLink href="/trailers">Trailers</InternalLink>
</article>
