<script>
	import {blur} from 'svelte/transition'
	import Laurel from './_Laurel.svelte'

	export let laurels
</script>

<style>
	section {
		width: 100%;
		max-width: 600px;
		display: grid;
		place-content: center;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 0.25rem;
		padding: 0;
		margin: 3rem auto;
	}
</style>

<section in:blur={{delay: 2000, duration: 1000}}>
	{#each laurels as laurel}
		<Laurel {laurel} />
	{/each}
</section>