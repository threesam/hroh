<script>
	import {blur} from 'svelte/transition'
	import Laurel from './_Laurel.svelte'

	export let laurels
</script>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.25rem;
		padding: 0;
		margin: 3rem 0;
	}
</style>

<section in:blur={{delay: 2000, duration: 1000}}>
	{#each laurels as laurel}
	<Laurel {laurel} />
	{/each}
</section>