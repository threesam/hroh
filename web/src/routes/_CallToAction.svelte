<script>
	import Gumroad from './_Gumroad.svelte'

	import {blur} from 'svelte/transition'
</script>

<style>
	
</style>

<section id="gumroad-hero" class="umami--click--gumroad-hero" in:blur={{delay: 500, duration: 1500}}>
	<Gumroad/>
</section>