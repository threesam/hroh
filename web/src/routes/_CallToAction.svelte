<script>
	import Gumroad from './_Gumroad.svelte'

	import {blur} from 'svelte/transition'
</script>

<style>
	
</style>

<section in:blur={{delay: 500, duration: 1500}}>
	<Gumroad/>
</section>