<script>
	import CallToAction from "./_CallToAction.svelte"
					
	import {onMount} from 'svelte'
	import {fade, scale} from 'svelte/transition'
	export let hero
	const {settings} = hero
	const {title, image, alt} = settings

	// show order button
	let show = false
	onMount(()=> show = true)
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
		padding: 0 1rem;
		line-height: 1.1;
	}
</style>

<div>
	{#if show}
	<h1 in:fade={{delay: 500, duration: 1500}} id="{title}">{title}</h1>
	<CallToAction/>
	<img in:fade={{duration:3000}} src={image} {alt}>
	{/if}
</div>