  <script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		min-height: calc(100vh - 2 * var(--nav-height));
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />