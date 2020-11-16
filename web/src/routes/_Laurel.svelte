<script>
	export let laurel
	const {image, title, alt} = laurel

	// image url function
	import myConfiguredSanityClient from '../sanityClient'
	import imageUrlBuilder from '@sanity/image-url'

	const builder = imageUrlBuilder(myConfiguredSanityClient)

	function urlFor(source) {
		return builder.image(source)
	}
</script>

<style>
	img {
		filter: invert();
		opacity: 0.8;
		width: 100%;
		height: auto;
	}
</style>			
<div>
	<img class="award" src={urlFor(image).maxWidth(200).url()} {alt}>
</div>