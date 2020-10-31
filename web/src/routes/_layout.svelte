  <script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
	}
</style>

<Nav {segment}/>

<main class="container">
	<slot></slot>
</main>

<Footer />