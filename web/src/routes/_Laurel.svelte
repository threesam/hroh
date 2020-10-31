<script>
	export let laurel
	const {image, title, alt} = laurel
</script>

<style>
	img {
		filter: invert();
	}
</style>			
<div>
	<img class="award" src={`${image}?w=100`} {alt}>
</div>