<script>
	import Gumroad from './_Gumroad.svelte'

	import {blur} from 'svelte/transition'
</script>

<style>
	
</style>

<section in:blur={{delay: 1000, duration: 2000}}>
	<Gumroad/>
</section>