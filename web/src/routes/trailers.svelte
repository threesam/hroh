<script>
	import Gumroad from './_Gumroad.svelte'
	import Head from '../components/Head.svelte'
</script>

<style>
	section {
		margin: 2rem 0 1rem 0;
	}
	h1 {
		margin-top: 1rem;
	}
</style>

<Head slug="trailers" title="Trailers" />

<article class="container">
	<h1>Trailers</h1>
	<div class="vid-wrap">
		<iframe title="trailer-latest" src="https://player.vimeo.com/video/398117986" frameborder="0" allow="autoplay; fullscreen"
		allowfullscreen></iframe>
	</div>
	<section id="gumroad-trailers" class="umami--click--gumroad-trailers">
		<Gumroad/>
	</section>
	<div class="vid-wrap">
		<iframe title="trailer-monologue" src="https://player.vimeo.com/video/395858770" frameborder="0" allow="autoplay; fullscreen"
		allowfullscreen></iframe>
	</div>

</article>