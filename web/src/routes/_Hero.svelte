<script>
	import {fade, blur} from 'svelte/transition'
	import Laurel from './_Laurel.svelte'
	export let hero
	const {laurels, settings} = hero
	const {title, image, alt} = settings
</script>

<style>
	div {
		position: relative;
		height: calc(100vh - var(--nav-height));
		width: 100%;
		display: grid;
		place-content: center;
		text-align: center;
		background-color: rgba(0,0,0,0.5);
	}

	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.25rem;
		padding: 0 2rem;
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

	h1 {
		font-size: 3rem;
	}
</style>

<div>
	<h1 in:fade={{duration: 2000}} id="{title}">{title}</h1>
	<section in:blur={{delay: 2000, duration: 1000}}>
		{#each laurels as laurel}
		<Laurel {laurel} />
		{/each}
	</section>
	<img src={image} {alt}>
</div>