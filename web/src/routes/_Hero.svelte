<script>
	import {fade} from 'svelte/transition'
	import Laurel from './_Laurel.svelte'
	export let hero
	const {title, image, alt} = hero
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
	<Laurel/>
	<img src={image} {alt}>
</div>