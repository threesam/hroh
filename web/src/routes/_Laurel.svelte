<script>
	export let laurel
	const {image, href, alt} = laurel

	// image url function
	import myConfiguredSanityClient from '../sanityClient'
	import imageUrlBuilder from '@sanity/image-url'

	const builder = imageUrlBuilder(myConfiguredSanityClient)

	function urlFor(source) {
		return builder.image(source)
	}
</script>

<style>
	a {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	a:hover {
		transform: scale(0.98);
		transition: all 0.3s ease-in-out;
	}
	img {
		filter: invert();
		opacity: 0.8;
		width: 100%;
		height: auto;
	}
</style>

<a rel="noopener" target="_blank" {href}>
	<img class="award" src={urlFor(image).width(200).url()} {alt} loading="lazy" />
</a>