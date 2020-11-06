<script>
	import Gumroad from './_Gumroad.svelte'
</script>

<style>
	a {
		margin-left: 0.5rem;
		color: var(--emphasized-text);
	}
	a:hover {
		text-decoration: underline;
	}
</style>

<section class="container">
	<div>
		<Gumroad/>
		<a href="/">back</a>
	</div>
	<div class="vid-wrap">
		<iframe title="trailer-latest" src="https://player.vimeo.com/video/398117986" frameborder="0" allow="autoplay; fullscreen"
		allowfullscreen></iframe>
	</div>
	<div class="vid-wrap">
		<iframe title="trailer-monologue" src="https://player.vimeo.com/video/395858770" frameborder="0" allow="autoplay; fullscreen"
		allowfullscreen></iframe>
	</div>

</section>